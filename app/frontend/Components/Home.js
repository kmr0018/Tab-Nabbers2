/**
 * Created by esterlingaccime on 6/26/17.
 */
var React = require("react");

var Home = () => {
    return (
        <div className="content">

            <div className="login">
                <h1>Bootcruit</h1>
                <p>Single Click Staffing Solutions</p>
                
                <div className="login__btn-container">
                    <button className="ui positive basic button">Recruiter</button>
                    <button className="ui positive basic button">Student</button>
                </div>
            </div>
        </div>
    );
};

module.exports = Home;