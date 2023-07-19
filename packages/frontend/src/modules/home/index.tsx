/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { Navigate } from 'react-router-dom';
import { APP_KEYS } from '../common/consts';
import { useCurrentUser } from '../auth/hooks/useCurrentUser';

const HomePageContainer = () => {
  useCurrentUser();
return <Navigate to={APP_KEYS.ROUTER_KEYS.LOGIN} />;
};

export default HomePageContainer;
