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
            })
            .catch(function (err) {
                console.log(err);
            });

    };


    render(){
        return(
            <div className="content">
                <div className="center">
                    <Form >
                        <Form.Field>
                            {/*<label>First Name</label>*/}
                            <input placeholder='Email'  ref="email" id="username" required/>
                        </Form.Field>
                        <Form.Field>
                            {/*<label>Last Name</label>*/}
                            <input placeholder='Password' ref='password' id="password" required/>
                        </Form.Field>
                        <Button type='submit' onClick={this.signinUser}>Sign In</Button>
                    </Form>
                </div>
            </div>
        );
    }
}




export default Signin;