import React from "react";
import { Route, IndexRoute, Router, browserHistory } from "react-router";

import Main from "../Components/Main";
import Home from "../Components/Home";
import Student from "../Components/Student";

const Routes = (
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <Route path="about" component={Home} />
            <Route path="signup" component={Student} />
            <IndexRoute component={Home} />
        </Route>
    </Router>
);

export default Routes;
