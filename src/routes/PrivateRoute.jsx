import { Navigate, useLocation } from "react-router-dom";
import MySpinner from "../components/MySpinner";
import useAuth from "../hooks/useAuth";

export default function PrivateRoute({ children }) {
  const { user, loading } = useAuth();

  const { pathname } = useLocation();

  if (loading) return <MySpinner />;

  if (user) return children;

  return <Navigate state={pathname} to="/login" />
}
