import React, { Component } from 'react';
import { Grid, Menu, Segment, Dropdown } from 'semantic-ui-react';
import InlineEdit from 'react-edit-inline';
import Footer from "./common/Footer";


import css from "../../public/css/profile.scss";





class Profile extends React.Component{
    state = {
        activeItem: 'About',
        message: 'Work' ,
        street:"Enter your street",
        address:"Enter your address",
        title: "Spotify New York",
        job: "Enter your Job Status",
        name:"Enter your name",
        addr:'Enter your city and state'
    };

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    dataChanged = (data) => {
        console.log(data);

        this.setState({...data});
        console.log(this.state);
    }

    render(){

        const { activeItem } = this.state;

        const options = [
          { key: 'angular', text: 'Angular', value: 'angular' },
          { key: 'css', text: 'CSS', value: 'css' },
          { key: 'html', text: 'HTML', value: 'html' },
          { key: 'javascript', text: 'Javascript', value: 'javascript' },
          { key: 'meteor', text: 'Meteor', value: 'meteor' },
          { key: 'node', text: 'NodeJS', value: 'node' },
          { key: 'python', text: 'Python', value: 'python' },
          { key: 'rails', text: 'Rails', value: 'rails' },
          { key: 'react', text: 'React', value: 'react' },
          { key: 'ruby', text: 'Ruby', value: 'ruby' },
          { key: 'ui', text: 'UI Design', value: 'ui' },
          { key: 'ux', text: 'User Experience', value: 'ux' },
        ];


        return(
            <section className="profile">

                <div className="profile__about">

                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/454423/profile/profile-512.jpg" alt="Image that needs to be added"/>
                    <div className="profile__about--status">
                        <h3>Work</h3>
                        <hr/>
                    </div>


                    <div className="profile__about--address">
                        <h4> <InlineEdit
                            activeClassName="title"
                            text={this.state.title}
                            paramName="title"
                            change={this.dataChanged}/></h4>
                        {/*<button className="ui button" id="address">Edit</button>*/}

                        <p> <InlineEdit
                            activeClassName="street"
                            text={this.state.street}
                            paramName="street"
                            change={this.dataChanged}/></p>

                        <p> <InlineEdit
                            activeClassName="address"
                            text={this.state.address}
                            paramName="address"
                            change={this.dataChanged}/></p>
                    </div>


                    <h3>Skills</h3>
                    <hr/>

                    <div className="profile__about--skills">
                      <Dropdown placeholder='Skills' fluid multiple selection options={options} />
                    </div>

                </div>




                <div className="profile__content">

                    <div className="profile__content--about">
                       <div>
                           <h4> <InlineEdit
                               activeClassName="address"
                               text={this.state.name}
                               paramName="name"
                               change={this.dataChanged}/></h4>
                           <p> <i className="marker icon"> </i> <InlineEdit
                               activeClassName="addr"
                               text={this.state.addr}
                               paramName="addr"
                               change={this.dataChanged}/></p>
                       </div>
                        <p className="right bookmark"><i className="bookmark icon"> </i>Bookmark</p>
                        <p className="clear"> <InlineEdit
                            activeClassName="job"
                            text={this.state.job}
                            paramName="job"
                            change={this.dataChanged}/></p>
                    </div>

                    <div className="profile__content--ranking">
                        <h3>Rankings</h3>
                       <div>
                           <h5>8,6</h5>
                           <i className="empty star icon"> </i>
                           <i className="empty star icon"> </i>
                           <i className="empty star icon"> </i>
                           <i className="empty star icon"> </i>
                           <i className="empty star icon"> </i>
                       </div>
                    </div>

                    <div className="profile__content--contact">
                        <p> <i className="mail outline icon"> </i>Send a message</p>
                        <p> <i className="checkmark icon"> </i> Contacts</p>
                        <p>Report a User</p>
                    </div>


                    <div className="profile__content--timeline">
                        {/*<p><i className="unhide icon"> </i> Timeline</p>*/}
                        {/*<p> <i className="user icon"> </i>About</p>*/}

                        <Menu pointing secondary>
                            <Menu.Item name='Timeline' active={activeItem === 'Timeline'} onClick={this.handleItemClick}/>
                            <Menu.Item name='About' active={activeItem === 'About'} onClick={this.handleItemClick} />

                        </Menu>

                        <div>
                            {(this.state.activeItem === 'About') ? <About /> :  <p>Hello World!!</p>}
                        </div>

                        {/*<About />*/}


                    </div>

                </div>
                <div className="profile__footer">
                <Footer />
              </div>
            </section>


        )
    }
}

class About extends React.Component {
    state = {
        phone: "Enter your phone number",
        homeaddress:"Enter your home address",
        email:"Enter your email",
        site:"Enter your portfolio site",
        birthday: "Enter your date of birth",
        gender: "Enter your gender"
    };


    dataChanged = (data) => {
        console.log(data);

        this.setState({...data});
        console.log(this.state);
    }

    render(){
        return (
            <div className="about">
                <div className="info">
                    <h3>Contact Information</h3>
                    <div>
                        <h4 className="">Phone: </h4>
                        <p className=""><InlineEdit
                            activeClassName="phone"
                            text={this.state.phone}
                            paramName="phone"
                            change={this.dataChanged}/></p>
                    </div>

                    <div>
                        <h4 className="">Address:</h4>
                        <p className=""> <InlineEdit
                            activeClassName="homeaddress"
                            text={this.state.homeaddress}
                            paramName="homeaddress"
                            change={this.dataChanged}/></p>

                    </div>

                    <div>
                        <h4 className="">Email:</h4>
                        <p className=""> <InlineEdit
                            activeClassName="email"
                            text={this.state.email}
                            paramName="email"
                            change={this.dataChanged}/></p>
                    </div>

                    <div>
                        <h4 className="left">Site: </h4>
                        <p className="right"> <InlineEdit
                            activeClassName="site"
                            text={this.state.site}
                            paramName="site"
                            change={this.dataChanged}/><a href="http:www.google.com/" target="_blank"></a></p>
                    </div>

                </div>


                <div className="basic">
                    <h3>Basic Information</h3>

                    <div>
                        <h4 className="left">Birthday: </h4>
                        <p className="right"> <InlineEdit
                            activeClassName="birthday"
                            text={this.state.birthday}
                            paramName="birthday"
                            change={this.dataChanged}/></p>
                    </div>

                    <div>
                        <h4 className="left">Gender:</h4>
                        <p className="right"> <InlineEdit
                            activeClassName="gender"
                            text={this.state.gender}
                            paramName="gender"
                            change={this.dataChanged}/></p>
                    </div>
                </div>
            </div>
        )
    }

};







export default Profile;
