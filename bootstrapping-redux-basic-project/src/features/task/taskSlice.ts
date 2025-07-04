import type { RootState } from "@/store";
import type { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

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
      isComplicated: false,
      priority: "High",
    },
    {
      id: "shdiahahdad",
      title: "Initialize Frontend",
      description: "Create homepage and routing",
      dueDate: "2025-07-04",
      isComplicated: false,
      priority: "High",
    },
    {
      id: "shdiahahdad",
      title: "Initialize Frontend",
      description: "Create homepage and routing",
      dueDate: "2025-07-04",
      isComplicated: false,
      priority: "High",
    },
    {
      id: "shdiahahdad",
      title: "Initialize Frontend",
      description: "Create homepage and routing",
      dueDate: "2025-07-04",
      isComplicated: false,
      priority: "High",
    },
  ],
  filter: "all",
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
});

export const selectTask = (state: RootState) => {
  return state.todo.tasks;
};
export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};

export default taskSlice.reducer;
