import React from "react";

import { Link } from "react-router";




class Home extends React.Component{


    render(){
        return(
            <div className="ui">
                <div className="content">
                    <div className="center">
                        <h1>Bootcruit</h1>
                        <p>Single Click Staffing Solutions</p>
                        <div className="login__btn-container">
                            <button className="ui positive basic button">Recruiter</button>
                            <Link to="/signup"><button className="ui positive basic button">Student</button> </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Home;
