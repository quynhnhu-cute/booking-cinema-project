import { GROUP_ID, NUMBER_EACH_PAGE } from "settings/apiConfig";
import { callApi } from "utils/callApi"

const userApi = {
    loginApi(user){
        return callApi('QuanLyNguoiDung/DangNhap', 'POST', user)
    },
    registerApi(user){
        return callApi('QuanLyNguoiDung/DangKy', 'POST', user)
    },
    getUserListApi(currentPage){
        return callApi(`QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang?MaNhom=${GROUP_ID}&soTrang=${currentPage}&soPhanTuTrenTrang=${NUMBER_EACH_PAGE}`, 'GET', null);
    },
    fetchUserProfileApi(taiKhoan){
        return callApi('QuanLyNguoiDung/ThongTinTaiKhoan','POST', taiKhoan)
    },
    editProfileApi(userUpdate,userToken) {
        return callApi('QuanLyNguoiDung/CapNhatThongTinNguoiDung','PUT', userUpdate, userToken)
    }
}


export default userApi;
