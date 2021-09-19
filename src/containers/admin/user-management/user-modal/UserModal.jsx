import {
    Form,
    Input, Modal, Switch
} from "antd";
import React, { Component } from "react";
import './UserModal.css'

export default class UserModal extends Component {
    state ={
        isModalVisible: this.props.visible
    }
  handleOk = () => {
    this.setState({isModalVisible: false})
  };

  handleCancel = () => {
    this.setState({isModalVisible: false})
  };

  
  render() {
    return (
      <Modal
        title="Thông tin người dùng"
        visible={this.state.isModalVisible}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
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
            <Input />
          </Form.Item>
          <Form.Item label="Họ tên: ">
            <Input />
          </Form.Item>
          <Form.Item label="Email: ">
            <Input />
          </Form.Item>
          <Form.Item label="Số điện thoại: ">
            <Input />
          </Form.Item>
          <Form.Item label="Quản trị" valuePropName="checked">
            <Switch />
          </Form.Item>
          
        </Form>
      </Modal>
    );
  }
}
