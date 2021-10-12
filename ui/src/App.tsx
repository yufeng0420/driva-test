import React from 'react';
import { withRouter } from "react-router-dom";

import './app.css';
import Routes from "./routes"

const App: React.FC = () => {

  return (
    <div className="app">
      <Routes />
    </div>
  );
};

export default withRouter(App);
