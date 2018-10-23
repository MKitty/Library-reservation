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
                       <p>序号：  {this.props.pass.nid} </p>
                       <p>ID：  {this.props.pass.numid}</p>
                       <p>分类：  {this.props.pass.degree} </p>
                       <p>姓名： {this.props.pass.name}  </p>
                       <p>性别： {this.props.pass.gender} </p>
                       <p>年龄：  {this.props.pass.age} </p>
                       <p>学院： {this.props.pass.schoolname} </p>
                       <p>标签： {this.props.pass.description}  </p>
                       <p>专业： {this.props.pass.major}</p>
                       <p>学币：  {this.props.pass.learnc} </p>
                       <p>组别：  {this.props.pass.group}</p>
                </Modal>
            </div>
        )
    }

}

export default UserDetails;
