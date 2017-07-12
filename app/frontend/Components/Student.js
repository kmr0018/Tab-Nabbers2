/**
 * Created by esterlingaccime on 6/27/17.
 */
import React from "react";

import {Button, Checkbox, Form} from "semantic-ui-react";

import css from "../../public/css/login.scss";

import fetch from "../utils/api";

class Signin extends React.Component{

   state = {
       active:true

   };

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

   signinView = () => {
       this.setState({active: true});
   };

   signupView = () => {
        this.setState({ active: false });

   };

    render(){
        return(
            <div className="sicontainer ui one column center aligned grid">
                <div className="signin column six wide form-holder">

                    <div className="button-container">
                        <div className={ this.state.active ? "field active": "field" } onClick={this.signinView}>
                            <input type="submit" value="Sign in" className="ui button" />
                        </div>

                        <div className={this.state.active ? "field right": "field active right" } onClick={this.signupView}>
                            <input type="submit" value="Sign up" className="ui button"/>
                        </div>
                    </div>

                    <h2 className="center aligned header form-head">{this.state.active ? "Student - Sign in" : "Student - Sign up"}</h2>

                    {this.state.active ? <SignInView /> : <SignUpView /> }
                </div>
            </div>
        );
    }
}


var SignInView = () => {

    return(
        <div className="ui form">
            <div className="field">
                <input type="text" placeholder="Email..." id="username" required/>
            </div>

            <div className="field">
                <input type="password" placeholder="Password..." id="password" required/>
            </div>

            <div className="field">
                <input type="submit" value="Sign In" className="ui button large fluid"/>
            </div>

            <div className="inline field">
                <div className="ui checkbox">
                    <input type="checkbox"/>
                    <label>Remember me</label>
                </div>

            </div>
        </div>
    );
};



var SignUpView = () => {
    return(
        <div className="ui form">
            <div className="field">
                <input type="text" placeholder="Firstname..." id="username" required/>
            </div>

            <div className="field">
                <input type="text" placeholder="Lastname..." id="username" required/>
            </div>

            <div className="field">
                <input type="text" placeholder="Email..." id="username" required/>
            </div>

            <div className="field">
                <input type="password" placeholder="Password..." id="password" required/>
            </div>
            <br/>

            <div className="field">
                <input type="submit" value="Sign Up" className="ui button large fluid"/>
            </div>
        </div>
    );
};


export default Signin;
