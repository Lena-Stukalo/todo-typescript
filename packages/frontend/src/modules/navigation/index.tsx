/* eslint-disable prettier/prettier */
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { APP_KEYS } from '../common/consts';
import TodosPageContainer from '../todos';
import TodoIdPageContainer from '../todoId';
import RegisterPageContainer from '../auth/register';
import LoginPageContainer from '../auth/login';
import HomePageContainer from '../home';
import ProfilePageContainer from '../auth/profile';
import ForgotPageContainer from '../auth/fogot';
import PublicRoute from '../common/route/public.route';
import PrivatRoute from '../common/route/private.route';

export const MainRouter = () => (
  <Router>
    <Routes>
      <Route element={<HomePageContainer />} path={APP_KEYS.ROUTER_KEYS.ROOT} />
      <Route element={<PublicRoute />}>
        <Route element={<LoginPageContainer />} path={APP_KEYS.ROUTER_KEYS.LOGIN} />
        <Route element={<ForgotPageContainer />} path={APP_KEYS.ROUTER_KEYS.FORGOT} />
        <Route element={<RegisterPageContainer />} path={APP_KEYS.ROUTER_KEYS.REGISTER} />
      </Route>
      <Route element={<PrivatRoute />}>
        <Route element={<TodosPageContainer />} path={APP_KEYS.ROUTER_KEYS.TODOS} />
        <Route element={<TodoIdPageContainer />} path={APP_KEYS.ROUTER_KEYS.TODOID} />
        <Route element={<ProfilePageContainer />} path={APP_KEYS.ROUTER_KEYS.PROFILE} />
      </Route>

    </Routes>
  </Router>
);
