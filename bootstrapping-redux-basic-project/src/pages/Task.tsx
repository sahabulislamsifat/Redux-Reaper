import { useAppSelector } from "@/features/hook/hook";
import { selectFilter, selectTask } from "@/features/task/taskSlice";

const Task = () => {
  const task = useAppSelector(selectTask);
  const filter = useAppSelector(selectFilter);
  console.log(task, filter);

  return (
    <div>
      <h1>This is Task Component</h1>
    </div>
  );
};

export default Task;
