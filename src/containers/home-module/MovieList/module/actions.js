
import movieApi from "apis/movieApi";
import {
  CLOSE_VIDEO,
  FETCH_MOVIE_PAGE_FAIL,
  FETCH_MOVIE_PAGE_REQUEST,
  FETCH_MOVIE_PAGE_SUCCESS,
  HANDLE_GET_SRC_VIDEO,
} from "./types";

const actFetchMovieWithPageSuccess = ({ data, data2 }) => ({
  type: FETCH_MOVIE_PAGE_SUCCESS,
  payload: { data, data2 },
});
const actFetchMovieWithPageRequest = () => ({
  type: FETCH_MOVIE_PAGE_REQUEST,
});
const actFetchMovieWithPageFail = (err) => ({
  type: FETCH_MOVIE_PAGE_FAIL,
  payload: err,
});
export const actFetchMovieWithPage = () => {
  return async (dispatch) => {
    dispatch(actFetchMovieWithPageRequest());
    try {
      const { data } = await movieApi.fetchMovieByPageApi(1, 8);
      const { data: data2 } = await movieApi.fetchMovieByPageApi(2, 8);
      dispatch(actFetchMovieWithPageSuccess({ data, data2 }));
    } catch (err) {
      dispatch(actFetchMovieWithPageFail(err))
    }
  };
};
export const actHandleGetSrcVideo = (srcVideo) => ({
  type: HANDLE_GET_SRC_VIDEO,
  payload: srcVideo,
});
export const actCloseVideo = () => ({
  type: CLOSE_VIDEO,
});
