import React, { memo, Suspense, lazy } from "react";
import { withRouter, Route, Switch } from "react-router-dom";


const NotFound = lazy(() => import('../../shared/components/404'))
const Home = lazy(() => import('./home/Home'))
const SeriesDetails = lazy(() => import('./details/SeriesDetails'))
const MovieDetails = lazy(() => import('./details/MovieDetails'))

const Routing = memo(()=>{
  return (
  	<Suspense fallback={<h4>Loading...</h4>}>
	    <Switch>
	      <Route exact path="/movie/:id" component={MovieDetails}/>
	      <Route exact path="/tv-series/:id" component={SeriesDetails}/>
	      <Route exact path="/" component={Home}/>
	      <Route component={NotFound}/>
	    </Switch>
    </Suspense>
  );
})

export default withRouter(Routing);
