import {
  CLOSE_VIDEO,
  FETCH_MOVIE_PAGE_FAIL,
  FETCH_MOVIE_PAGE_REQUEST,
  FETCH_MOVIE_PAGE_SUCCESS,
  HANDLE_GET_SRC_VIDEO,
} from "./types";

const initialState = {
  movieList1: [],
  movieList2: [],
  loading: true,
  srcVideo: "",
  err: "",
};

const movieListReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_MOVIE_PAGE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_MOVIE_PAGE_SUCCESS:
      const { data, data2 } = payload;
      return {
        ...state,
        movieList1: data.items,
        movieList2: data2.items,
        loading: false,
      };
    case FETCH_MOVIE_PAGE_FAIL:
      return { ...state, err: payload, loading: false };
    case HANDLE_GET_SRC_VIDEO:
      return { ...state, srcVideo: payload };
    case CLOSE_VIDEO:
      return { ...state, srcVideo: "" };
    default:
      return state;
  }
};
export default movieListReducer;
