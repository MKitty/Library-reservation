import React from 'react'
import {Modal,Button,Radio,Checkbox} from 'antd'

const RadioGroup = Radio.Group;
function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}
class  UserDetailsjrisdiction extends React.Component{

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
                <a onClick={this.handlePopup}>激活权限</a>
                <Modal title={this.props.pass.name} visible={this.state.visible}
                       onOk=   {this.handleOkOrCancel} onCancel={this.handleOkOrCancel}>
                       {/* <RadioGroup name="radiogroup" defaultValue={1}>
                       <Radio value={1}>{this.props.pass.Activateseat}</Radio>
                       <Radio value={2}>冻结</Radio>
                     </RadioGroup>*/}
                       <p>激活座位：
                             <Checkbox onChange={onChange} value='{this.props.pass.Activateseat}'></Checkbox>
                       </p>
                       {/*
                          <RadioGroup name="radiogroup" defaultValue={1}>
                           <Radio value={1}>{this.props.pass.ActivatSpeace}</Radio>
                           <Radio value={2}>冻结</Radio>
                         </RadioGroup>*/}
                       <p>激活空间：
                            <Checkbox onChange={onChange} value='{this.props.pass.ActivatSpeace}'></Checkbox>
                       </p>

                </Modal>
            </div>
        )
    }

}

export default UserDetailsjrisdiction;
