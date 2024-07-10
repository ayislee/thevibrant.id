import { lazy } from "react";

const routes = [
  {
    path: "/",
    component: lazy(() => import("pages/catalogues")),
  },
  {
    path: "/contact-us",
    component: lazy(() => import("pages/contactus")),
  },
  {
    path: "/*",
    component: lazy(() => import("pages/notFound")),
  }
];

export default routes;
