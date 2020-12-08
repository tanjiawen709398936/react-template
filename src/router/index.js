import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import Main from "@/pages/main";


export default () => (
  <HashRouter>
    <Switch>
      <Route path="/" component={Main}></Route>
    </Switch>
  </HashRouter>
);
