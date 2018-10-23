import React from 'react'
import {Modal,Button,Input} from 'antd'
/*

 */
class  ChangeUserjrisdiction extends React.Component{
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
                    <p>序号：  <input placeholder={this.props.pass.unid} /> </p>
                    <p>ID：  <input placeholder={this.props.pass.userid} /> </p>
                    <p>分类：  <input placeholder={this.props.pass.degree} /> </p>
                    <p>姓名：   <input placeholder={this.props.pass.name} /> </p>
                    <p>学院：  <input placeholder={this.props.pass.schoolname} />    </p>
                    <p>专业： <input placeholder={this.props.pass.major} />  </p>
                    <p>学号： <input placeholder={this.props.pass.schoolnumber} />  </p>
                    <p>座位预约： <input placeholder={this.props.pass.Seatreservation} />  </p>
                    <p>激活座位： <input placeholder={this.props.pass.Activateseat} />  </p>
                    <p>空间预约： <input placeholder={this.props.pass.Speaceservatio} />  </p>
                    <p>激活空间： <input placeholder={this.props.pass.ActivatSpeace} />  </p>

                </Modal>
            </div>
        )
    }

}

export default ChangeUserjrisdiction;
