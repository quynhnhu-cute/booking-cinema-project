import { GROUP_ID } from "settings/apiConfig";
import { callApi } from "utils/callApi";

// movie api here
export const movieApi = {
  fetchMovieWithPageApi: (currentPage, countInPage) => {
    //currentPage: Số trang cần callApi
    //countInPage: Số phần tử (phim) trong 1 trang
    return callApi(
      `QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=${GROUP_ID}&soTrang=${currentPage}&soPhanTuTrenTrang=${countInPage}`
    );
  },
};
