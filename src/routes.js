import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Deck from "./components/photoAlbum";

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route component={Deck} exact path="/photo-album" />
      </Switch>
    );
  }
}
