import React from "react";
import Nav from "./common/Navbar";

var Main = props => {
    return (
        <div className="main--app">
            <Nav />
            {props.children}
        </div>
    );
};

export default Main;
