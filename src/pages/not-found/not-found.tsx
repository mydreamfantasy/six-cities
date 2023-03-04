import React from 'react';
import { Helmet } from 'react-helmet-async';

import Logo from '../../components/logo/logo';
import NotFoundBlock from '../../components/not-found-block/not-found-block';

const NotFound: React.FC = () => (
  <>
    <Helmet>
      <title>Six Cities. Not Found</title>
    </Helmet>
    <Logo />
    <NotFoundBlock />
  </>
);

export default NotFound;
