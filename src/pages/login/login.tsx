import React from 'react';

import Layout from '../../components/layout/layout';
import LoginForm from '../../components/login-form/login-form';

const Login: React.FC = () => (
  <Layout className="page--gray page--login" hasNav={false} pageTitle="Login">
    <main className="page__main page__main--login">
      <LoginForm />
    </main>
  </Layout>
);

export default Login;
