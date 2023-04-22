import { Route, Routes } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Home from '../../pages/home/home';
import PrivateRoute from '../private-route/private-route';
import { AppRoute } from '../../const/const';
import LoadingScreen from '../loading-screen/loading-screen';
import { useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { ErrorBoundary } from 'react-error-boundary';

const App: React.FC = () => {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const Favorites = lazy(() => import('../../pages/favorites/favorites'));
  const Login = lazy(() => import('../../pages/login/login'));
  const Property = lazy(() => import('../../pages/property/property'));
  const NotFound = lazy(() => import('../../pages/not-found/not-found'));

  return (
    <ErrorBoundary fallback={<div>Something wrong</div>}>
      <Suspense fallback={<LoadingScreen type="big" />}>
        <HelmetProvider>
          <Routes>
            <Route path={AppRoute.Root} element={<Home />} />
            <Route path={AppRoute.Login} element={<Login />} />
            <Route
              path={AppRoute.Favorites}
              element={
                <PrivateRoute authorizationStatus={authorizationStatus}>
                  <Suspense fallback={<LoadingScreen type="big" />}>
                    <Favorites />
                  </Suspense>
                </PrivateRoute>
              }
            />
            <Route path={AppRoute.Property} element={<Property />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HelmetProvider>
      </Suspense>
    </ErrorBoundary>
  );
};

export default App;
