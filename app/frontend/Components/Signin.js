/**
 * Created by esterlingaccime on 6/27/17.
 */
import React from "react";

import {Button, Checkbox, Form} from "semantic-ui-react";

import css from "../../public/css/signup.scss";

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
            })
            .catch(function (err) {
                console.log(err);
            });

    };


    render(){
        return(
            <div className="ui one column center aligned grid">
                <div className="column six wide form-holder">
                    <div className="field">
                    <input type="submit" value="sign in" className="ui button large fluid green"/>
                    </div>
                    <div className="field">
                        <input type="submit" value="sign in" className="ui button large fluid green"/>
                    </div>
                    <h2 className="center aligned header form-head">Sign in</h2>
                    <div className="ui form">
                    <div className="field">
                        <input type="text" placeholder="Email..." ref="email" id="username" required/>
                    </div>
                    <div className="field">
                        <input type="password" placeholder="Password..." ref='password' id="password" required/>
                    </div>
                    <div className="field">
                        <input type="submit" value="sign in" className="ui button large fluid green" onClick={this.signupIn}/>
                    </div>
                    <div className="inline field">
                        <div className="ui checkbox">
                        <input type="checkbox"/>
                        <label>Remember me</label>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Signin;