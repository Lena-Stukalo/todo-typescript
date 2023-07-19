/* eslint-disable react/react-in-jsx-scope */
import { Navigate, Outlet } from 'react-router-dom';
import { useGetIsLogedIn } from '../../auth/hooks/useGetIsLogedIn';
import { APP_KEYS } from '../consts';

export default function PrivatRoute() {
  const IsLoggedIn = useGetIsLogedIn();

  if (!IsLoggedIn) {
    return <Navigate to={APP_KEYS.ROUTER_KEYS.LOGIN} />;
  }

  return <Outlet />;
}
