import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import Loader from "components/Loader/Loader";
import React, { Component } from "react";
import { connect } from "react-redux";
import { actLogin } from "../module/action";
import "./LoginPage.css";

class LoginPage extends Component {
  history = this.props.history;

  onFinish = (values) => {
    this.props.dispatchLogin(values, this.history);
  };

  render() {
    if (this.props.loading) return <Loader></Loader>
    return (
      <div>
        <img
          src="./background-film.jpg"
          alt="login-background"
          className="login-bg"
        />
        <Form
          labelCol={{
            span: 5,
          }}
          wrapperCol={{
            span: 16,
          }}
          name="normal_login"
          className="login-form formation "
          onFinish={this.onFinish}
        >
          <h1 className="d-flex justify-content-center color-white pb-4">
            Đăng nhập
          </h1>
          {this.props.error && (
            <div className="alert alert-danger">{this.props.error}</div>
          )}
          <Form.Item
            className="pb-4"
            label="Tên đăng nhập"
            name="taiKhoan"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            className="pb-3"
            label="Mật khẩu"
            name="matKhau"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item className="d-flex justify-content-end">
            <Button
              type="primary "
              htmlType="submit"
              className="login-form-button"
            >
              Đăng nhập
            </Button>
          </Form.Item>
          <Form.Item className="d-flex justify-content-end ml-5">
            <div className="pt-2 pb-4 span-deco ml-5">Hoặc</div>
          </Form.Item>
          <Form.Item className="d-flex justify-content-end">
            <Button
              type="default"
              htmlType="submit"
              className="login-form-button register-button"
            >
              Đăng kí
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchLogin: (user, history) => {
    dispatch(actLogin(user, history));
  },
});

const mapStateToProps = (state) => ({
  loading: state.authReducer.loading,
  error: state.authReducer.error,
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
