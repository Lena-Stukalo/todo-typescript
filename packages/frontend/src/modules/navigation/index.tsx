/* eslint-disable prettier/prettier */
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePageContainer from '../home';
import { APP_KEYS } from '../common/consts';
import TodosPageContainer from '../todos';
import TodoIdPageContainer from '../todoId';

export const MainRouter = () => (
  <Router>
    <Routes>
      <Route element={<HomePageContainer />} path={APP_KEYS.ROUTER_KEYS.ROOT} />
      <Route element={<TodosPageContainer />} path={APP_KEYS.ROUTER_KEYS.TODOS} />
      <Route element={<TodoIdPageContainer />} path={APP_KEYS.ROUTER_KEYS.TODOID} />
    </Routes>
  </Router>
);
