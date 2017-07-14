/**
 * Created by esterlingaccime on 6/27/17.
 */
import React from "react";

import { Button, Checkbox, Form } from "semantic-ui-react";

import css from "../../public/css/login.scss";

import fetch from "../utils/api";

import axios from "axios";

class Signin extends React.Component {

    state = {
        active: true

    };


    signinView = () => {
        this.setState({ active: true });
    };

    signupView = () => {
        this.setState({ active: false });

    };


    render() {
        return (
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

                    {this.state.active ? <SignInView /> : <SignUpView/> }
                </div>
            </div>
        );
    }
}


// Signing user to the database
// Component is being used in Profile
class SignInView extends React.Component {

    constructor() {
        super();

    }


    getval = () => {
        event.preventDefault();

        var user = {

        };


        for (var field in this.refs) {

            user[this.refs[field].id] = this.refs[field].value;
        }

        console.log(user);

        fetch.signin(user)
            .then(function(data) {

                localStorage.setItem("token", data.data.token);
                if (data.data.status === "Ok") {
                    //location.href = '/profile'
                }
                console.log(data);
            })
            .catch(function(err) {
                console.log(err);
            });
    }


    render() {
        return (
            <div className="ui form">
                <div className="field">
                    <input type="text" placeholder="Email..." ref='username' id="username" required/>
                </div>

                <div className="field">
                    <input type="password" placeholder="Password..." ref='password' id="password" required/>
                </div>

                <div className="field">
                    <input type="submit" value="Sign In" className="ui button large fluid" onClick={this.getval}/>
                </div>


                <div className="inline field">
                    <div className="ui checkbox">
                        <input type="checkbox"/>
                        <label>Remember me</label>
                    </div>

                </div>
            </div>
        );
    }
}






// Sign up the user
// Component being used in profile
class SignUpView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            bootcamps: [],
            cohorts: [],
            bootcampSelected: 1
        };

        this.getBootcamps = this.getBootcamps.bind(this);
        this.getCohorts = this.getCohorts.bind(this);
        this.setBootcampOptions = this.setBootcampOptions.bind(this);
        this.setCohortOptions = this.setCohortOptions.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    getVal = (event) => {
        event.preventDefault();

        var user = {};


        for (var field in this.refs) {
            //console.log(this.refs[field]);

            user[this.refs[field].id] = this.refs[field].value;
        }

        fetch.signup(user)
            .then(function(data) {
                console.log(data);
                //location.href = '/profile'

            })
            .catch(function(err) {
                console.log(err);
            });


    }

    componentDidMount() {
        this.getBootcamps();
        this.getCohorts();
    }

    componentDidUpdate() {
        this.getCohorts();
    }

    getBootcamps() {
        axios.get("/bootcamps").then((bcamps) => {
            this.setState({ bootcamps: bcamps.data });
        }).catch(function(err) {
            console.log(err)
        });
    }

    setBootcampOptions() {
        var bootcampOptions = this.state.bootcamps.map(function(b) {
            return (
                <option key={b.id} value={b.id}>{b.institution}</option>
            )
        });
        return bootcampOptions;
    }

    getCohorts() {
        axios.post("/cohorts", {
            bootcampId: this.state.bootcampSelected
        }).then((cohorts) => {
            this.setState({ cohorts: cohorts.data });
        }).catch(function(err) {
            console.log(err);
        })
    }

    setCohortOptions() {
        var cohortOptions = this.state.cohorts.map(function(c) {
            return (
                <option key={c.id} value={c.id}>{c.cohort}</option>
            )
        });
        return cohortOptions;
    }

    handleChange(e) {
        this.setState({ bootcampSelected: e.target.value });
    }

    render() {

        var bootcampOptions = this.setBootcampOptions();
        var cohortOptions = this.setCohortOptions();

        return (
            <div className="ui form">
                <div className="field">
                    <input type="text" placeholder="Firstname..." ref="firstname" id="firstname" required/>
                </div>

                <div className="field">
                    <input type="text" placeholder="Lastname..." ref='lastname' id="lastname" required/>
                </div>

                <div className="field">
                    <input type="text" placeholder="Email..." ref='username' id="username" required/>
                </div>

                <div className="field">
                    <input type="password" placeholder="Password..." ref='password' id="password" required/>
                </div>

                <div className="field">
                    <select className="ui dropdown" onChange={this.handleChange}>
                        {bootcampOptions}
                    </select>
                </div>

                <div className="field">
                    <select className="ui dropdown">
                        {cohortOptions}
                    </select>
                </div>
                <br/>

                <div className="field">
                    <input type="submit" value="Sign Up" className="ui button large fluid" onClick={this.getVal}/>
                </div>

                {/*<button className="ui primary button" >Sign Up</button>*/}
            </div>
        );

    }


};



export default Signin;
