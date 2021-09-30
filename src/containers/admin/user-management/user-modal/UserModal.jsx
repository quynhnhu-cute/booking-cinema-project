import { Form, Input, Modal, Switch } from "antd";
import userApi from "apis/userApi";
import React, { Component } from "react";
import { connect } from "react-redux";
import { GROUP_ID } from "settings/apiConfig";
import { FAILED_STATUS_CODE, LoaiNguoiDung, SUCCESS_STATUS_CODE } from "settings/appConfig";
import { openNotification } from "utils/notification";
import "./UserModal.css";

class UserModal extends Component {
  state = {
    isModalVisible: this.props.visible,
    userInfo: this.props.userInfo,
    isUpdating: false,
  };

  isNew = this.props.isNew;
  
  handleOk = () => {
    this.setState({ isUpdating: true });
    if (this.isNew) {
      userApi.newUser(this.state.userInfo, this.props.token).then(result =>{
          if(result.status == SUCCESS_STATUS_CODE){
            this.setState({ isModalVisible: false });
            this.sendData();
            openNotification("success", "Thêm người dùng thành công")
          }
         
      }).catch(error =>{
        if(error.response.status == FAILED_STATUS_CODE){
          openNotification("warning", error.response.data);
        }else{
          openNotification("error", "Thêm người dùng thất bại");
        }
        console.log(error.response.data);
      })
     
    } else {
      userApi
        .updateUserApi(this.state.userInfo, this.props.token)
        .then((result) => {
          if(result.status == SUCCESS_STATUS_CODE){
            openNotification("success", "Cập nhật người dùng thành công")
            this.setState({ isModalVisible: false });
            this.sendData();
          }
         
        })
        .catch((error) => {
          if(error.response.status == FAILED_STATUS_CODE){
            openNotification("warning", error.response.data);
          }else{
            openNotification("error", "Cập nhật người dùng thất bại");
          }
          console.log(error);
        });
    }
  };

  handleCancel = () => {
    this.setState({ isModalVisible: false });
    // this.sendData();
  };

  handleHoTen = (e) => {
    const value = e.target.value;
    this.setState({ userInfo: { ...this.state.userInfo, hoTen: value, maNhom: GROUP_ID } });
  };

  handleEmail = (e) => {
    const value = e.target.value;
    this.setState({ userInfo: { ...this.state.userInfo, email: value } });
  };
  handleSDT = (e) => {
    const value = e.target.value;
    this.setState({ userInfo: { ...this.state.userInfo, soDt: value } });
  };
  handleQuanTri = (e) => {
    e
      ? this.setState({
          userInfo: {
            ...this.state.userInfo,
            maLoaiNguoiDung: LoaiNguoiDung.QUAN_TRI,
          },
        })
      : this.setState({
          userInfo: {
            ...this.state.userInfo,
            maLoaiNguoiDung: LoaiNguoiDung.KHACH_HANG,
          },
        });
  };

  handleTaiKhoan = (e) => {
    const value = e.target.value;
    this.setState({ userInfo: { ...this.state.userInfo, taiKhoan: value } });
  };
  sendData = () => {
    this.props.openModal(false);
  };
  handleMatKhau = (e) =>{
    const value = e.target.value;
    this.setState({ userInfo: { ...this.state.userInfo, matKhau: value } });
  }

  render() {
    return (
      <Modal
        title="Thông tin người dùng"
        visible={this.state.isModalVisible}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
        okText={this.isNew ? "Thêm" : "Cập nhật"}
        cancelText="Hủy"
        afterClose={this.sendData}
      >
        <Form
          labelCol={{
            span: 5,
          }}
          wrapperCol={{
            span: 15,
          }}
          layout="horizontal"
        >
          <Form.Item label="Tài khoản:">
            <Input
              disabled={this.isNew ? false : true}
              value={this.state.userInfo ?  this.state.userInfo.taiKhoan : ""}
              onChange={(e) => this.handleTaiKhoan(e)}
            />
          </Form.Item>
          <Form.Item label="Mã nhóm: ">
            <Input value={GROUP_ID} disabled />
          </Form.Item>
          <Form.Item label="Họ tên: ">
            <Input
              value={this.state.userInfo ?  this.state.userInfo.hoTen  : ""}
              onChange={(e) => this.handleHoTen(e)}
            />
          </Form.Item>
          {this.isNew && (<Form.Item label="Mật khẩu: ">
            <Input
              type="password"
              value={this.state.userInfo ? this.state.userInfo.matKhau : ""}
              onChange={(e) => this.handleMatKhau(e)}
            />
          </Form.Item>)}
          <Form.Item label="Email: ">
            <Input
              value={this.state.userInfo ?  this.state.userInfo.email : ""}
              onChange={(e) => this.handleEmail(e)}
            />
          </Form.Item>
          <Form.Item label="Số điện thoại: ">
            <Input
              value={this.state.userInfo ? this.state.userInfo.soDt : ""}
              onChange={(e) => this.handleSDT(e)}
            />
          </Form.Item>

          <Form.Item label="Quản trị" valuePropName="checked">
            <Switch
              onChange={(e) => this.handleQuanTri(e)}
              checked={
                this.state.userInfo
                  ? this.state.userInfo.maLoaiNguoiDung ==
                    LoaiNguoiDung.QUAN_TRI
                  ? true
                  : false
                  : false
              }
            />
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.authReducer.currentUser.accessToken,
});

export default connect(mapStateToProps, null)(UserModal);
