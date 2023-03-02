import Home from "../../pages/Home";
import React from "react";

type AppScreenProps = {
  offersCount: number;
};

const App: React.FC<AppScreenProps> = ({ offersCount }) => {
  return <Home offersCount={offersCount} />;
};

export default App;
