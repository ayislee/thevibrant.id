import { lazy } from "react";

const routes = [
  {
    path: "/",
    component: lazy(() => import("pages/catalogues")),
    // component: lazy(() => import("pages/notFound")),
  },
  {
    path: "/*",
    component: lazy(() => import("pages/notFound")),
  }
  // {
  //   path: "/:slug",
  //   component: lazy(() => import("pages/catalogues")),
  // },
];

export default routes;
