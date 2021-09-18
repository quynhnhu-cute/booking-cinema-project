import SideBar from 'components/SideBar/SideBar'
import TopBar from 'components/TopBar/TopBar'
import React, { Component } from 'react'
import { DefaultSelectedIndex } from 'settings/appConfig' 
import { FaPlus } from "react-icons/fa";
import Button from 'components/StandardButton/Button';
import './UserManagement.css';
import { Table, Tag, Space } from 'antd';
import userApi from 'apis/userApi';


export default class UserManagement extends Component {
    state = {
        isLoading: false,
        data: []
    }
    columns = [
        {
          title: 'Tài khoản',
          dataIndex: 'username',
          key: 'username',
          render: text => <a>{text}</a>,
        },
        {
          title: 'Họ tên',
          dataIndex: 'fullName',
          key: 'fullName',
          render: text => <a>{text}</a>,
        },
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'email',
        },
        {
          title: 'Số điện thoại',
          dataIndex: 'phoneNum',
          key: 'address',
        },
        {
          title: 'Mã nhóm',
          key: 'groupNum',
          dataIndex: 'groupNum',
         
        },
        {
          title: 'Loại người dùng',
          key: 'kindOfUser',
          
        },
      ];

      

    //   getListUserPagination = () => {
    //     this.setState({isLoading: true});
    //     userApi.getListUserPagination(1).then(response =>{
    //         console.log(response);
    //         // console.log(response.data);
    //     }).catch(error =>{
    //         console.log(error);
    //     })
    //   }

      componentDidMount(){
        this.setState({isLoading: true});
        userApi.getUserListApi(1).then(response =>{
            this.setState({isLoading: false});
            console.log(response);
            // console.log(response.data);
        }).catch(error =>{
            this.setState({isLoading: false})
            console.log(error);
        })
      }
    render() {
        return (
            <div className="container-fluid user-container" >
                
                <div className="row">
                    <div className="col-12" ><TopBar/></div>
                    <div className="col-3"><SideBar defaultIndex={DefaultSelectedIndex.UserManagement}/></div>
                    <div className="col-9 ">
                        <div className="row justify-content-end button-position user-content">
                           <Button color="white" background="green" icon={<FaPlus/>}>New</Button>
                        </div>
                        <div className="row">

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
