import Home from '../../pages/home/home';
import React from 'react';

type AppScreenProps = {
  offersCount: number;
};

const App: React.FC<AppScreenProps> = ({ offersCount }) => <Home offersCount={offersCount} />;

export default App;
