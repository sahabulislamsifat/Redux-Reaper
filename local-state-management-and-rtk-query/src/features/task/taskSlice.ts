import type { RootState } from "@/store";
import type { ITask } from "@/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";
// import { v4 as uuidv4 } from "uuid";

interface InitialState {
  tasks: ITask[];
  filter: "all" | "high" | "medium" | "low";
}

const initialState: InitialState = {
  tasks: [
    {
      id: "shdiahahdad",
      title: "Initialize Frontend",
      description: "Create homepage and routing",
      dueDate: "2025-07-04",
      isCompleted: false,
      priority: "low",
    },
    // {
    //   id: "shdiahahdad",
    //   title: "Initialize Backend",
    //   description: "Create backend for frontend",
    //   dueDate: "2025-07-04",
    //   isComplicated: true,
    //   priority: "Medium",
    // },
    // {
    //   id: "shdiahahdad",
    //   title: "Initialize FullStack",
    //   description: "Create homepage and routing all over",
    //   dueDate: "2025-07-04",
    //   isComplicated: false,
    //   priority: "Low",
    // },
    // {
    //   id: "shdiahahdad",
    //   title: "Initialize Frontend",
    //   description: "Create homepage and routing",
    //   dueDate: "2025-07-04",
    //   isComplicated: false,
    //   priority: "High",
    // },
  ],
  filter: "all",
};

type DraftTask = Pick<ITask, "title" | "description" | "priority" | "dueDate">;

const createTask = (taskData: DraftTask): ITask => {
  return { id: nanoid(), isCompleted: false, ...taskData };
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {
      // const id = "sdsdjsdhshdsd";
      // const id = uuidv4();
      // const taskData = { ...action.payload, id, isComplicated: false };
      // state.tasks.push(action.payload);
      const taskData = createTask(action.payload);
      state.tasks.push(taskData);
    },
    toggleCompeteState: (state, action: PayloadAction<string>) => {
      console.log(action);

      state.tasks.forEach((task) =>
        task.id === action.payload
          ? (task.isCompleted = !task.isCompleted)
          : task
      );
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});

export const selectTask = (state: RootState) => {
  return state.todo.tasks;
};
export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};

export const { addTask, toggleCompeteState, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;
