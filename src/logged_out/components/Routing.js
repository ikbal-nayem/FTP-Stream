import React, { memo } from "react";
import { withRouter, Route, Switch } from "react-router-dom";
import Home from "./home/Home";
import PageNotFound from '../../shared/components/404';

const Routing = memo(()=>{
  return (
    <Switch>
      <Route exact path="/movies" component={Home}/>
      <Route exact path="/tv-series" component={Home}/>
      <Route exact path="/" component={Home}/>
      <Route component={PageNotFound}/>
    </Switch>
  );
})

export default withRouter(Routing);
