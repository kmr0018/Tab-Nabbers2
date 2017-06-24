/**
 * Created by esterlingaccime on 6/24/17.
 */
var React = require('react');


require("../../public/css/header.scss");

var Header = () => {
    return(
        <nav className="navbar navbar-toggleable-md navbar-dark fixed-top scrolling-navbar">
            <div className="container">
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav1" aria-controls="navbarNav1" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="/">
                    <strong>BootCruit</strong>
                </a>
                <div className="collapse navbar-collapse" id="navbarNav1">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="about#features">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="about#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

module.exports = Header;