import React from 'react';
import { Table,Button,Input,Icon,Popconfirm,Alert,Tabs,Row, Col, Card, Radio} from 'antd';
import { Link } from 'react-router-dom';
import Rulefirst from './Rulefirst.jsx';
import BreadcrumbCustom from '../BreadcrumbCustom';
const TabPane = Tabs.TabPane;

class RuleSetone extends React.Component {
constructor(props) {
    super(props);
    this.newTabIndex = 0;
    const panes = [
        { title: '图书馆1', content: <Rulefirst/>, key: '1' },
        { title: '图书馆2', content: <Rulefirst/>, key: '2' },
        { title: '图书馆3', content: '12354654', key: '3' },
    ];
    this.state = {
        activeKey: panes[0].key,
        panes,
        mode: 'top'
    };
}
callback = (key) => {
    console.log(key);
};
handleModeChange = (e) => {
    const mode = e.target.value;
    this.setState({ mode });
};
onChange = (activeKey) => {
    this.setState({ activeKey });
};
onEdit = (targetKey, action) => {
    this[action](targetKey);
};
add = () => {
    const panes = this.state.panes;
    const inip = <input/>
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({ title:<input/>, content: <Rulefirst/>, key: activeKey });
    this.setState({ panes, activeKey });
};
remove = (targetKey) => {
    let activeKey = this.state.activeKey;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
        if (pane.key === targetKey) {
            lastIndex = i - 1;
        }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (lastIndex >= 0 && activeKey === targetKey) {
        activeKey = panes[lastIndex].key;
    }
    this.setState({ panes, activeKey });
};
    render() {
        //联动选择框

        return (

            <div className="div_body">
            <BreadcrumbCustom first="座位预约管理" second="预约设置1" />
            <div className="gutter-box">
                <Card title="" bordered={false}>
                    <div style={{ marginBottom: 16 }}>
                        <Button className="new-add"  onClick={this.add}>新增图书馆</Button>
                    </div>
                    <Tabs hideAdd onChange={this.onChange} activeKey={this.state.activeKey}
                        type="editable-card"  onEdit={this.onEdit}  >
                        {this.state.panes.map(pane => <TabPane tab={pane.title} key={pane.key}>{pane.content}</TabPane>)}
                    </Tabs>
                </Card>
            </div>



            <div className="clear"> </div>


              <style>{`
              .div_body{background-color: #fff;margin:30px 10px 20px 10px;border-radius: 10px;padding:10px}
                .clear{clear: both;}
                .ant-card-wider-padding .ant-card-body {
                    padding:0;
                }

              .ant-card-body {
                  padding: 0px;
                  zoom: 1;
              }
              .ant-tabs-nav input{border:none;max-width:80px;background-color: #2a4a57}
              .ant-tabs.ant-tabs-card > .ant-tabs-bar .ant-tabs-tab {
                    border: 1px solid #2a4a57;
                    background: #2a4a57;
                  color: #fff;border-radius: 0
                }
              .ant-tabs.ant-tabs-card > .ant-tabs-bar .ant-tabs-tab-active input{background-color:#6ea4bc;border-radius: 0}
              .ant-tabs.ant-tabs-card > .ant-tabs-bar .ant-tabs-tab-active {
                    background: #6ea4bc;
                    border-color: #6ea4bc;
                    color: #fff;
                    padding-bottom: 1px;border-radius: 0
                }
                .new-add{background:#f0f2f5}
                .new-add:hover{background: #2a4a57;color:#fff}
                .ant-tabs.ant-tabs-card > .ant-tabs-bar .ant-tabs-tab .anticon-close {color: #fff;border-radius: 0}
              `}</style>
            </div>
        );
    }
}

export default RuleSetone;
