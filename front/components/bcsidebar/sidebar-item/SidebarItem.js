import React from 'react'
import PropTypes from 'prop-types'
import {Button, Menu, Icon} from 'semantic-ui-react'


const SidebarItem = (props) => (
  <Menu.Item>
    <Icon name={props.iconName} />
    <Button onClick={props.clickHandler} basic inverted color='blue'>{props.buttonLabel}</Button>
  </Menu.Item>
)

SidebarItem.propTypes = {
  iconName: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  buttonLabel: PropTypes.string.isRequired,
}

export default SidebarItem
