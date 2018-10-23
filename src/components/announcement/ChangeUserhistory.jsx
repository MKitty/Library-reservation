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
                <Modal title={this.props.pass.name} visible={this.state.visible}
                       onOk=   {this.handleOkOrCancel} onCancel={this.handleOkOrCancel}>
                    <p>编号：  <input placeholder={this.props.pass.nid} /> </p>
                    <p>姓名：   <input placeholder={this.props.pass.name} /> </p>
                    <p>性别：  <input placeholder={this.props.pass.gender} />  </p>
                    <p>年龄：  <input placeholder= {this.props.pass.age} />   </p>
                    <p>学校：  <input placeholder={this.props.pass.schoolname} />    </p>
                    <p>标签： <input placeholder={this.props.pass.description} />  </p>
                    <p>专业： <input placeholder={this.props.pass.major} />  </p>
                </Modal>
            </div>
        )
    }

}

export default ChangeUserhistory;
