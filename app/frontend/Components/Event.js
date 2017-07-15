/**
 * Created by esterlingaccime on 7/13/17.
 */
import React from "react";
import css from "../../public/css/event.scss";
import { Header, Icon } from 'semantic-ui-react'



// import fetch from "../utils/api";


class Event extends React.Component{

    constructor(){
      super();
      this.state = {items: []};
    }

    componentDidMount(){
      fetch('https://api.meetup.com/find/groups?page=20&text=JavaScript&key=6b6f260644b44657a442955d383013&sig_id=197617558&sig=8742e95d91419cc26b093bd4070f2beba7415bf3')
        .then(response => response.json())
        .then(items => this.setState({items}))
        .catch(function(err){
          console.log(err);
        });
    }

    // componentDidMount(){
    //     fetch.event()
    //         .then(function (data) {
    //             console.log(data);
    //         })
    //         .catch(function (err) {
    //             console.log(err);
    //         })
    // }

    render(){
      let items = this.state.items
      console.log(items)
        return(
            <div className="events">
                <h2 className="eventHeader">Meetup Events</h2>
                      <br />
                      {items.map(item => (
                        <table>
                          <tbody>
                            <tr key={item.name} className="list-group-item">
                              <h3 className="eventName">Name:&nbsp;</h3>{item.name}
                            </tr>
                            <tr key={item.city} className="list-group-item">
                              <h3 className="eventLocation">Location:&nbsp;</h3>{item.city},&nbsp;{item.state}
                            </tr>
                            <tr key={item.description} className="list-group-item">
                              <h3 className="eventDesc">Description:&nbsp;</h3>{item.description}
                            </tr>
                            <tr key={item.link} className="list-group-item">
                              <h3 className="eventLink">Link:&nbsp;</h3>{item.link}
                            </tr>
                            <br />
                            <hr />
                            <br />
                          </tbody>
                    </table>
                      ))}
                  </div>
              );
    }
}

export default Event;
