import { movieApi } from "apis/movieApi";
import React, { Component } from "react";
import Slider from "react-slick";
import "./MovieList.css";

export default class MovieList extends Component {
  state = {
    movieList1: [],
    movieList2: [],
    loading: true,
    srcVideo: "",
  };
  closeVideo() {
      this.setState({
        srcVideo: "",
      })
  }
  handleGetSrcVideo(srcVideo) {
    this.setState({
      srcVideo: srcVideo,
    });
  }
  renderMovieList(movieList) {
    return movieList.map((movie) => {
      return (
        <div className="col-3 my-3">
          <div className="card movielist__card">
            <div className="movielist__img">
              <img className="card-img-top" src={movie.hinhAnh} alt />
              <div className="movielist__linear"></div>
              <button
                className="btnPlay"
                data-toggle="modal"
                data-target="#modelId"
                onClick={() => this.handleGetSrcVideo(movie.trailer)}
              >
                <img
                  src="https://tix.vn/app/assets/img/icons/play-video.png"
                  alt=""
                />
              </button>
            </div>
            <div className="card-body">
              <h4 className="card-title">{movie.tenPhim}</h4>
              <p className="card-text">Text</p>
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
    if (this.state.loading) return <div>Loading...</div>;
    console.log(this.state.srcVideo);
    return (
      <div className="container movielist">
        <Slider {...settings}>
          <div className="carousel__item">
            <div className="row">
              {this.renderMovieList(this.state.movieList1.items)}
            </div>
          </div>
          <div className="carousel__item">
            <div className="row">
              {this.renderMovieList(this.state.movieList2.items)}
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
          onClick={()=>this.closeVideo()}
        >
          <div className="modal-dialog modal__custom" role="document">
            <div className="modal-content" disabled="true">
            <button onClick={()=> this.closeVideo()}
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              <div className="modal-body">
                <iframe id="videoSrc"
                  src={`${this.state.srcVideo}/?autoplay=1`}
                  width="100%"
                  height="500px"
                  frameborder="0"
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
  async componentDidMount() {
    console.log(this.state.movieList1, this.state.movieList2);
    try {
      const { data } = await movieApi.fetchMovieWithPageApi(1, 8);
      const { data: data2 } = await movieApi.fetchMovieWithPageApi(2, 8);
      this.setState({
        movieList1: data,
        movieList2: data2,
        loading: false,
      });
      console.log(this.state.movieList1, this.state.movieList2);
    } catch {}
  }
}
