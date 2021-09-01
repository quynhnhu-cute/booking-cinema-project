import React, { Component } from "react";
import "./HomeApp.css";
import Button from "components/Button/Button";
export default class HomeApp extends Component {
  render() {
    return (
      <div className="homeApp w-100">
        <div className="container py-5">
          <div className="row">
            <div className="col-6 d-flex align-items-center justify-content-center text-left py-5">
              <div>
                <span className="homeApp__title">
                  Ứng dụng tiện lợi dành cho người yêu điện ảnh
                </span>
                <p className="homeApp__text">
                  Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp
                  và đổi quà hấp dẫn.
                </p>
                <Button styleBtn={"homeApp__btn"}>
                  App miễn phí - Tải về ngay
                </Button>
                <p className="homeApp__text">
                  TIX có hai phiên bản
                  <a
                    className="p-1"
                    target="_blank"
                    href="https://itunes.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197?mt=8"
                  >
                    iOS
                  </a>
                  &amp;&nbsp;
                  <a
                    className="p-1"
                    target="_blank"
                    href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123"
                  >
                    Android
                  </a>
                </p>
              </div>
            </div>
            <div className="col-6 d-flex align-items-center justify-content-center">
              <div>
                <img
                  src="https://tix.vn/app/assets/img/icons/mobile.png"
                  width="207px"
                />
                <div
                  id="carouselExampleSlidesOnly"
                  className="carousel slide homeApp__carousel" data-touch="true"
                  data-ride="carousel"
                  data-interval="2000"
                >
                  <div className="carousel-inner homeApp__carouselInner">
                    <div className="carousel-item active">
                      <img src="https://tix.vn/app/assets/img/icons/slide/slide16.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                      <img src="https://tix.vn/app/assets/img/icons/slide/slide1.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                      <img src="https://tix.vn/app/assets/img/icons/slide/slide2.jpg" className="d-block w-100" alt="..." />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
