import { AddTaskModal } from "@/components/ui/modules/AddTaskModal";
import TaskCard from "@/components/ui/modules/TaskCard";
// import TaskCard from "@/components/ui/modules/TaskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetTaskQuery } from "@/redux/api/baseApi";
import type { ITask } from "@/types";
// import { useAppDispatch, useAppSelector } from "@/features/hook/hook";
// import { selectTask, updateFilter } from "@/features/task/taskSlice";

const Task = () => {
  // const task = useAppSelector(selectTask);
  // console.log(task);

  // const onEdit = () => {
  //   console.log("hello ");
  // };
  // const onDelete = () => {
  //   console.log("hello");
  // };
  // const dispatch = useAppDispatch();

  const { data, isLoading, isError } = useGetTaskQuery(undefined);
  console.log({ data, isLoading, isError });
  if (isLoading) <p>Loading...</p>;

  return (
    <div className="container mx-auto">
      <h1>Task</h1>
      <div className="flex ml-[1000px]">
        <Tabs defaultValue="all">
          <TabsList className="grid grid-cols-4">
            <TabsTrigger
              // onClick={() => dispatch(updateFilter("all"))}
              value="all"
            >
              All
            </TabsTrigger>
            <TabsTrigger
              // onClick={() => dispatch(updateFilter("high"))}
              value="high"
            >
              High
            </TabsTrigger>
            <TabsTrigger
              // onClick={() => dispatch(updateFilter("medium"))}
              value="medium"
            >
              Medium
            </TabsTrigger>
            <TabsTrigger
              // onClick={() => dispatch(updateFilter("low"))}
              value="low"
            >
              Low
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <AddTaskModal></AddTaskModal>
      </div>
      {!isLoading &&
        data.task.map((task: ITask) => <TaskCard task={task}></TaskCard>)}
    </div>
  );
};

export default Task;
