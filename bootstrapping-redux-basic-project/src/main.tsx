import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./store.ts";
import { RouterProvider } from "react-router";
import router from "./routes/router.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </StrictMode>
);
