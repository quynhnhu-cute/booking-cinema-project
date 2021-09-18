import SideBar from 'components/SideBar/SideBar'
import TopBar from 'components/TopBar/TopBar'
import React, { Component } from 'react'

export default class AdminPage extends Component {
    render() {
        return (
           <>
           <TopBar className="top-bar"/>
           <SideBar className="side-bar"/>
           </>
        )
    }
}
