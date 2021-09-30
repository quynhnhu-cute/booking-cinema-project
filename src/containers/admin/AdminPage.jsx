import SideBar from "components/SideBar/SideBar";
import TopBar from "components/TopBar/TopBar";
import React, { Component } from "react";
import { connect } from "react-redux";
import {Redirect} from 'react-router-dom'
import withLayout from "hocs/withLayout";

class AdminPage extends Component {
  render() {
    return this.props.currentUser.maLoaiNguoiDung === "QuanTri" ? (
      <>
        <TopBar className="top-bar" />
        <SideBar className="side-bar" />
      </>
    ) : <Redirect to='/'/>
  }
}
const mapStateToProps = (state) => ({
  currentUser: state.authReducer.currentUser,
});

export default connect(mapStateToProps)(AdminPage);
