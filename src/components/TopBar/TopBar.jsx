import React, { Component } from "react";
import "./TopBar.css";

export default class TopBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between all">
        <a className="navbar-brand" href="#">
          <img src="./ticket.jfif" className="icon" />
          <span className="header">Booking Cinema</span>
        </a>

        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">
            <img src="https://picsum.photos/30" className="rounded-circle avatar" alt="Cinque Terre"/>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Hello, Nguyễn Ngọc Quỳnh Như
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
            ></a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                Cập nhật thông tin
              </a>
              <a className="dropdown-item" href="#">
                Đăng xuất
              </a>
            </div>
          </li>
        </ul>
      </nav>
    );
  }
}
