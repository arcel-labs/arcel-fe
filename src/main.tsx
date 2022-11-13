import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./global.css";
import AppRoutes from "./routes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="h-screen w-screen dark:bg-slate-900 dark:text-white bg-gray-200 text-black">
        <AppRoutes />
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
