import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'
import Footer from "./common/Footer";

import BCSidebar from "./bcsidebar/BCSidebar"

import css from "../public/css/main.scss";


class Main extends Component {
    state = { visible: false }

    toggleVisibility = () => this.setState({ visible: !this.state.visible })

    handleSidebarItemClick(redirectUrl){
      return () => {
        browserHistory.push(redirectUrl)
        this.setState({ visible: false })
      }
    }

    render() {
        const { visible } = this.state

        return (
          <div>
            <Segment inverted clearing>
              <Button onClick={this.toggleVisibility} size='medium' icon color='blue' floated='left'><Icon name='content' /></Button>
              <Header as='h2' floated='right' inverted color='blue'>
                BootCruit
              </Header>
            </Segment>
            <Sidebar.Pushable as={Segment}>
              <BCSidebar as={Menu} animation='slide out' width='thin' visible={visible} icon='labeled' vertical inverted >
                {
                  [
                    {
                      iconName: 'home',
                      clickHandler: this.handleSidebarItemClick('/'),
                      buttonLabel: 'Home',
                    },
                    {
                      iconName: 'users',
                      clickHandler: this.handleSidebarItemClick('/About'),
                      buttonLabel: 'About',
                    },
                    {
                      iconName: 'lightning',
                      clickHandler: this.handleSidebarItemClick('/About'),
                      buttonLabel: 'Features',
                    },
                    {
                      iconName: 'mail',
                      clickHandler: this.handleSidebarItemClick('/About'),
                      buttonLabel: 'Contact',
                    },
                  ]
                }
              </BCSidebar>
              <Sidebar.Pusher>
                <Segment basic>
                  {/* Route Info */}
                  {this.props.children}
                </Segment>
              </Sidebar.Pusher>
            </Sidebar.Pushable>
            <Footer />
          </div>
        )
    }
}

export default Main;
