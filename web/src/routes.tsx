import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import OrphanagesMaps from "./pages/OrphanagesMap";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Landing} exact />
        <Route path="/app" component={OrphanagesMaps} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
