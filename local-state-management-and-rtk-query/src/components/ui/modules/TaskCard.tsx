// interface TaskProps {
//   id: string;
//   title: string;
//   description: string;
//   dueDate: string;
//   isComplicated: boolean;
//   priority: "Low" | "Medium" | "High";
//   onEdit: (id: string) => void;
//   onDelete: (id: string) => void;
// }

import { useAppDispatch, useAppSelector } from "@/features/hook/hook";
import { deleteTask, toggleCompeteState } from "@/features/task/taskSlice";
import { CheckIcon } from "lucide-react";
import { Checkbox } from "../checkbox";
import { selectUser } from "@/features/user/userSlice";
// import type { IProps } from "@/pages/Task";

interface Task {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  isCompleted: boolean;
  priority: "low" | "medium" | "high";
  assignTo?: string; // Add this property, adjust type as needed
}

interface TaskCardProps {
  task: Task;
}

const TaskCard = ({ task }: TaskCardProps) => {
  const { title, priority, description, dueDate, isCompleted, id } = task;

  const dispatch = useAppDispatch();

  const users = useAppSelector(selectUser);
  console.log(users);
  console.log(task.assignTo);

  const assignUser = users.find((user) => user.id === task.assignTo);

  return (
    <div className="shadow-md rounded my-5 p-5 w-full max-w-md border mx-auto border-gray-200 hover:shadow-lg transition">
      <div className="flex justify-between items-center mb-3">
        <h2
          className={`text-xl font-semibold ${
            isCompleted ? "line-through text-gray-400" : ""
          }`}
        >
          {title}
        </h2>
        <span
          className={`text-xs px-2 py-1 rounded-full font-semibold ${
            priority === "high"
              ? "bg-red-100 text-red-600"
              : priority === "medium"
              ? "bg-yellow-100 text-yellow-600"
              : "bg-green-100 text-green-600"
          }`}
        >
          {priority} Priority
        </span>
      </div>
      <p>Assign To : {assignUser ? assignUser.title : "No One"}</p>
      <p className="mb-2">{description}</p>

      <div className="flex justify-between text-sm text-gray-500 mt-4">
        <p>
          <strong>Due:</strong> {new Date(dueDate).toLocaleDateString()}
        </p>
        <p>
          <strong>Completed:</strong> {isCompleted ? "Yes" : "No"}
        </p>
      </div>

      <div className="mt-5 flex justify-end gap-3">
        <Checkbox
          checked={isCompleted}
          onClick={() => dispatch(toggleCompeteState(id))}
          className={` text-sm rounded-none mt-[6px] flex items-center gap-1 transition ${
            isCompleted
              ? "bg-green-100 text-green-600 hover:bg-green-200"
              : "bg-yellow-100 text-yellow-600 hover:bg-yellow-200"
          }`}
          title="Toggle Completed"
        >
          <CheckIcon size={16} />
          {isCompleted ? "Done" : "Mark Done"}
        </Checkbox>

        <button
          onClick={() => dispatch(deleteTask(id))}
          className="px-4 py-1 text-sm bg-red-100 text-red-600 rounded-none hover:bg-red-200"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
