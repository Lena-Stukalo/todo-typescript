/* eslint-disable prettier/prettier */
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { APP_KEYS } from '../common/consts';
import TodosPageContainer from '../todos';
import TodoIdPageContainer from '../todoId';
import RegisterPageContainer from '../register';

export const MainRouter = () => (
  <Router>
    <Routes>
      <Route element={<RegisterPageContainer />} path={APP_KEYS.ROUTER_KEYS.ROOT} />
      <Route element={<TodosPageContainer />} path={APP_KEYS.ROUTER_KEYS.TODOS} />
      <Route element={<TodoIdPageContainer />} path={APP_KEYS.ROUTER_KEYS.TODOID} />
    </Routes>
  </Router>
);
