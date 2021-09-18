import SideBar from 'components/SideBar/SideBar'
import TopBar from 'components/TopBar/TopBar'
import React, { Component } from 'react'

export default class MovieManagement extends Component {
    render() {
        return (
            <div>
                <TopBar className="top-bar"/>
                <SideBar className="side-bar"/>
                <div className="align-center">
                     Movie management
                </div>
            </div>
        )
    }
}
