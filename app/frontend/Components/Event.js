/**
 * Created by esterlingaccime on 7/13/17.
 */
import React from "react";

import fetch from "../utils/api";


class Event extends React.Component{

    componentDidMount(){
        fetch.event()
            .then(function (data) {
                console.log(data);
            })
            .catch(function (err) {
                console.log(err);
            })
    }

    render(){
        return(
            <div className="events">
                <h1>Hello Events</h1>
            </div>
        );
    }
}

export default Event;