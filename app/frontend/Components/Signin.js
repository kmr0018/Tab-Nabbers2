/**
 * Created by esterlingaccime on 6/27/17.
 */
import React from "react";

import {Button, Checkbox, Form} from "semantic-ui-react";

import fetch from "../utils/api";

class Signin extends React.Component{

    constructor(){
        super();

    }

    signinUser = (event) => {
        event.preventDefault();
        var user = {};

        for(var field in this.refs){
            //console.log(this.refs[field].id);
            user[this.refs[field].id] = this.refs[field].value;

        }

        fetch.signin(user)
            .then(function (data) {
                console.log(data);

                localStorage.setItem("token", data.data.token);
            })
            .catch(function (err) {
                console.log(err);
            });

    };


    render(){
        return(
            <div className="content ui centered grid">
                <div className="center">
                    <h1>Student Sign-In</h1>
                    <form action="#">
                        <div className="ui input">
                            <input type="text" placeholder="Email..." ref="email" id="username" required/>
                        </div>

                        <div className="ui input">
                            <input type="password" placeholder="Password..." ref='password' id="password" required/>
                        </div>
                        <br/>

                        <button className="ui primary button" onClick={this.signinUser}>Sign In</button>
                    </form>
                </div>
            </div>
        );
    }
}




export default Signin;