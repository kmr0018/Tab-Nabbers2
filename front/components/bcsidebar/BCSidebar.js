import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Sidebar } from 'semantic-ui-react'

import SidebarItem from './sidebar-item/SidebarItem'

const BCSidebar = (props) => (
  <Sidebar {...props}>
    {props.children.map(item => <SidebarItem {...item}/>)}
  </Sidebar>
)

BCSidebar.propTypes = {
  children: PropTypes.array.isRequired,
}

export default BCSidebar
