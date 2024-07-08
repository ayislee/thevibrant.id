import React, { Suspense } from "react";
import { BrowserRouter, Routes as RoutesDom, Route } from "react-router-dom";
import routes from "./routes";

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div id="page-preloader">
            <span className="spinner"></span>
          </div>
        }
      >
        <RoutesDom>
          {routes.map((item) => (
            <Route path={item.path} element={<item.component />} />
          ))}
        </RoutesDom>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
