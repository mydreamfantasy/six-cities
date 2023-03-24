import { Route, Routes } from 'react-router-dom';
import React from 'react';
import { HelmetProvider } from 'react-helmet-async';

import Home from '../../pages/home/home';
import Favorites from '../../pages/favorites/favorites';
import Login from '../../pages/login/login';
import Property from '../../pages/property/property';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../private-route/private-route';
import { AppRoute, AuthorizationStatus } from '../../const/const';
import LoadingScreen from '../loading-screen/loading-screen';
import { useAppSelector } from '../../hooks';
import HistoryRouter from '../history-router/history-router';
import browserHistory from '../../browser-history';

const App: React.FC = () => {
  const authorizationStatus = useAppSelector(
    (state) => state.authorizationStatus
  );

  const isOffersDataLoading = useAppSelector(
    (state) => state.isOffersDataLoading
  );

  if (
    authorizationStatus === AuthorizationStatus.Unknown ||
    isOffersDataLoading
  ) {
    return <LoadingScreen />;
  }

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route path={AppRoute.Root} element={<Home />} />
          <Route path={AppRoute.Login} element={<Login />} />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={authorizationStatus}>
                <Favorites />
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.Property} element={<Property />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
};

export default App;
