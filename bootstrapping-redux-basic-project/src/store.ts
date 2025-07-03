import { configureStore } from "@reduxjs/toolkit";
import reducer from "./features/counter/counterSlice";
import logger from "./middlewares/logger";

export const store = configureStore({
  reducer: { reducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
