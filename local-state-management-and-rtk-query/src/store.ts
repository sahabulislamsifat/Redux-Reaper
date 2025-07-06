// import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./features/counter/counterSlice";
// import taskReducer from "./features/task/taskSlice";
// import userReducer from "./features/user/userSlice";

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//     todo: taskReducer,
//     user: userReducer,
//   },
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./redux/api/baseApi";

export const store = configureStore({
  reducer: { [baseApi.reducerPath]: baseApi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
