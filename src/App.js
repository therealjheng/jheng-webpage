import React from "react";
import { Router } from "react-router-dom";
import GAListener from './GAListener';
import { createBrowserHistory } from 'history';

import Routes from "./routes";
import Deck from "./components/photoAlbum";


const browserHistory = createBrowserHistory();
const GATrackingId = process.env.REACT_APP_GA_TRACKING_ID;

const App = () => (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
    <GAListener trackingId={GATrackingId}>
      <Routes />
    </GAListener>
  </Router>
);

export default App;
