import Loader from "components/Loader/Loader";
import React, { Component } from "react";
import { connect } from "react-redux";
import { actFetchAllMovie } from "./module/actions";
import "./SearchTool.css";
class SearchTool extends Component {
  state = {
    valueDropdown : 'Phim'
  }
  handleChangeValue (movieName) {
    this.setState({
      valueDropdown: movieName
    })
  }
  render() {
    if(this.props.loading) return <Loader />
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
              {this.state.valueDropdown}
            </div>
            <div className="dropdown-menu" aria-labelledby="movieListDropdown">
             {this.props.movieList.map(movie => {
               return  <a className="dropdown-item" key={movie.maPhim} id={movie.maPhim} onClick={()=> this.handleChangeValue(movie.tenPhim)}>
               {movie.tenPhim} 
             </a>
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
              Rạp
            </div>
            <div className="dropdown-menu" aria-labelledby="cinemaListDropdown">
              <a className="dropdown-item" href="#">
                {this.props.cinemaList.length === 0 ?  'Vui lòng chọn phim' : 'Vẽ mảng'}
              </a>
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
              Ngày xem
            </div>
            <div className="dropdown-menu" aria-labelledby="dateListDropdown">
              <a className="dropdown-item" href="#">
              {this.props.dateList.length === 0 ?  'Vui lòng chọn phim và rạp' : 'Vẽ mảng'}
              </a>
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
              <a className="dropdown-item" href="#">
              {this.props.cinemaList.length === 0 ?  'Vui lòng chọn phim,rạp, ngày xem' : 'Vẽ mảng'}
              </a>
            </div>
          </div>
          <div className="btn btn-secondary searchtool__item">MUA VÉ NGAY</div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.props.fetchAllMovie()
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
});
export default connect(mapStateToProps, mapDispatchToProps)(SearchTool);
