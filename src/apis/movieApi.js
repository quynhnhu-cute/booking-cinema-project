import { GROUP_ID } from "settings/apiConfig";
import { callApi } from "utils/callApi";

// movie api here
export const movieApi = {
  fetchMovieByPageApi: (currentPage, countInPage) => {
    //currentPage: Số trang cần callApi
    //countInPage: Số phần tử (phim) trong 1 trang
    return callApi(
      `QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=${GROUP_ID}&soTrang=${currentPage}&soPhanTuTrenTrang=${countInPage}`
    );
  },
  fetchAllCinemaComplexApi: () => {
    return callApi(
      `QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUP_ID}`
    )
  },
  fetchAllMovieApi: () => {
    return callApi(`QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}`)
  },
  fetchShowTimeByMovieApi: (movieId) => {
    return callApi(`QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${movieId}`)
  }
};
