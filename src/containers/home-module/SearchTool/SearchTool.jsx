import Loader from "components/Loader/Loader";
import React, { Component } from "react";
import { connect } from "react-redux";
import {
  actCinemaComplexData,
  actFetchAllMovie,
  actFetchShowTimeByMovie,
} from "./module/actions";
import "./SearchTool.css";
class SearchTool extends Component {
  state = {
    valuePhim: "Phim",
    valueRap: "Rạp",
    valueNgay: "Ngày xem",
    valueSuat: "Suất chiếu",
  };
  handleChangeValuePhim(value) {
    this.setState({
      valuePhim: value,
    });
  }
  handleChangeValueRap(value) {
    this.setState({
      valueRap: value,
    });
  }
  handleChangeValueNgay(value) {
    this.setState({
      valueNgay: value,
    });
  }
  render() {
    if (this.props.loading) return <Loader />;

    return (
      <div className="container searchtool">
        <div className="searchtool__box">
          <div className="dropdown searchtool__item">
            <div
              className="dropdown__button dropdown-toggle"
              type="button"
              id="movieListDropdown"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {this.state.valuePhim}
            </div>
            <div className="dropdown-menu" aria-labelledby="movieListDropdown">
              {this.props.movieList.map((movie) => {
                return (
                  <a
                    className="dropdown-item"
                    key={movie.maPhim}
                    id={movie.maPhim}
                    onClick={() => {
                      this.handleChangeValuePhim(movie.tenPhim);
                      this.props.fetchShowTimeByMovie(movie.maPhim);
                    }}
                  >
                    {movie.tenPhim}
                  </a>
                );
              })}
            </div>
          </div>
          <div className="dropdown searchtool__item">
            <div
              className="dropdown__button dropdown-toggle"
              type="button"
              id="cinemaListDropdown"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {this.state.valueRap}
            </div>
            <div className="dropdown-menu" aria-labelledby="cinemaListDropdown">
              {this.props.cinemaList.length === 0
                ? "Vui lòng chọn phim"
                : this.props.cinemaList.heThongRapChieu.map((heThongRap) => {
                    return heThongRap.cumRapChieu.map((cumRap) => {
                      return (
                        <a
                          className="dropdown-item"
                          onClick={() => {
                            this.handleChangeValueRap(cumRap.tenCumRap)
                            this.props.getCinemaComplexData(cumRap)
                          }
                            
                          }
                          key={cumRap.maCumRap}
                        >
                          {cumRap.tenCumRap}
                        </a>
                      );
                    });
                  })}
            </div>
          </div>
          <div className="dropdown searchtool__item">
            <div
              className="dropdown__button dropdown-toggle"
              type="button"
              id="dateListDropdown"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {this.state.valueNgay}
            </div>
            <div className="dropdown-menu" aria-labelledby="dateListDropdown">
                {this.props.dateList.length === 0
                  ? "Vui lòng chọn phim và rạp"
                  : this.props.dateList.map((date) => {
                    //date là lịch chiếu phim theo rạp đã chọn
                    //chỗ này lấy được mã lịch chiếu
                      return (
                        <a className="dropdown-item" key={date.maLichChieu} onClick={()=> {
                          this.handleChangeValueNgay(new Date(date.ngayChieuGioChieu).toLocaleTimeString())
                        }}>
                          {new Date(date.ngayChieuGioChieu).toLocaleTimeString()}
                        </a>
                      );
                    })}

            </div>
          </div>
          <div div className="dropdown searchtool__item">
            <div
              className="dropdown__button dropdown-toggle"
              type="button"
              id="showTimeListDropdown"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Suất chiếu
            </div>
            <div
              className="dropdown-menu"
              aria-labelledby="showTimeListDropdown"
            >
              {this.props.showTimeList.length === 0 ? (
                "Vui lòng chọn phim,rạp, ngày xem"
              ) : (
                <a className="dropdown-item" href="#"></a>
              )}
            </div>
          </div>
          <div className="btn btn-secondary searchtool__item">MUA VÉ NGAY</div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.props.fetchAllMovie();
  }
}
const mapStateToProps = (state) => ({
  movieList: state.searchToolReducer.movieList,
  cinemaList: state.searchToolReducer.cinemaList,
  dateList: state.searchToolReducer.dateList,
  showTimeList: state.searchToolReducer.showTimeList,
  loading: state.searchToolReducer.loading,
});
const mapDispatchToProps = (dispatch) => ({
  fetchAllMovie: () => {
    dispatch(actFetchAllMovie());
  },
  fetchShowTimeByMovie: (movieId) => {
    dispatch(actFetchShowTimeByMovie(movieId));
  },
  //Lấy data rạp chiếu phim khi click vào chọn rạp
  getCinemaComplexData: (data) => {
    dispatch(actCinemaComplexData(data));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(SearchTool);
