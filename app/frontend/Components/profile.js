import React, { Component } from 'react';
import { Grid, Menu, Segment } from 'semantic-ui-react';
import InlineEdit from 'react-edit-inline';

//  class MenuExampleTabularOnLeft extends Component {
//     state = { activeItem: 'bio' };
//
//     handleItemClick = (e, { name }) => this.setState({ activeItem: name });
//
//
//     render() {
//         const { activeItem } = this.state;
//
//         let message;
//
//         if(this.state.activeItem === 'bio'){
//             message = (
//                 <p>I am bio</p>
//             );
//         } else if(this.state.activeItem === 'pics'){
//             message = (
//                 <p>I am Pictures</p>
//             );
//         } else if(this.state.activeItem === 'companies'){
//             message = (
//                 <p>I am Companies</p>
//             );
//         } else if(this.state.activeItem === 'links'){
//             message = (
//                 <p>I am links</p>
//             );
//         }
//
//         return (
//             <Grid>
//                 <Grid.Column width={4}>
//                     <Menu fluid vertical tabular>
//                         <Menu.Item name='bio' active={activeItem === 'bio'} onClick={this.handleItemClick} />
//                         <Menu.Item name='pics' active={activeItem === 'pics'} onClick={this.handleItemClick} />
//                         <Menu.Item name='companies' active={activeItem === 'companies'} onClick={this.handleItemClick} />
//                         <Menu.Item name='links' active={activeItem === 'links'} onClick={this.handleItemClick} />
//                     </Menu>
//                 </Grid.Column>
//
//                 <Grid.Column stretched width={12}>
//                     <Segment>
//                         {message}
//                     </Segment>
//                 </Grid.Column>
//             </Grid>
//         )
//     }
// }


import css from "../../public/css/profile.scss";


// class MyParentComponent extends React.Component {
//
//     constructor(props){
//         super(props);
//         this.dataChanged = this.dataChanged.bind(this);
//         this.state = {
//             message: 'ReactInline demo'
//         }
//     }
//
//     dataChanged(data) {
//         // data = { description: "New validated text comes here" }
//         // Update your model from here
//         //console.log(data)
//         this.setState({message: data.message})
//     }
//
//     render() {
//         return (<div>
//             <InlineEdit
//                 activeClassName="editing"
//                 text={this.state.message}
//                 paramName="message"
//                 change={this.dataChanged}
//             />
//         </div>)
//     }
// }


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
                        <p>HTML</p>
                        <p>Javascript</p>
                        <p>Boostrap</p>
                        <p>MySQL</p>
                        <p>Node.js</p>
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