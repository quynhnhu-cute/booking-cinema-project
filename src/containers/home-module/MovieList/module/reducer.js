import { CLOSE_VIDEO, FETCH_MOVIE_PAGE, HANDLE_GET_SRC_VIDEO } from "./types";

const initialState = {
  movieList1: [],
  movieList2: [],
  loading: true,
  srcVideo: "",
};

const movieListReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_MOVIE_PAGE:
      const { data, data2 } = payload;
      return { ...state, movieList1: data.items, movieList2: data2.items,loading: false };
    case HANDLE_GET_SRC_VIDEO:
      return {...state, srcVideo: payload}
      case CLOSE_VIDEO:
        return {...state, srcVideo: ''}
    default:
      return state;
  }
};
export default movieListReducer;
