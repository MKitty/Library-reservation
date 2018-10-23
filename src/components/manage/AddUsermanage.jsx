import React from 'react';
import {Form,Input,Button,Select,Modal} from 'antd'
const FormItem = Form.Item;
const Option = Select.Option;

class  AddUsermanage extends React.Component{//在es6中定义一个AddUser类
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
                        {getFieldDecorator('mided', {
                            rules:[{
                                required:true,message:'请输入您的序号！'
                            }]
                        })(
                            <Input placeholder="请输入您的序号！"/>
                        )}
                        </FormItem>
                        <FormItem {...formItemLayout} label = "ID"  hasFeedback>
                            {getFieldDecorator('manageid', {
                                rules:[{
                                    required:true,message:'请输入您的ID！'
                                }]
                            })(
                                <Input placeholder="请输入您的ID！"/>
                            )}
                            </FormItem>
                            <FormItem {...formItemLayout} label = "管理员"  hasFeedback>
                                {getFieldDecorator('managerl', {
                                    rules:[{
                                        required:true,message:'请输入您的管理员！'
                                    }]
                                })(
                                    <Input placeholder="请输入您的管理员！"/>
                                )}
                                </FormItem>
                        <FormItem {...formItemLayout} label = "部门"  hasFeedback>
                            {getFieldDecorator('department', {
                                rules:[{
                                    required:true,message:'请输入您的部门！'
                                }]
                            })(
                                <Input placeholder="请输入您的部门！"/>
                            )}
                            </FormItem>

                    <FormItem {...formItemLayout} label = "添加管理员"  hasFeedback>
                        {getFieldDecorator('addmember', {
                            rules:[{
                                required:true,message:'请添加您的管理员！'
                            }]
                        })(
                            <Input placeholder="请添加您的管理员！"/>
                        )}
                        </FormItem>

                    <FormItem {...formItemLayout} label="重置密码" hasFeedback>
                        {getFieldDecorator('resetcode',{
                            rules:[{required:true,message:'请输入重置密码'}]
                        })(
                            <Input placeholder="请输入重置密码！"/>
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="解除违约" hasFeedback>
                        {getFieldDecorator('removebefore',{
                            rules:[{required:true,message:'请输入解除违约'}]
                        })(
                            <Input type="textarea" rows={3} placeholder="请输入解除违约!"/>
                        )}
                    </FormItem>

                    <FormItem {...formItemLayout} label="预约管理" hasFeedback>
                        {getFieldDecorator('Bookingmanagement',{
                            rules:[{required:true,message:'请输入预约管理'}]
                        })(
                            <Input type="textarea" rows={3} placeholder="请预约管理!"/>
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
AddUsermanage = Form.create()(AddUsermanage); //解决了getFieldDecorator无法定义;

export default AddUsermanage;
