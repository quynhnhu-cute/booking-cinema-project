import {
    Form,
    Input, Modal, Switch
} from "antd";
import userApi from "apis/userApi";
import authReducer from "containers/auth/module/reducer";
import React, { Component } from "react";
import { connect } from "react-redux";
import { GROUP_ID } from "settings/apiConfig";
import { LoaiNguoiDung } from "settings/appConfig";
import './UserModal.css'

class UserModal extends Component {
  
    state ={
        isModalVisible: this.props.visible,
        userInfo: this.props.userInfo,
        isUpdating: false,
       
    }
  handleOk = () => {
    
    // console.log(this.state.userInfo);
    // console.log(this.props.token);
    this.setState({isUpdating: true});
    userApi.updateUserApi(this.state.userInfo, this.props.token).then(result =>{
      console.log(result);
      this.setState({isModalVisible: false});
      this.sendData();
    }).catch(error =>{
      console.log(error);
    })
  };

  handleCancel = () => {
    this.setState({isModalVisible: false})
  };

  handleHoTen = (e) =>{
    const value = e.target.value;
    this.setState({userInfo: {...this.state.userInfo, hoTen: value}})
  }

  handleEmail = (e) =>{
    const value = e.target.value;
    this.setState({userInfo: {...this.state.userInfo, email: value}})
  }
  handleSDT = (e) =>{
    const value = e.target.value;
    this.setState({userInfo: {...this.state.userInfo, soDt: value}})
  }
  handleQuanTri = (e) =>{
    e ? this.setState({userInfo: {...this.state.userInfo, maLoaiNguoiDung: LoaiNguoiDung.QUAN_TRI}}): 
    this.setState({userInfo: {...this.state.userInfo, maLoaiNguoiDung: LoaiNguoiDung.KHACH_HANG}});
    
  }

  sendData = () =>{
    this.props.openModal(false);
  }

  
  
  render() {
    return (
      <Modal
        title="Thông tin người dùng"
        visible={this.state.isModalVisible}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
        okText={this.state.userInfo ? 'Cập nhật' : 'Thêm'}
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
            <Input disabled value={this.state.userInfo.taiKhoan} />
          </Form.Item>
          <Form.Item label="Mã nhóm: ">
            <Input value={GROUP_ID} disabled/>
          </Form.Item>
          <Form.Item label="Họ tên: ">
            <Input value={this.state.userInfo.hoTen} onChange={(e) => this.handleHoTen(e)}/>
          </Form.Item>
          <Form.Item label="Email: ">
            <Input value={this.state.userInfo.email} onChange={(e) => this.handleEmail(e)}/>
          </Form.Item>
          <Form.Item label="Số điện thoại: ">
            <Input value={this.state.userInfo.soDt} onChange={(e) => this.handleSDT(e)}/>
          </Form.Item>
         
          <Form.Item label="Quản trị" valuePropName="checked">
            <Switch onChange={(e) => this.handleQuanTri(e)}/>
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
