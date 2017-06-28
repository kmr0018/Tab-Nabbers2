/**
 * Created by esterlingaccime on 6/27/17.
 */
import React from "react";

import fetch from "../utils/api";

class Signup extends React.Component{

    constructor(){
        super();


        this.signupUser = this.signupUser.bind(this);
    }

    signupUser(event){
        event.preventDefault();
        var user = {};

        for(var field in this.refs){
            //console.log(this.refs[field].id);
            user[this.refs[field].id] = this.refs[field].value;

        }

        fetch.signup(user)
            .then(function (data) {
                console.log(data);

                if(data.status === 200){
                    location.href = 'profile';
                }
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

                        <button className="ui primary button" onClick={this.signupUser}>Sign Up</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Signup;