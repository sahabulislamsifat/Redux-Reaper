import { AddTaskModal } from "@/components/ui/modules/AddTaskModal";
import TaskCard from "@/components/ui/modules/TaskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAppDispatch, useAppSelector } from "@/features/hook/hook";
import { selectTask, updateFilter } from "@/features/task/taskSlice";

const Task = () => {
  const task = useAppSelector(selectTask);
  // console.log(task);

  // const onEdit = () => {
  //   console.log("hello ");
  // };
  // const onDelete = () => {
  //   console.log("hello");
  // };
  const dispatch = useAppDispatch();

  return (
    <div className="container mx-auto">
      <h1>Task</h1>
      <div className="flex ml-[1000px]">
        <Tabs defaultValue="all">
          <TabsList className="grid grid-cols-4">
            <TabsTrigger
              onClick={() => dispatch(updateFilter("all"))}
              value="all"
            >
              All
            </TabsTrigger>
            <TabsTrigger
              onClick={() => dispatch(updateFilter("high"))}
              value="high"
            >
              High
            </TabsTrigger>
            <TabsTrigger
              onClick={() => dispatch(updateFilter("medium"))}
              value="medium"
            >
              Medium
            </TabsTrigger>
            <TabsTrigger
              onClick={() => dispatch(updateFilter("low"))}
              value="low"
            >
              Low
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <AddTaskModal></AddTaskModal>
      </div>
      {task.map((task) => (
        <TaskCard task={task}></TaskCard>
      ))}
    </div>
  );
};

export default Task;
