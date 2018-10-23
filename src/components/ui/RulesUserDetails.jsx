import React from 'react'
import {Modal,Button} from 'antd'
/*

 */
class  UserDetailshistory extends React.Component{
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
                <Modal title={this.props.pass.seatpromu} visible={this.state.visible}
                       onOk=   {this.handleOkOrCancel} onCancel={this.handleOkOrCancel}>
                       <p>序号： {this.props.pass.seatid} </p>
                       <p>发布者： {this.props.pass.seatpromu}</p>
                       <p>发布时间：{this.props.pass.seatime} </p>
                       <p>发布内容：{this.props.pass.seatcontent}</p>
                       <p>备注：{this.props.pass.remark} </p>
                       <p>发布类型：{this.props.pass.Publishtype}</p>

                </Modal>
            </div>
        )
    }

}

export default UserDetailshistory;
