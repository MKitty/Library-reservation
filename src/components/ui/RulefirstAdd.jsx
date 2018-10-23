import React from 'react';
import {Form,Input,Button,Select,Modal} from 'antd'
const FormItem = Form.Item;
const Option = Select.Option;

class  RulefirstAdd extends React.Component{//在es6中定义一个RulefirstAdd类
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
                    <FormItem {...formItemLayout} label = "楼层"  hasFeedback>
                        {getFieldDecorator('loftid', {
                            rules:[{
                                required:true,message:'请输入您的楼层！'
                            }]
                        })(
                            <Input placeholder="请输入您的楼层！"/>
                        )}
                        </FormItem>
                        <FormItem {...formItemLayout} label = "阅览室名称"  hasFeedback>
                            {getFieldDecorator('readingroom', {
                                rules:[{
                                    required:true,message:'请输入您的阅览室名称！'
                                }]
                            })(
                                <Input placeholder="请输入您的阅览室名称！"/>
                            )}
                            </FormItem>
                            <FormItem {...formItemLayout} label = "单元模块"  hasFeedback>
                                {getFieldDecorator('Unitmodule', {
                                    rules:[{
                                        required:true,message:'请输入您的单元模块！'
                                    }]
                                })(
                                    <Input placeholder="请输入您的单元模块！"/>
                                )}
                                </FormItem>
                                <FormItem {...formItemLayout} label = "数量"  hasFeedback>
                                    {getFieldDecorator('loftaccount', {
                                        rules:[{
                                            required:true,message:'请输入您的数量！'
                                        }]
                                    })(
                                        <Input placeholder="请输入您的数量！"/>
                                    )}
                                    </FormItem>

                    <FormItem {...formItemLayout} label="座位总数" hasFeedback>
                        {getFieldDecorator('setol',{
                            rules:[{required:true,message:'请输入您的座位总数'}]
                        })(
                            <Input placeholder="请输入您的座位总数！"/>
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
RulefirstAdd = Form.create()(RulefirstAdd); //解决了getFieldDecorator无法定义;

export default RulefirstAdd;
