import { Space, Table } from "antd";
import userApi from "apis/userApi";
import SideBar from "components/SideBar/SideBar";
import Button from "components/StandardButton/Button";
import TopBar from "components/TopBar/TopBar";
import React, { Component } from "react";
import { FaEdit, FaPlus, FaTrashAlt } from "react-icons/fa";
import { GROUP_ID } from "settings/apiConfig";
import { DefaultSelectedIndex } from "settings/appConfig";
import UserModal from "./user-modal/UserModal";
import "./UserManagement.css";

export default class UserManagement extends Component {
  state = {
    isLoading: false,
    data: [],
    userModalStatus: false,
    user: null
  };
  openEditModal = (text) => {
    console.log(text)
    this.setState({ userModalStatus: true, user: text });
   
  };

  openModal = (childData) =>{
    this.setState({userModalStatus: childData})
  }

  columns = [
    {
      title: "STT",
      dataIndex: "index",
      key: "index",
    },
    {
      title: "Tài khoản",
      dataIndex: "taiKhoan",
      key: "taiKhoan",
    },
    {
      title: "Họ tên",
      dataIndex: "hoTen",
      key: "hoTen",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Số điện thoại",
      dataIndex: "soDt",
      key: "soDt",
    },
    {
      title: "Mã nhóm",
      key: "maNhom",
      dataIndex: "maNhom",
    },
    {
      title: "Loại người dùng",
      key: "maLoaiNguoiDung",
      dataIndex: "maLoaiNguoiDung",
    },
    {
      title: "Thao tác",
      key: "action",
      render: (text, index, record) => (
        <Space size="middle">
          <FaEdit
            className="edit-button"
            onClick={() => this.openEditModal(text)}
          />
          <FaTrashAlt className="delete-button" onClick={() => {}} />
        </Space>
      ),
    },
  ];

  getListUserPagination = () => {
    this.setState({ isLoading: true });
    userApi
      .getUserListApi()
      .then((response) => {
        let tableData = [];
         response.data.forEach((element, index) =>
          tableData.push({ ...element, index: index + 1, maNhom: GROUP_ID })
        );
        console.log(tableData);

        this.setState({ isLoading: false, data: tableData });
      })
      .catch((error) => {
        this.setState({ isLoading: false });
        console.log(error);
      });
  };

  componentDidMount() {
    this.getListUserPagination();
  }
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid user-container">
          <div className="row">
            <div className="col-12">
              <TopBar />
            </div>
            <div className="col-2">
              <SideBar defaultIndex={DefaultSelectedIndex.UserManagement} />
            </div>

            <div className="col-9 div-table ml-5">
              <div className="row justify-content-end button-position user-content">
                <Button color="white" background="green" icon={<FaPlus />}>
                  New
                </Button>
              </div>
              <div className="row mt-3">
                <Table
                  columns={this.columns}
                  dataSource={this.state.data}
                  className="user-table"
                  bordered
                />
              </div>
            </div>
          </div>
        </div>
        {this.state.userModalStatus && <UserModal visible={true} userInfo={this.state.user} openModal={this.openModal}/>}
      </React.Fragment>
    );
  }
}
