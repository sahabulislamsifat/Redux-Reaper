import App from "@/App";
import Task from "@/pages/Task";
import User from "@/pages/User";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <div>Hello </div>,
    // element: <App></App>,
    Component: App,
    children: [
      {
        // path: "task",
        index: true,
        Component: Task,
      },
      { path: "users", Component: User },
    ],
  },
]);

export default router;
