import {
  Col,
  DatePicker,
  Form,
  Input,
  Modal,
  Row,
  Select,
  TimePicker,
} from "antd";
import { theaterApi } from "apis/theaterApi";
import React, { Component } from "react";
import { openNotification } from "utils/notification";
import "./ShowMovieModal.css";
import { Cascader, InputNumber, Space } from "antd";
import { connect } from "react-redux";
import { FAILED_STATUS_CODE, SUCCESS_STATUS_CODE } from "settings/appConfig";
import { withFormik } from "formik";

class ShowMovieModal extends Component {
  state = {
    isModalVisible: this.props.visible,
    movieInfo: this.props.movieInfo,
    isLoading: false,
    theaterSystem: null,
    theaterDetailList: null,
    heThongChosen: null,
    theaterDetailChosen: null,
  };
  ngayChieuPhim = "";
  gioChieu = "00:00:00";
  getHeThongRap = () => {
    this.setState({ isLoading: true });
    theaterApi
      .getTheaterSystem()
      .then((result) => {
        this.setState({
          isLoading: false,
          theaterSystem: result.data,
          heThongChosen: result.data[0].maHeThongRap,
        });
        this.getTheaterDetailList();
        console.log(result);
      })
      .catch((error) => {
        this.setState({ isLoading: false });
        openNotification("error", "Lỗi lấy dữ liệu hệ thống rạp");
        console.log(error);
      });
  };

  getTheaterDetailList = async () => {
    this.setState({ isLoading: true });
    console.log(this.state.heThongChosen);
    theaterApi
      .getTheaterDetail(this.state.heThongChosen)
      .then((result) => {
        let options = [];
        result.data.map((cumRap) => {
          let listRap = [];
          cumRap.danhSachRap.map((rap) => {
            listRap.push({ label: rap.tenRap, value: rap.maRap });
          });
          options.push({
            value: cumRap.maCumRap,
            label: cumRap.tenCumRap,

            children: listRap,
          });
        });
        this.setState({ theaterDetailList: options });
        console.log(result);
      })
      .catch((error) => {
        openNotification("error", "Lỗi lấy dữ liệu tên rạp");
        console.log(error);
      });
  };
  showModal = () => {
    this.setState({ isModalVisible: true });
  };

  sendData = () => {
    this.props.getData();
  };

  handleOk = async () => {
    // this.setState({ isModalVisible: false });
    await this.setState({
      theaterDetailChosen: {
        ...this.state.theaterDetailChosen,
        maPhim: this.state.movieInfo.maPhim,
        ngayChieuGioChieu: this.ngayChieuPhim + " " + this.gioChieu,
      },
    });
    console.log(this.state.theaterDetailChosen);
    this.setState({ isLoading: true });
    theaterApi
      .addMovieShow(this.state.theaterDetailChosen, this.props.token)
      .then((result) => {
        if (result.status == SUCCESS_STATUS_CODE) {
          openNotification("success", result.data);
        }
      })
      .catch((error) => {
        if (error.response.status == FAILED_STATUS_CODE) {
          openNotification("warning", error.response.data);
        } else {
          openNotification("error", "Không thể thêm phim!");
        }
        console.log(error);
      });
    this.sendData();
  };

  handleCancel = () => {
    this.setState({ isModalVisible: false });
    this.sendData();
  };

  componentDidMount() {
    this.getHeThongRap();
  }
  chonHeThongRap = async (value) => {
    await this.setState({ heThongChosen: value });
    this.getTheaterDetailList();
  };
  chonRapChieu = (value, selectedOptions) => {
    this.setState({
      theaterDetailChosen: {
        ...this.state.theaterDetailChosen,
        maRap: value[1],
      },
    });
    console.log(value[1]);
    console.log(selectedOptions);
  };

  layNgayChieu = (date, dateString) => {
    this.ngayChieuPhim = dateString;

    console.log(dateString);
  };

  layGioChieu = (time, timeString) => {
    this.gioChieu = timeString;
    console.log(this.ngayChieuPhim);
    console.log(timeString);
  };
  layGiaVe = (value) => {
    console.log(value);
    this.setState({
      theaterDetailChosen: { ...this.state.theaterDetailChosen, giaVe: value },
    });
  };
  render() {
    return (
      <Modal
        title="Thêm Lịch Chiếu"
        visible={this.state.isModalVisible}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
        width={800}
        okText="Thêm"
        cancelText="Hủy"
      >
        <Row>
          <Col span="8">
            <img
              src={this.state.movieInfo.hinhAnh}
              alt=""
              className="modal-image"
            />
          </Col>
          <Col span="16">
            <Form
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 18 }}
              layout="horizontal"
            >
              <Form.Item label="Mã phim: ">
                <Input value={this.state.movieInfo.maPhim} disabled />
              </Form.Item>
              <Form.Item label="Tên phim: ">
                <Input value={this.state.movieInfo.tenPhim} disabled />
              </Form.Item>
              <Form.Item label="DatePicker">
                <Space>
                  <DatePicker
                    onChange={this.layNgayChieu}
                    format="DD/MM/YYYY"
                  />
                  <TimePicker onChange={this.layGioChieu} />
                </Space>
              </Form.Item>

              {this.state.theaterSystem && (
                <Form.Item label="Hệ thống rạp:">
                  <Select
                    value={this.state.heThongChosen}
                    onChange={this.chonHeThongRap}
                  >
                    {this.state.theaterSystem.map((theater) => {
                      return (
                        <Select.Option value={theater.maHeThongRap}>
                          {theater.tenHeThongRap}
                        </Select.Option>
                      );
                    })}
                  </Select>
                </Form.Item>
              )}
              <Form.Item label="Chọn rạp">
                {this.state.theaterDetailList && (
                  <Cascader
                    options={this.state.theaterDetailList}
                    // defaultValue={[this.state.theaterDetailList[0].label, this.state.theaterDetailList[0].children[0].label]}
                    onChange={this.chonRapChieu}
                    placeholder="Chọn rạp"
                  />
                )}
              </Form.Item>
              <Form.Item label="Giá vé">
                <Space>
                  <InputNumber
                    min={75000}
                    max={200000}
                    style={{ width: "300px" }}
                    onChange={this.layGiaVe}
                  />
                  <Input value={"VNĐ"} disabled style={{ width: "55px" }} />
                </Space>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.authReducer.currentUser.accessToken,
});

export default connect(mapStateToProps, null)(ShowMovieModal);
