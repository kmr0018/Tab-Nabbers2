import React from "react";
import { Route, IndexRoute, Router, browserHistory } from "react-router";

import Main from "../Components/Main";
import Home from "../Components/Home";
import Signup from "../Components/Signup";
import Signin from "../Components/Signin";
import Profile from "../Components/Profile";
import About from "../Components/About";


const Routes = (
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <Route path="about" component={About} />
            <Route path="signup" component={Signup} />
            <Route path="signin" component={Signin} />
            <Route path="profile" component={Profile} />
            <IndexRoute component={Home} />

        </Route>


    </Router>
);

export default Routes;

/*<Route path="profile" component={Profile}>
    <Route path="/" component={Profile} />
</Route>*/
