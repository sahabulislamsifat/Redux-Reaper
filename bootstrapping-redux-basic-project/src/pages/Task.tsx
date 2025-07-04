import { AddTaskModal } from "@/components/ui/modules/AddTaskModal";
import TaskCard from "@/components/ui/modules/TaskCard";
import { useAppSelector } from "@/features/hook/hook";
import { selectTask } from "@/features/task/taskSlice";

const Task = () => {
  const task = useAppSelector(selectTask);
  // console.log(task);

  const onEdit = () => {
    console.log("hello ");
  };
  const onDelete = () => {
    console.log("hello ");
  };

  return (
    <div className="container mx-auto">
      <h1>Task</h1>
      <div className="flex ml-[1000px]">
        <AddTaskModal></AddTaskModal>
      </div>
      {task.map((task) => (
        <TaskCard onEdit={onEdit} onDelete={onDelete} task={task}></TaskCard>
      ))}
    </div>
  );
};

export default Task;
