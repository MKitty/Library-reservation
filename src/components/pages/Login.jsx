/**
 * Created by  2016/6/1
 */
import React from 'react';
import { Form, Icon, Input, Button, Checkbox,Select } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchData, receiveData } from '@/action';
import  Logbg from '../../style/imgs/login-bg.jpg';
import Logbgs from '../../style/imgs/login-logo.png';
const FormItem = Form.Item;

const Option = Select.Option;

function handleChange(value) {
  console.log(`selected ${value}`);
}

const berderStyle = {
  border:'solid 1px #34799b'
}
const bgStyle = {
    backgroundSize: '100% 100%', //记得这里100%
    background: 'url(${Logbg})',
    //或者下面这种也行
}
const bg = {
  background: 'url(${require("../../style/imgs/login-bg.jpg")})',
};


class Login extends React.Component {
    componentWillMount() {
        const { receiveData } = this.props;
        receiveData(null, 'auth');
    }
    componentWillReceiveProps(nextProps) {
        const { auth: nextAuth = {} } = nextProps;
        const { history } = this.props;
        if (nextAuth.data && nextAuth.data.uid) {   // 判断是否登陆
            localStorage.setItem('user', JSON.stringify(nextAuth.data));
            history.push('/');
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                const { fetchData } = this.props;
                if (values.userName === 'admin' && values.password === 'admin') fetchData({funcName: 'admin', stateName: 'auth'});
                if (values.userName === 'guest' && values.password === 'guest') fetchData({funcName: 'guest', stateName: 'auth'});
            }
        });
    };
    gitHub = () => {
        window.location.href = 'https://github.com/login/oauth/authorize?client_id=792cdcd244e98dcd2dee&redirect_uri=http://localhost:3006/&scope=user&state=reactAdmin';
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="login" style={bg}>
                <div className="login-form" >
                    <div className="login-logo">
                        <span className="Logbgs"><img src={Logbgs} class="img-responsive img-circle" alt="test" /></span>
                        <span className="Logbgt">图书馆预约后台管理</span>
                    </div>
                    <Form id="login-F" onSubmit={this.handleSubmit} style={{maxWidth: '300px',marginLeft:'70px'}}>
                        <FormItem className="loginselect" id="boder-3">
                          <Select className="logins" defaultValue="重邮" style={{ width:300,color:'#34799'}} onChange={handleChange}>
                            <Option className="loginopt" value="重邮">重邮</Option>
                            <Option value="重师">重师</Option>
                            <Option value="重大">重大</Option>
                          </Select>
                        </FormItem>

                        <FormItem>
                            {getFieldDecorator('userName', {
                                rules: [{ required: true, message: '请输入用户名!' }],
                            })(
                                <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="管理员输入admin, 游客输入guest" />
                            )}
                        </FormItem>
                        <FormItem >
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: '请输入密码!' }],
                            })(
                                <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="管理员输入admin, 游客输入guest" />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(
                                <Checkbox>记住我</Checkbox>
                            )}
                            <a className="login-form-forgot" href="" style={{float: 'right'}}>忘记密码</a>
                            <Button type="primary" htmlType="submit" className="login-form-button" style={{width: '100%'}}>
                                登录
                            </Button>
                            <p style={{display: 'flex', justifyContent: 'space-between'}}>
                                {/*<a href="">或 现在就去注册!</a>    <a onClick={this.gitHub} ><Icon type="github" />(第三方登录)</a>*/}
                                <a href=""></a>
                                <a onClick={this.weixin} ><Icon type="weixin" />(第三方登录)</a>
                            </p>
                        </FormItem>
                    </Form>
                    <style>
                        {`
                        .ant-select-selection {
                            outline: none;
                            -webkit-user-select: none;
                            -moz-user-select: none;
                            -ms-user-select: none;
                            user-select: none;
                            -webkit-box-sizing: border-box;
                            box-sizing: border-box;
                            display: block;
                            background-color:#faffbd;
                            border-radius: 4px;
                            border: 1px solid #337a9a;
                            border-top-width: 1.02px;
                            -webkit-transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
                            -o-transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
                            transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
                            color: rgba(0, 0, 0, 0.65)
                        }
                        .Logbgs{margin-left:30px;margin-top: 10px}
                        .login .login-form .login-logo {
                            text-align: left;
                            height: 40px;
                            line-height: 40px;
                            cursor: pointer;
                            margin-bottom: 100px;
                        }
                        .ant-select-focused .ant-select-selection, .ant-select-selection:focus, .ant-select-selection:active {
                            border-color: #337a9a;
                            outline: 0;
                            -webkit-box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.2);
                            box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.2);
                            border-right-width: 1px !important;
                        }


                        #login-F.ant-select-selection:hover {
                            border-color: #337a9a;
                            border-right-width: 1px !important;
                        }
                        #login-F ::-webkit-scrollbar-thumb {
                            background-color: #fff;
                        }


                        #login-F .ant-select {
                            font-family: "Monospaced Number", "Chinese Quote", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif;
                            font-size: 12px;
                            line-height: 1.5;
                            color: #337a9a;
                            -webkit-box-sizing: border-box;
                            box-sizing: border-box;
                            margin: 0;
                            padding: 0;
                            list-style: none;
                            display: inline-block;
                            position: relative;
                        }
                        #login-F FormItem{background-color: #fff;margin-top:5px}
                        #login-F .ant-input,#userName {
                            font-family: "Monospaced Number", "Chinese Quote", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif;
                            -webkit-box-sizing: border-box;
                            box-sizing: border-box;
                            margin: 0;
                            padding: 0;
                            list-style: none;
                            position: relative;
                            display: inline-block;
                            padding: 4px 11px;
                            width: 100%;
                            height: 32px;
                            font-size: 12px;
                            line-height: 1.5;
                            color: rgba(0, 0, 0, 0.65);
                            background-color: #FAFFBD;
                            background-image: none;
                            border: 1px solid #337a9a;
                            border-radius: 4px;
                            -webkit-transition: all .3s;
                            -o-transition: all .3s;
                            transition: all .3s;
                        }
                        .ant-checkbox-checked .ant-checkbox-inner, .ant-checkbox-indeterminate .ant-checkbox-inner {
                            background-color: #337a9a;
                            border-color: #337a9a;
                        }
                        .ant-checkbox-wrapper:hover .ant-checkbox-inner, .ant-checkbox:hover .ant-checkbox-inner, .ant-checkbox-input:focus + .ant-checkbox-inner {
                            border-color: #337a9a;
                        }
                        .ant-btn-primary{
                            color: #fff;
                            background-color: #337a9a;
                            border-color:#337a9a;
                        }
                        .ant-btn-primary:hover{
                            color: #fff;
                            background-color: #001529;
                            border-color:#001529;
                        }
                        ::selection {
                            background: #337a9a;
                            color: #fff;
                        }
                        .login .login-form .login-logo span {
                            font-size: 25px;
                            color: #337a9a;
                            vertical-align: text-top;
                        }
                        .Logbgt{margin-top: 30px;margin-left: 15px}
                        `}
                    </style>
                </div>
            </div>

        );
    }
}

const mapStateToPorps = state => {
    const { auth } = state.httpData;
    return { auth };
};
const mapDispatchToProps = dispatch => ({
    fetchData: bindActionCreators(fetchData, dispatch),
    receiveData: bindActionCreators(receiveData, dispatch)
});


export default connect(mapStateToPorps, mapDispatchToProps)(Form.create()(Login));
