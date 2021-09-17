import Loader from "components/Loader/Loader";
import React, { Component } from "react";
import { Fragment } from "react";
import { connect } from "react-redux";
import { actChooseSeat, actFetchSeatPlan } from "./module/actions";
import "./SeatPlan.css";
import _ from "lodash";
class SeatPlan extends Component {
  render() {
    const { danhSachGhe } = this.props.seatPlan;
    if (this.props.loading) return <Loader></Loader>;
    return (
      <div className="seatplan">
        <div className="seatplan__container container-fluid py-5">
          <div className="row ">
            <div className="col-7 seatplan__boxLeft">
              <div className="seatplan__screen">
                <p className="seatplan__text">Màn hình</p>
              </div>
              <div className="seatplan__seatbox">
                {danhSachGhe.map((seat, index) => {
                  let choosingSeat = "choosingSeat";
                  let idx = this.props.arrChoosingSeat.findIndex(
                    (seatChoosing) => {
                      return seat.maGhe === seatChoosing.maGhe;
                    }
                  );
                  if (idx !== -1) {
                    choosingSeat = "choosingSeat";
                  } else {
                    choosingSeat = "";
                  }
                  return (
                    <Fragment key={seat.stt}>
                      <button
                        disabled={seat.daDat}
                        className={`seatplan__seat ${
                          seat.loaiGhe === "Vip" ? "vipSeat" : "normalSeat"
                        } ${choosingSeat}`}
                        onClick={() => this.props.chooseSeat(seat)}
                      >
                        {seat.daDat ? "X" : seat.tenGhe}
                      </button>

                      {(index + 1) % 16 === 0 ? <br /> : ""}
                    </Fragment>
                  );
                })}
              </div>
            </div>
            <div className="col-5 seatplan__info my-5">
              <div className="seatplan__table">
                <div className="row seatplan__tbrow">
                  <div
                    className="col"
                    style={{
                      fontWeight: "600",
                      fontSize: "20px",
                      color: "#ffc75f",
                    }}
                  >
                    {this.props.seatPlan.thongTinPhim.tenPhim}
                  </div>
                </div>
                <div className="row seatplan__tbrow">
                  <div className="col-6 seatplan__tbtitle">
                    Ngày chiếu giờ chiếu
                  </div>
                  <div className="col-6 text-right">
                    {this.props.seatPlan.thongTinPhim.ngayChieu} -{" "}
                    {this.props.seatPlan.thongTinPhim.gioChieu}
                  </div>
                </div>
                <div className="row seatplan__tbrow">
                  <div className="col-6 seatplan__tbtitle">Cụm rạp</div>
                  <div className="col-6 text-right">
                    {this.props.seatPlan.thongTinPhim.tenCumRap}
                  </div>
                </div>
                <div className="row seatplan__tbrow">
                  <div className="col-6 seatplan__tbtitle">Rạp</div>
                  <div className="col-6 text-right">
                    {this.props.seatPlan.thongTinPhim.tenRap}
                  </div>
                </div>
                <div className="row seatplan__tbrow seatplan__tbchoose">
                  <div className="col-6 seatplan__tbtitle">Ghế chọn</div>
                  <div className="col-6 text-right">

                    
                    { // _. : lodash
                    _.sortBy(this.props.arrChoosingSeat, ["tenGhe"]).map(
                      (seat) => {
                        return <span key={seat.maGhe}>{seat.tenGhe}, </span>;
                      }
                    )}
                  </div>
                </div>
                <div className="row seatplan__tbrow">
                  <div className="col-6 seatplan__tbtitle">Ưu đãi</div>
                  <div className="col-6 text-right"></div>
                </div>
                <div className="row seatplan__tbrow">
                  <div className="col-6 seatplan__tbtitle">Tổng tiền</div>
                  <div className="col-6 text-right">
                    {this.props.arrChoosingSeat
                      .reduce((sum, seat) => {
                        return (sum += seat.giaVe);
                      }, 0)
                      .toLocaleString()}{" "}
                    đ
                  </div>
                </div>
                <div className="row seatplan__tbrow">
                  <button className="col seatplan__button">
                    BOOKING TICKET
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.props.fetchSeatPlan(this.props.match.params.showTimeId);
  }
}
const mapStateToProps = (state) => ({
  loading: state.seatPlanReducer.loading,
  seatPlan: state.seatPlanReducer.seatPlan,
  arrChoosingSeat: state.seatPlanReducer.arrChoosingSeat,
});
const mapDispatchToProps = (dispatch) => ({
  //call api
  fetchSeatPlan: (showTimeId) => {
    dispatch(actFetchSeatPlan(showTimeId));
  },
  //Chức năng chọn ghế params seat(ghế đang chọn) -> payload: seat
  chooseSeat: (seat) => {
    dispatch(actChooseSeat(seat));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(SeatPlan);
