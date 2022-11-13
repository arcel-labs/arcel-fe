import { Route } from "react-router";
import { Routes } from "react-router-dom";
import { Home } from "./pages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<div>nada por aqui...</div>} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;
