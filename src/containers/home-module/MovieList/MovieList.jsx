import { movieApi } from "apis/movieApi";
import Loader from "components/Loader/Loader";
import React, { Component } from "react";
import { connect } from "react-redux";
import Slider from "react-slick";
import {Link} from 'react-router-dom'
import {
  actCloseVideo,
  actFetchMovieWithPage,
  actHandleGetSrcVideo,
} from "./module/actions";
import "./MovieList.css";

class MovieList extends Component {
 

  renderMovieList(movieList) {
    return movieList.map((movie) => {
      return (
        <div className="col-3 my-3" key={movie.maPhim}>
          <div className="card movielist__card">
            <div className="movielist__img">
              <img className="card-img-top img-fluid" src={movie.hinhAnh}  />
              <Link to={`/movie-detail/${movie.maPhim}`} className="movielist__linear"></Link>
              <button
                className="btnPlay"
                data-toggle="modal"
                data-target="#modelId"
                onClick={() => this.props.handleGetSrcVideo(movie.trailer)}
              >
                <img
                  src="https://tix.vn/app/assets/img/icons/play-video.png"
              
                />
              </button>
            </div>
            <div className="card-body">
              <h4 className={`text-left ${movie.tenPhim.length < 15 ? 'text-title': 'text-title-s'}` }>{movie.tenPhim}</h4>
              <p className="card-text text-left">Thời lượng: </p>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 3000,
    };
    if (this.props.loading) return <Loader />;
    return (
      <div className="container movielist">
        <Slider {...settings}>
          <div className="carousel__item">
            <div className="row">
              {this.renderMovieList(this.props.movieList1)}
            </div>
          </div>
          <div className="carousel__item">
            <div className="row">
              {this.renderMovieList(this.props.movieList2)}
            </div>
          </div>
        </Slider>
        {/* //Modal body */}
        <div
          className="modal fade"
          id="modelId"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
          onClick={() => this.props.closeVideo()}
        >
          <div className="modal-dialog modal__custom" role="document">
            <div className="modal-content">
              <button
                onClick={() => this.props.closeVideo()}
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
              <div className="modal-body">
                <iframe
                  id="videoSrc"
                  src={`http://www.youtube.com/embed/${this.props.srcVideo}/?autoplay=1`}
                  width="100%"
                  height="500px"
                  frameBorder="0"
                  allowFullScreen
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.props.fetchMovieWithPage();
  }
}
const mapStateToProps = (state) => ({
  loading: state.movieListReducer.loading,
  movieList1: state.movieListReducer.movieList1,
  movieList2: state.movieListReducer.movieList2,
  srcVideo: state.movieListReducer.srcVideo,
});
const mapDispatchToProps = (dispatch) => ({
  fetchMovieWithPage: () => {
    dispatch(actFetchMovieWithPage());
  },
  handleGetSrcVideo: (srcVideo) => {
    dispatch(actHandleGetSrcVideo(srcVideo));
  },
  closeVideo: () => {
    dispatch(actCloseVideo());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
