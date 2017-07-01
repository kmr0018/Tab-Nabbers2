/**
 * Created by esterlingaccime on 6/27/17.
 */
import React from "react";

import fetch from "../utils/api";

class Signin extends React.Component{

    constructor(){
        super();


        this.signinUser = this.signinUser.bind(this);
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

    }


    render(){
        return(
            <div className="content">
                <div className="center">
                    <form action="#">
                        <div className="ui input">
                            <input type="text" placeholder="Email..." ref="email" id="username" required/>
                        </div>

                        <div className="ui input">
                            <input type="password" placeholder="Password..." ref='password' id="password" required/>
                        </div>
                        <br/>
                        <div className="content__btn">
                            <button className="ui primary button" onClick={this.signinUser}>Sign Up</button>
                            <button className="ui primary button">Sign In</button>

                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Signin;