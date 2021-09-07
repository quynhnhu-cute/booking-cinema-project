import React, { Component } from "react";
import Banner from "./Banner/Banner";
import CinemaComplex from "./CinemaComplex/CinemaComplex";
import HomeApp from "./HomeApp/HomeApp";
import HomeNew from "./HomeNew/HomeNew";
import MovieList from "./MovieList/MovieList";
import SearchTool from "./SearchTool/SearchTool";

export default class HomePage extends Component {
  render() {
    return (
      <div style={{ height: "auto" }}>
        <Banner />
        <MovieList />
        <CinemaComplex />
        <HomeNew />
        <HomeApp />
      </div>
    );
  }
}
