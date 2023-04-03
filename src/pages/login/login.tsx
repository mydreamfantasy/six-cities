import React from 'react';
import { Link } from 'react-router-dom';

import Layout from '../../components/layout/layout';
import LoginForm from '../../components/login-form/login-form';
import { AppRoute, CITIES } from '../../const/const';
import { useAppDispatch } from '../../hooks';
import { changeCity } from '../../store/app-slice/app';
import { getRandomCity } from '../../utils/utils';

const Login: React.FC = () => {
  const randomCity = getRandomCity(CITIES);
  const dispatch = useAppDispatch();

  return (
    <Layout className="page--gray page--login" hasNav={false} pageTitle="Login">
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <LoginForm />
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link
                className="locations__item-link"
                to={AppRoute.Root}
                onClick={() => dispatch(changeCity(randomCity))}
              >
                <span>{randomCity}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
};

export default Login;
