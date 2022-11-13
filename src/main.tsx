import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import AppRoutes from "./routes";
import logo from './assets/weduk-logo.png';

import "./global.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="h-full w-full dark:bg-slate-900 dark:text-white bg-primary-white text-black min-h-screen min-w-screen flex flex-col">
        <div className="container mx-auto lg:px-4 sm:px-3 px-2 py-4">
        <img src={logo} alt="Logo da empresa" className="w-24  rounded-md" />
        <AppRoutes />
        </div>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
