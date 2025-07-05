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

import type { ITask } from "@/types";
import { CheckIcon } from "lucide-react";

interface IProps {
  task: ITask;
  onToggleComplete: (id: string) => void;
  onDelete: (id: string) => void;
}

const TaskCard = ({ task, onToggleComplete, onDelete }: IProps) => {
  const { title, priority, description, dueDate, isComplicated, id } = task;

  return (
    <div className="shadow-md rounded my-5 p-5 w-full max-w-md border mx-auto border-gray-200 hover:shadow-lg transition">
      <div className="flex justify-between items-center mb-3">
        <h2
          className={`text-xl font-semibold ${
            isComplicated ? "line-through text-gray-400" : ""
          }`}
        >
          {title}
        </h2>
        <span
          className={`text-xs px-2 py-1 rounded-full font-semibold ${
            priority === "High"
              ? "bg-red-100 text-red-600"
              : priority === "Medium"
              ? "bg-yellow-100 text-yellow-600"
              : "bg-green-100 text-green-600"
          }`}
        >
          {priority} Priority
        </span>
      </div>

      <p className="mb-2">{description}</p>

      <div className="flex justify-between text-sm text-gray-500 mt-4">
        <p>
          <strong>Due:</strong> {new Date(dueDate).toLocaleDateString()}
        </p>
        <p>
          <strong>Completed:</strong> {isComplicated ? "Yes" : "No"}
        </p>
      </div>

      <div className="mt-5 flex justify-end gap-3">
        <button
          onClick={() => onToggleComplete(id)}
          className={`px-3 py-1 text-sm rounded flex items-center gap-1 transition ${
            isComplicated
              ? "bg-green-100 text-green-600 hover:bg-green-200"
              : "bg-yellow-100 text-yellow-600 hover:bg-yellow-200"
          }`}
          title="Toggle Completed"
        >
          <CheckIcon size={16} />
          {isComplicated ? "Done" : "Mark Done"}
        </button>

        <button
          onClick={() => onDelete(id)}
          className="px-4 py-1 text-sm bg-red-100 text-red-600 rounded hover:bg-red-200"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
