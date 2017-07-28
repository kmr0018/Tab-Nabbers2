/**
 * Created by ea375w on 7/19/2017.
 */

import Signin from "../Components/Student";
import Recruiter from "../Components/Recruiter";
import Profile from "../Components/Profile";
import About from "../Components/About";
import D3Map from "../Components/D3Map";
import Event from "../Components/Event";

const pages = {
        about:About,
        student:Signin,
        profile:Profile,
        map:D3Map,
        recruiter:Recruiter,
        event:Event
};


export default pages;
