/**
 * Created by esterlingaccime on 6/27/17.
 */
import React from "react";


import fetch from "../utils/api";

class Profile extends React.Component{
    constructor(){
        super();

    }

    componentDidMount(){
        console.log("Hello World!!");
        fetch.getData()
            .then(function (data) {
                console.log(data);
            })
            .catch(function (err) {
                console.log(err);
            });
    }


    render(){
        return(
            <h1>Welcome to Profile</h1>
        );
    }
}

export default Profile;