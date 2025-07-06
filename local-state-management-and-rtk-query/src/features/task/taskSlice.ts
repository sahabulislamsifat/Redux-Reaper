// import type { RootState } from "@/store";
// import type { ITask } from "@/types";
// import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";
// import { removeUser } from "../user/userSlice";

// import { v4 as uuidv4 } from "uuid";

// interface InitialState {
//   tasks: ITask[];
//   filter: "all" | "high" | "medium" | "low";
// }

// const initialState: InitialState = {
//   tasks: [
//     {
//       id: "shdiahahdad",
//       title: "Initialize Frontend",
//       description: "Create homepage and routing",
//       dueDate: "2025-07-04",
//       isCompleted: false,
//       priority: "low",
//       assignTo: null,
//     },
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
//   ],
//   filter: "all",
// };

// type DraftTask = Pick<
//   ITask,
//   "title" | "description" | "priority" | "dueDate" | "assignTo"
// >;

// const createTask = (taskData: DraftTask): ITask => {
//   return {
//     ...taskData,
//     id: nanoid(),
//     isCompleted: false,
//     assignTo: taskData.assignTo ? taskData.assignTo : null,
//   };
// };

// const taskSlice = createSlice({
//   name: "tasks",
//   initialState,
//   reducers: {
//     addTask: (state, action: PayloadAction<ITask>) => {
//       // const id = "sdsdjsdhshdsd";
//       // const id = uuidv4();
//       // const taskData = { ...action.payload, id, isComplicated: false };
//       // state.tasks.push(action.payload);
//       const taskData = createTask(action.payload);
//       state.tasks.push(taskData);
//     },
//     toggleCompeteState: (state, action: PayloadAction<string>) => {
//       console.log(action);

//       state.tasks.forEach((task) =>
//         task.id === action.payload
//           ? (task.isCompleted = !task.isCompleted)
//           : task
//       );
//     },
//     deleteTask: (state, action: PayloadAction<string>) => {
//       state.tasks = state.tasks.filter((task) => task.id !== action.payload);
//     },
//     updateFilter: (
//       state,
//       action: PayloadAction<"all" | "low" | "medium" | "high">
//     ) => {
//       state.filter = action.payload;
//     },
//   },
//   extraReducers(builder) {
//     builder.addCase(removeUser, (state, action) => {
//       state.tasks.forEach((task) =>
//         task.assignTo === action.payload ? (task.assignTo = null) : task
//       );
//     });
//   },
// });

// export const selectTask = (state: RootState) => {
//   const filter = state.todo.filter;
//   if (filter === "low") {
//     return state.todo.tasks.filter((task) => task.priority === "low");
//   } else if (filter === "medium") {
//     return state.todo.tasks.filter((task) => task.priority === "medium");
//   } else if (filter === "high") {
//     return state.todo.tasks.filter((task) => task.priority === "high");
//   } else {
//     return state.todo.tasks;
//   }
// };
// export const selectFilter = (state: RootState) => {
//   return state.todo.filter;
// };

// export const { addTask, toggleCompeteState, deleteTask, updateFilter } =
//   taskSlice.actions;

// export default taskSlice.reducer;
