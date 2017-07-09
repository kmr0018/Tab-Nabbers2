import React from "react";
import { Route, IndexRoute, Router, browserHistory } from "react-router";

import Main from "../Components/Main";
import Home from "../Components/Home";
import Signup from "../Components/Signup";
import Signin from "../Components/Student";
import Recruiter from "../Components/Recruiter";
import Profile from "../Components/Profile";
import About from "../Components/About";
import D3Map from "../Components/D3Map";


const Routes = (
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <Route path="about" component={About} />
            <Route path="signup" component={Signup} />
            <Route path="student" component={Signin} />
            <Route path="profile" component={Profile} />
            <Route path="map" component={D3Map}></Route>
            <Route path="recruiter" component={Recruiter}></Route>
            <IndexRoute component={Home} />
        </Route>
    </Router>
);

export default Routes;

/*<Route path="profile" component={Profile}>
    <Route path="/" component={Profile} />
</Route>*/
