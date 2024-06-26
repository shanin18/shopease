import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth"
import LoadingSpinner from "../components/others/LoadingSpinner"

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (user) {
    return children;
  }

  return <Navigate to={"/auth/login"} state={{ from: location }} replace />;
};

export default PrivateRoute;
