import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import AppRoutes from "./routes";

import "./global.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="h-full w-full dark:bg-slate-900 dark:text-white bg-gray-200 text-black min-h-screen min-w-screen">
        <AppRoutes />
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
