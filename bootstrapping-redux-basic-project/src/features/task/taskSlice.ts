import type { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  task: ITask[];
}

const initialState: InitialState = {
  task: [
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
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export default taskSlice.reducer;
