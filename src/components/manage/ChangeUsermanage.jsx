import React from 'react'
import {Modal,Button,Input} from 'antd'
/*

 */
class  ChangeUsermanage extends React.Component{
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
            <div style={{float:'left'}}>
                <a onClick={this.handlePopup}>修改</a>
                <Modal title={this.props.pass.managerl} visible={this.state.visible}
                       onOk=   {this.handleOkOrCancel} onCancel={this.handleOkOrCancel}>

                    <p>序号： <input placeholder= {this.props.pass.mided} /> </p>
                    <p>ID：  <input placeholder={this.props.pass.manageid} />  </p>
                    <p>管理员： <input placeholder={this.props.pass.managerl} /></p>
                    <p>部门： <input placeholder={this.props.pass.department}/></p>
                    <p>添加管理员：<input placeholder={this.props.pass.addmember} /> </p>
                    <p>重置密码：<input placeholder={this.props.pass.addmember}/> </p>
                    <p>解除违约：<input placeholder={this.props.pass.removebefore} /></p>
                    <p>预约管理： <input placeholder={this.props.pass.Bookingmanagement} /></p>
                </Modal>
            </div>
        )
    }

}

export default ChangeUsermanage;
