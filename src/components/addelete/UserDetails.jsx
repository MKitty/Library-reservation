import React from 'react'
import {Modal,Button} from 'antd'
/*

 */
class  UserDetails extends React.Component{
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
                <Modal title={this.props.pass.name} visible={this.state.visible}
                       onOk=   {this.handleOkOrCancel} onCancel={this.handleOkOrCancel}>
                    <p>姓名：   {this.props.pass.name}</p>
                    <p>性别：    {this.props.pass.gender}</p>
                    <p>年龄：      {this.props.pass.age}</p>
                    <p>就读学校：   {this.props.pass.schoolname}</p>
                    <p>在校表现：   {this.props.pass.description}</p>
                </Modal>
            </div>
        )
    }

}

export default UserDetails;
