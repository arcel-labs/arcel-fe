import { Route } from "react-router";
import { Routes } from "react-router-dom";
import { Home } from "./pages";
import { Form } from "./pages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<div>nada por aqui...</div>} />
      <Route path="/" element={<Home />} />
      <Route path="/form" element={<Form />} />
    </Routes>
  );
};

export default AppRoutes;
