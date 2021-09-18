import React, { Component } from "react";
import { Link , withRouter} from "react-router-dom";
import "./Header.css";
import { connect } from "react-redux";
import { actLogOut } from "containers/auth/module/action";
class Header extends Component {
  handleLogout = () => {
    this.props.logout();
    this.props.history.push('/');
  }
  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src="https://tix.vn/app/assets/img/icons/web-logo.png"
            width="50px"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav navbar__center">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Lịch chiếu
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#cinemacomplex">
                Cụm rạp
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Tin tức
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Ứng dụng
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              {/* <a className="nav-link" href="#"> */}
               
                {this.props.currentUser ? (
                    <a className="nav-link" href="#">
                         <img
                     src="https://picsum.photos/200"
                     className="img__avatar"
                   />
                      
                    <span>{this.props.currentUser.hoTen}</span>
                    </a>
                  
                ) : (
                  <Link to="/login" className="login__button">
                    <img
                     src="https://tix.vn/app/assets/img/avatar.png"
                     className="img__avatar"
                   />
                    <span>Đăng nhập</span>
                  </Link>
                )}
              {/* </a> */}
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Đăng kí
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Hồ Chí Minh
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
            {this.props.currentUser && <li><a className="nav-link" onClick={this.handleLogout}>Logout</a></li>}
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.authReducer.currentUser,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(actLogOut())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
