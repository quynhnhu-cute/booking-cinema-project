import SideBar from "components/SideBar/SideBar";
import TopBar from "components/TopBar/TopBar";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

export default class AdminPage extends Component {
  render() {
    return (
      <>
        <TopBar className="top-bar" />
        <SideBar className="side-bar" />
      </>
    );
  }
}
