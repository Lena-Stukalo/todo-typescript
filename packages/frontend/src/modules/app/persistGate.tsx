/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { useCurrentUser } from '../auth/hooks/useCurrentUser';
import Loader from '../common/components/loader/loader.component';

interface IProps {
  children: React.ReactNode;
}
export const PersisrGate: React.FC<IProps> = ({ children }) => {
  const { isLoading } = useCurrentUser();

  if (isLoading) {
    return <Loader />;
  }
  return <>{children}</>;
};
