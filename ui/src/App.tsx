import React from 'react';
import { withRouter, RouteComponentProps } from "react-router-dom";

import './app.css';
import Routes from "./routes"

const App: React.FC<RouteComponentProps> = () => {

  return (
    <div className="app">
      <Routes />
    </div>
  );
};

export default withRouter(App);
