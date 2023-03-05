import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
// import { comments } from './mocks/comments';
import { offers } from './mocks/offers';

const Setting = {
  offersCount: 5,
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offersCount={Setting.offersCount} offers={offers} />
  </React.StrictMode>
);
