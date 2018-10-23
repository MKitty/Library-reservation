import React from 'react'
import {Modal,Button} from 'antd'
/*

 */
class  UserDetailsmanage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            visible:false
        }
        this.handlePopup = this.handlePopup.bind(this);
        this.handleOkOrCancel = this.handleOkOrCancel.bind(this);
    }
    handlePopup() {
        this.setState({
            visible: true
        });
    }
    handleOkOrCancel(){
        this.setState({
            visible: false
        });
    }

    render(){
        return(
            <div>
                <a onClick={this.handlePopup}>详情</a>
                <Modal title={this.props.pass.managerl} visible={this.state.visible}
                       onOk=   {this.handleOkOrCancel} onCancel={this.handleOkOrCancel}>
                    <p>序号：   {this.props.pass.mided}</p>
                    <p>ID：    {this.props.pass.manageid}</p>
                    <p>管理员：      {this.props.pass.managerl}</p>
                    <p>部门：   {this.props.pass.department}</p>
                    <p>添加管理员：   {this.props.pass.addmember}</p>
                    <p>重置密码：   {this.props.pass.addmember}</p>
                    <p>解除违约：   {this.props.pass.removebefore}</p>
                    <p>预约管理：   {this.props.pass.Bookingmanagement}</p>
                </Modal>
            </div>
        )
    }

}

export default UserDetailsmanage;
