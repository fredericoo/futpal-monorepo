import { createBrowserRouter } from "react-router-dom";

import { homeLoader, HomePage } from "~/routes/home";

export const router = createBrowserRouter([
  {
    path: "/",
    loader: homeLoader,
    Component: HomePage,
  },
]);
