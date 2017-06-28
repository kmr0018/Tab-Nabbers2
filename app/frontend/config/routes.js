import React from "react";
import { Route, IndexRoute, Router, browserHistory } from "react-router";

import Main from "../Components/Main";
import Home from "../Components/Home";
import Signup from "../Components/Signup";
import Signin from "../Components/Signin";
import Profile from "../Components/Profile";

const Routes = (
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <Route path="about" component={Home} />
            <Route path="signup" component={Signup} />
            <Route path="signin" component={Signin} />
            <IndexRoute component={Home} />

        </Route>

        <Route path="profile" component={Profile}>
            <Route path="/" component={Profile} />
        </Route>
    </Router>
);

export default Routes;