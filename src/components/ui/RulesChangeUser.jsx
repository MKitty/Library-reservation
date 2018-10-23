import React from 'react'
import {Modal,Button,Input} from 'antd'
/*

 */
class  ChangeUserhistory extends React.Component{
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
                <Modal title={this.props.pass.seatpromu} visible={this.state.visible}
                       onOk=   {this.handleOkOrCancel} onCancel={this.handleOkOrCancel}>
                    <p>序号：  <input placeholder={this.props.pass.seatid} /> </p>
                    <p>发布者：   <input placeholder={this.props.pass.seatpromu} /> </p>
                    <p>发布时间：  <input placeholder={this.props.pass.seatime} />  </p>
                    <p>发布内容：  <input placeholder= {this.props.pass.seatcontent} />   </p>
                    <p>备注：  <input placeholder={this.props.pass.remark} />    </p>
                    <p>发布类型： <input placeholder={this.props.pass.Publishtype} />  </p>


                </Modal>
            </div>
        )
    }

}

export default ChangeUserhistory;
