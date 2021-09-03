import { CLOSE_VIDEO, FETCH_MOVIE_PAGE, HANDLE_GET_SRC_VIDEO } from "./types";

export const actFetchMovieWithPage = ({ data, data2 }) => ({
  type: FETCH_MOVIE_PAGE,
  payload: { data, data2 },
});
export const actHandleGetSrcVideo = (srcVideo) => ({
  type: HANDLE_GET_SRC_VIDEO,
  payload: srcVideo,
})
export const actCloseVideo = () => ({
  type: CLOSE_VIDEO
})