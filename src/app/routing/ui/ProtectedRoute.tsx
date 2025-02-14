import { ReactNode } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { LOGIN } from '@/shared/router';

interface ProtectedRouteProps {
  isAllowed: boolean;
  redirectPath?: string;
  children?: ReactNode;
}

const ProtectedRoute = ({
  isAllowed,
  redirectPath = LOGIN,
  children = null,
}: ProtectedRouteProps) => {
  const location = useLocation();

  if (!isAllowed) {
    return <Navigate to={redirectPath} replace state={{ from: location }} />;
  }

  return children || <Outlet />;
};

export default ProtectedRoute;
