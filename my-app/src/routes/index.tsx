import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ProtectedRoutes } from "../components/ProtectedRoutes";
import { Dashboard } from "../pages/Dashboard";
import { Login } from "../pages/Login";
import { Signup } from "../pages/Signup";

export const RoutesMain = () => {
  const [type, setType] = useState("password");

  function inputType(atribute: string) {
    setType(atribute);
  }

  return (
    <Routes>
      <Route
        path="/login"
        element={<Login type={type} inputType={inputType} />}
      />
      <Route path="/signup" element={<Signup inputType={inputType} />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/dashboard/:id" element={<Dashboard />} />
      </Route>

      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};
