import React, { Component } from 'react'
import { Grid, Menu, Segment } from 'semantic-ui-react'

export default class MenuExampleTabularOnLeft extends Component {
    state = { activeItem: 'bio' };

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });


    render() {
        const { activeItem } = this.state;

        let message;

        if(this.state.activeItem === 'bio'){
            message = (
                <p>I am bio</p>
            );
        } else if(this.state.activeItem === 'pics'){
            message = (
                <p>I am Pictures</p>
            );
        } else if(this.state.activeItem === 'companies'){
            message = (
                <p>I am Companies</p>
            );
        } else if(this.state.activeItem === 'links'){
            message = (
                <p>I am links</p>
            );
        }

        return (
            <Grid>
                <Grid.Column width={4}>
                    <Menu fluid vertical tabular>
                        <Menu.Item name='bio' active={activeItem === 'bio'} onClick={this.handleItemClick} />
                        <Menu.Item name='pics' active={activeItem === 'pics'} onClick={this.handleItemClick} />
                        <Menu.Item name='companies' active={activeItem === 'companies'} onClick={this.handleItemClick} />
                        <Menu.Item name='links' active={activeItem === 'links'} onClick={this.handleItemClick} />
                    </Menu>
                </Grid.Column>

                <Grid.Column stretched width={12}>
                    <Segment>
                        {message}
                    </Segment>
                </Grid.Column>
            </Grid>
        )
    }
}