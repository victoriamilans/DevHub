import { Navigate, Outlet } from "react-router-dom";
import { UserTechProvider } from "../../contexts/TechContext";

export const ProtectedRoutes = () => {
  const token = localStorage.getItem("@Token-KenzieHub");

  return token ? (
    <UserTechProvider>
      <Outlet />
    </UserTechProvider>
  ) : (
    <Navigate to="/signup" />
  );
};
