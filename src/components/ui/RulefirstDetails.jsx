import React from 'react'
import {Modal,Button} from 'antd'
/*

 */
class  RulefirstDetails extends React.Component{
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
            <div className="popmain">
                <a onClick={this.handlePopup}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                修改</a>
                <Modal   title={this.props.pass.readingroom} visible={this.state.visible}
                       onOk=   {this.handleOkOrCancel} onCancel={this.handleOkOrCancel}>
                       <p>楼层： {this.props.pass.loftid} </p>
                       <p>阅览室名称：{this.props.pass.readingroom}</p>
                       <p>单元模块：{this.props.pass.Unitmodule}</p>
                       <p>座位数量：{this.props.pass.setaccount}</p>
                       <p>数量：{this.props.pass.loftaccount}</p>
                       <p>座位总数：{this.props.pass.setol}</p>
                </Modal>
                <style>{`
                .ant-input{width:150px}
                .popmain .ant-input-number-input{width:150px}

                `}  </style>
            </div>
        )
    }

}

export default RulefirstDetails;
