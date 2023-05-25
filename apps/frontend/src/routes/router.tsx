import { createBrowserRouter } from "react-router-dom";
import { HomePage, homeLoader } from "~/routes/home";

export const router = createBrowserRouter([
  {
    path: "/",
    loader: homeLoader,
    Component: HomePage,
  },
]);
