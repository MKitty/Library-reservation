/**
 * Created by .
 */
import React, { Component } from 'react';
import { Layout } from 'antd';
import { withRouter } from 'react-router-dom';
import { menus } from '../constants/menus';
import SiderMenu from './SiderMenu';
import avater from '../style/imgs/icon_05.png';
const { Sider } = Layout;

class SiderCustom extends Component {
    state = {
        collapsed: false,
        mode: 'inline',
        openKey: '',
        selectedKey: '',
        firstHide: true,        // 点击收缩菜单，第一次隐藏展开子菜单，openMenu时恢复
    };
    componentDidMount() {
        this.setMenuOpen(this.props);
    }
    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        this.onCollapse(nextProps.collapsed);
        this.setMenuOpen(nextProps)
    }
    setMenuOpen = props => {
        const { pathname } = props.location;
        this.setState({
            openKey: pathname.substr(0, pathname.lastIndexOf('/')),
            selectedKey: pathname
        });
    };
    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({
            collapsed,
            firstHide: collapsed,
            mode: collapsed ? 'vertical' : 'inline',
        });
    };
    menuClick = e => {
        this.setState({
            selectedKey: e.key
        });
        console.log(this.state);
        const { popoverHide } = this.props;     // 响应式布局控制小屏幕点击菜单时隐藏菜单操作
        popoverHide && popoverHide();
    };
    openMenu = v => {
        console.log(v);
        this.setState({
            openKey: v[v.length - 1],
            firstHide: false,
        })
    };
    render() {
        return (
            <Sider trigger={null} breakpoint="lg"  collapsed={this.props.collapsed}  style={{ overflowY: 'auto' }}>
                <div className="logo" style={{background:'#2A4A57',height:'auto',}}>
                  <img src={avater} alt="头像" />
                   {/*<div className="account">
                        <div><span>账号：</span><span>201806072361</span></div>
                        <div><span>姓名：</span><span>张三</span></div>
                        <div><span>部门：</span><span>技术部</span></div>
                   </div>*/}


                </div>
                <SiderMenu menus={menus} onClick={this.menuClick} theme="dark" mode="inline" selectedKeys={[this.state.selectedKey]}   openKeys={this.state.firstHide ? null : [this.state.openKey]} onOpenChange={this.openMenu} />
                <style>
                    {`
                    #nprogress .spinner{
                        left: ${this.state.collapsed ? '70px' : '206px'};
                        right: 0 !important;
                    }
                    .ant-layout-sider {
                          -webkit-transition: all .2s;
                          -o-transition: all .2s;
                          transition: all .2s;
                          position: relative;
                          background:#2A4A57;
                          min-width: 0;
                      }
                      .ant-menu-dark, .ant-menu-dark .ant-menu-sub {
                          color: rgba(255, 255, 255, 0.65);
                          background: #2A4A57;
                      }
                      .ant-menu-dark .ant-menu-inline.ant-menu-sub {
                        background:#2A4A57;
                        -webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.45) inset;
                        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.45) inset;
                    }
                      .ant-menu-dark.ant-menu-inline .ant-menu-item-selected {
                          background-color: #DFB786 !important;
                      }
                      .logo{color:#fff;margin-top:30px;}
                      .account{margin-top:20px;}
                    `}
                </style>
            </Sider>
        )
    }
}

export default withRouter(SiderCustom);
