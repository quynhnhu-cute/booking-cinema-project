import { GROUP_ID, NUMBER_EACH_PAGE } from "settings/apiConfig";
import { callApi } from "utils/callApi"

const userApi = {
    loginApi(user){
        return callApi('QuanLyNguoiDung/DangNhap', 'POST', user)
    }
,
    getUserListApi(currentPage){
        // return callApi(`QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang?MaNhom=${GROUP_ID}&soTrang=${currentPage}&soPhanTuTrenTrang=${NUMBER_EACH_PAGE}`, 'GET', null);
        return callApi(`QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUP_ID}`, 'GET', null);
    }
}

export default userApi;
