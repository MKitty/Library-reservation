/**
 * Created by
 */
import React from 'react';
import {Row, Col, Card, Tabs,Button,Modal} from 'antd';
import BreadcrumbCustom from '../BreadcrumbCustom';
import Draggable from 'react-draggable';
import secondcode from '../../style/imgs/alert-weixin.png';
function confirm() {
  Modal.confirm({
    content: <img src={secondcode} alt="头像" />,
    okText: '关闭',
    cancelText: '取消',
  });
}
class RuleSetcode extends React.Component {


  render() {
    return (
    <div>

      <div>
          <Button type="primary" onClick={confirm} style ={{float:"left",marginRight:"10px"}}>编辑好了自动生成</Button>

      </div>

      <style>
        {`
        .ant-modal-content{background-color: rgba(255,255,255,0); box-shadow: 0 0px 0px rgba(0, 0, 0, 0.15);}
        .ant-modal-footer {
            border-top: none;
            padding: 10px 16px;
            text-align: right;
        }

           `}</style>
    </div>)
  }
}

export default RuleSetcode;
