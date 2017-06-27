/**
 * Created by esterlingaccime on 6/27/17.
 */
import React from "react";

class Student extends React.Component{


    render(){
        return(
            <div className="content">
                <div className="center">
                    <form action="#">
                        <div className="ui input">
                            <input type="email" placeholder="Email..." required/>
                        </div>

                        <div className="ui input">
                            <input type="password" placeholder="Password..." required/>
                        </div>
                        <br/>

                        <button className="ui primary button">Sign Up</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Student;