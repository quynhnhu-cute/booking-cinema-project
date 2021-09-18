import SideBar from 'components/SideBar/SideBar'
import TopBar from 'components/TopBar/TopBar'
import React, { Component } from 'react'
import { DefaultSelectedIndex } from 'settings/appConfig' 
export default class ShowMovieManagement extends Component {
    render() {
        return (
            <div className="container-fluid" style={{margin: 0, padding:0}}>
                
            <div className="row">
                <div className="col-12"><TopBar/></div>
                <div className="col-4"><SideBar defaultIndex={DefaultSelectedIndex.ShowMovieManagement}/></div>
                <div className="col-8">Show Movie Management</div>
            </div>
        </div>
        )
    }
}
