import React, { Component } from "react";
import dataPartner from "./partner.json";
import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <footer className="page-footer font-small blue pt-4 footer__container">
        {/* Footer Links */}
        <div className="container text-center text-md-left">
          {/* Grid row */}
          <div className="row">
            {/* Grid column */}
            <div className="col-md-4 mt-md-0 mt-3">
              {/* Content */}
              <p className="text-uppercase">TIX</p>
              <div className="row">
                <div className="col-6 d-flex flex-column">
                  <a href="#">FAQ</a>
                  <a href="#">Brand Guidelines</a>
                </div>
                <div className="col-6 d-flex flex-column">
                  <a href="#">Thỏa thuận sử dụng</a>
                  <a href="#">Chính sách bảo mật</a>
                </div>
              </div>
            </div>
            {/* Grid column */}
            <hr className="clearfix w-100 d-md-none pb-3" />
            {/* Grid column */}
            <div className="col-md-4 mb-md-0 mb-3">
              {/* Links */}
              <p className="text-uppercase">Đối tác</p>
              <div className="row d-flex flex-row wrap">
                {dataPartner.partner.map((partner,index) => {
                  return (
                    <div className="col-2 mb-2" key={index}>
                      <a
                        target="_blank"
                        href={partner.homeAddress}
                        title={(partner.title).toString()}
                      >
                        <img
                          src={partner.imgSrc}
                          width="30px"
                          className="icon__partner"
                        />
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-4 mb-md-0 mb-3">
              {/* Links */}
              <div className="row">
                <div className="col-6">
                  <p>MOBILE APP</p>
                  <div className="row d-flex flex-row wrap">
                    {dataPartner.mobileApp.map((partner,index) => {
                      return (
                        <div className="col-2 mb-2 mr-2" key={index}> 
                          <a
                            target="_blank"
                            href={partner.homeAddress}
                            title={partner.title.toString()}
                          >
                            <img src={partner.imgSrc} width="25px" />
                          </a>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="col-6">
                  <p>SOCIALS</p>
                  <div className="row d-flex flex-row wrap">
                    {dataPartner.social.map((partner,index) => {
                      return (
                        <div className="col-2 mb-2 mr-2" key={index}>
                          <a
                            target="_blank"
                            href={partner.homeAddress}
                            title={partner.title.toString()}
                          >
                            <img src={partner.imgSrc} width="25px" />
                          </a>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}
        </div>
        {/* Footer Links */}
        {/* Copyright */}
        <hr className="hr__footer container" />
        <div className="container">
          <div className="row">
            <div className="col-sm-1 col-xs-12 imgFooter">
              <img
                className="img-fluid"
                src="https://tix.vn/app/assets/img/icons/zion-logo.jpg"
                style={{ borderRadius: 8, width: "100px" }}
              />
            </div>
            <div className="col-sm-9 col-xs-12 info__footer text-left">
              <span>TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</span>
              <br />
              <span>
                Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ
                Chí Minh, Việt Nam.
              </span>
              <span>
                Giấy chứng nhận đăng ký kinh doanh số: 0101659783,
                <br />
                đăng ký thay đổi lần&nbsp;thứ&nbsp;30,
                ngày&nbsp;22&nbsp;tháng&nbsp;01&nbsp;năm&nbsp;2020 do
                Sở&nbsp;kế&nbsp;hoạch&nbsp;và&nbsp;đầu&nbsp;tư Thành phố Hồ Chí
                Minh cấp.
              </span>
              <span>
                Số Điện Thoại (Hotline): 1900&nbsp;545&nbsp;436
                <br />
                Email:{" "}
                <a href="mailto:support@tix.vn" style={{ color: "#FB4226" }}>
                  support@tix.vn
                </a>
              </span>
            </div>
            <div className="col-sm-2 col-xs-12 imgFooter">
              <a
                target="_blank"
                href="http://online.gov.vn/Home/WebDetails/62782"
              >
                <img
                  className="imgBoCo"
                  src="https://s3img.vcdn.vn/123phim/2020/03/d1e6bd560daa9e20131ea8a0f62e87f8.png"
                  width="130px"
                />
              </a>
            </div>
          </div>
        </div>
        {/* Copyright */}
      </footer>
    );
  }
}
