import { Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

const PrivateRoute = ({ children, requiredRole }) => {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (requiredRole && user.role !== requiredRole) {
    // Se tem role requerida e usuário não tem, bloqueia
    return <Navigate to="/unauthorized" />; // ou outra página de aviso
  }

  return children;
};

export default PrivateRoute;
