import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./Header.css";
import { connect } from "react-redux";
import { actLogOut } from "containers/auth/module/action";
import { AlignRightOutlined } from "@ant-design/icons";
import { LoaiNguoiDung } from "settings/appConfig";
class Header extends Component {
  handleLogout = () => {
    this.props.logout();
    this.props.history.push("/");
  };
  closeCollapse = () => {
    document.querySelector(".navbar__toggleM").click();
  };
  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-md navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          <img
            src="https://tix.vn/app/assets/img/icons/web-logo.png"
            width="50px"
          />
        </Link>
        <button
          className="navbar-toggler navbar__toggleM"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span>
            <AlignRightOutlined />
          </span>
        </button>
        {/* Collapse here (<768px) */}
        <div className="navbar__collapse" id="navbarSupportedContent">
          <div className="collapse__container"></div>
          <div className="collapse__board">
            <div className="collapse__menu">
              <ul className="navbar-nav">
                {this.props.currentUser ? (
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="userDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <img
                        src="https://picsum.photos/200"
                        className="img__avatar"
                      />

                      <span>{this.props.currentUser.hoTen}</span>
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="userDropdown"
                    >
                      <Link
                        className="dropdown-item"
                        to="/edit-profile"
                        onClick={this.closeCollapse}
                      >
                        Thay ?????i th??ng tin
                      </Link>
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={this.handleLogout}
                      >
                        ????ng xu???t
                      </a>
                    </div>
                  </li>
                ) : (
                  <>
                    <li className="nav-item">
                      <Link
                        to="/login"
                        className="login__button"
                        onClick={this.closeCollapse}
                      >
                        <img
                          src="https://tix.vn/app/assets/img/avatar.png"
                          className="img__avatar"
                        />
                        <span>????ng nh???p</span>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to="/register"
                        onClick={this.closeCollapse}
                      >
                        ????ng k??
                      </Link>
                    </li>
                  </>
                )}
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    L???ch chi???u
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    C???m r???p
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Tin t???c
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    ???ng d???ng
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMobile"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    H??? Ch?? Minh
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMobile"
                  >
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
              </ul>
            </div>
          </div>
        </div>

        {/* Laptop here (<1200px) */}

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav navbar__center">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                L???ch chi???u
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#cinemacomplex">
                C???m r???p
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Tin t???c
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                ???ng d???ng
              </a>
            </li>
           {this.props.currentUser && this.props.currentUser.maLoaiNguoiDung == LoaiNguoiDung.QUAN_TRI && ( <Link className="nav-link" to="/admin/user-management">
               Qu???n tr??? h??? th???ng
              </Link>)}
          </ul>

          <ul className="navbar-nav ml-auto">
            {this.props.currentUser ? (
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="userDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img
                    src="https://picsum.photos/200"
                    className="img__avatar"
                  />

                  <span>{this.props.currentUser.hoTen}</span>
                </a>
                <div className="dropdown-menu" aria-labelledby="userDropdown">
                  <Link className="dropdown-item" to="/edit-profile">
                    Thay ?????i th??ng tin
                  </Link>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={this.handleLogout}
                  >
                    ????ng xu???t
                  </a>
                </div>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <Link to="/login" className="login__button">
                    <img
                      src="https://tix.vn/app/assets/img/avatar.png"
                      className="img__avatar"
                    />
                    <span>????ng nh???p</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    ????ng k??
                  </Link>
                </li>
              </>
            )}

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
                H??? Ch?? Minh
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
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.authReducer.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(actLogOut()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
