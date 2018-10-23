import React from 'react';
import {Form,Input,Button,Select,Modal} from 'antd'
const FormItem = Form.Item;
const Option = Select.Option;

class  AddUserhistory extends React.Component{//在es6中定义一个AddUser类
     constructor(props){//构造函数
         super(props);
         this.state = {
             visible:false
         };
         this.handleAdd = this.handleAdd.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);
         this.handleOk = this.handleOk.bind(this)
         this.handleClear = this.handleClear.bind(this)
     }
    handleAdd() {
        this.setState({
            visible: true
        });
    }
    handleSubmit(e){//提交表单
        e.preventDefault();
         this.props.form.validateFieldsAndScroll((err,values)=>{
             if(!err){
                 //console.log('接收的值：',values);
                 this.setState({
                     visible:false
                 })
                 this.props.form.resetFields();//清空提交的表单
                 //当值传递到父元素后，通过回调函数触发appendPerson方法将参数values带到父元素
                 this.props.callback(values);
             }
         })
    }

    handleClear(){
        this.props.form.resetFields();
    }

    handleOk() {
        this.setState({
            visible: false
            });
    }
    render(){

     const {getFieldDecorator} = this.props.form;
     const formItemLayout = {
         labelCol:{span : 6},
         wrapperCol:{span: 14}
     };
     const tailFormItemLayout = {
         wrapperCol: {
             span: 14,
             offset: 8
         }
     };
        return(
            <div>
                <Button type="primary" onClick={this.handleAdd}>添加用户</Button>
            <Modal title="新建用户" visible={this.state.visible} onCancel={this.handleOk} onOk={this.handleOk}>
                <Form onSubmit={this.handleSubmit}>
                    <FormItem {...formItemLayout} label = "序号"  hasFeedback>
                        {getFieldDecorator('seatid', {
                            rules:[{
                                required:true,message:'请输入您的序号！'
                            }]
                        })(
                            <Input placeholder="请输入您的序号！"/>
                        )}
                        </FormItem>
                        <FormItem {...formItemLayout} label = "发布者"  hasFeedback>
                            {getFieldDecorator('seatpromu', {
                                rules:[{
                                    required:true,message:'请输入发布者！'
                                }]
                            })(
                                <Input placeholder="请输入发布者！"/>
                            )}
                            </FormItem>

                    <FormItem {...formItemLayout} label="发布时间" hasFeedback>
                        {getFieldDecorator('seatime',{
                            rules:[{required:true,message:'请输入您的发布时间'}]
                        })(
                            <Input placeholder="请输入您的发布时间！"/>
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="发布内容" hasFeedback>
                        {getFieldDecorator('seatcontent',{
                            rules:[{required:true,message:'请输入您的发布内容'}]
                        })(
                            <Input type="textarea" rows={3} placeholder="请输入您的发布内容!"/>
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="备注" hasFeedback>
                        {getFieldDecorator('remark',{
                            rules:[{required:true,message:'请输入您的备注'}]
                        })(
                            <Input type="textarea" rows={3} placeholder="请输入您的备注!"/>
                        )}
                    </FormItem>

                    <FormItem {...formItemLayout} label="发布类型" hasFeedback>
                        {getFieldDecorator('Publishtype',{
                            rules:[{
                                required:true,message:'请输入您的发布类型！'
                            }]
                        })(
                            <Select placeholder="请选择您的性别">
                                <Option value="通知类">通知类</Option>
                                <Option value="提示类">提示类</Option>
                            </Select>
                )}
                    </FormItem>
                  
                    <FormItem {...tailFormItemLayout} style={{padding:10}}>
                        <Button type="primary" htmlType="submit" size="large">提交</Button>
                        <Button type="primary" size="large" onClick={this.handleClear}>重置</Button>
                    </FormItem>
                </Form>
            </Modal>
            </div>
        )
    }
}
AddUserhistory = Form.create()(AddUserhistory); //解决了getFieldDecorator无法定义;

export default AddUserhistory;
