import {
  FETCH_ALL_MOVIE_FAIL,
  FETCH_ALL_MOVIE_REQUEST,
  FETCH_ALL_MOVIE_SUCCESS,
  FETCH_SHOWTIME_BY_MOVIE_REQUEST,
  FETCH_SHOWTIME_BY_MOVIE_SUCCESS,
} from "./types";

const initialState = {
  loading: true,
  err: "",
  movieList: [],
  cinemaList: [],
  dateList: [],
  showTimeList: [],
};

const searchToolReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    //FetchAllMovie
    case FETCH_ALL_MOVIE_REQUEST:
      return { ...state, loading: true };
    case FETCH_ALL_MOVIE_SUCCESS:
      return { ...state, loading: false, movieList: payload };
    case FETCH_ALL_MOVIE_FAIL:
      return { ...state, loading: false, err: payload };
    //FetchShowtimeByMovie (params: movieId)
    case FETCH_SHOWTIME_BY_MOVIE_REQUEST:
      return { ...state, loading: true };
    case FETCH_SHOWTIME_BY_MOVIE_SUCCESS:
      return { ...state, loading: false, cinemaList: payload };
    case FETCH_ALL_MOVIE_FAIL:
      return { ...state, loading: false, err: payload };
    default:
      return state;
  }
};
export default searchToolReducer;
