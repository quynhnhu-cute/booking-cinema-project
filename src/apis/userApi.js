import { callApi } from "utils/callApi"

const userApi = {
    loginApi(user){
        return callApi('QuanLyNguoiDung/DangNhap', 'POST', user)
    }
}

export default userApi;
