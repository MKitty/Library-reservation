import React from 'react';
import { Table,Button,Input,Icon,Popconfirm,Alert,Tabs,Row, Col, Card, Radio,  } from 'antd';
import BreadcrumbCustom from '../BreadcrumbCustom';
import { Link } from 'react-router-dom';
const TabPane = Tabs.TabPane;

class RuleSetone extends React.Component {
constructor(props) {
    super(props);
    this.newTabIndex = 0;
    const panes = [
        { title: 'Tab 1', content: <div>12354646</div>, key: '1' },
        { title: 'Tab 2', content: 'Content of Tab Pane 2', key: '2' },
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
    panes.push({ title:<input/>, content: 'New Tab Pane', key: activeKey });
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
            <BreadcrumbCustom first="座位预约" second="预约规则" />
            <div>
              <ul className="ulmain">
                <li>
                 <Link to={'/app/ui/Rules'} style={{color:'#2a4a57'}}>首页</Link>
                </li>
                <li><Link to={'/app/ui/Rules'} style={{color:'#2a4a57'}}>首页</Link></li>
                <li><Link to={'/app/ui/Rules'} style={{color:'#2a4a57'}}>首页</Link></li>
                <li><Link to={'/app/ui/Rules'} style={{color:'#2a4a57'}}>首页</Link></li>
                <li><Link to={'/app/ui/Rules'} style={{color:'#2a4a57'}}>首页</Link></li>
                <li><Link to={'/app/ui/Rules'} style={{color:'#2a4a57'}}>首页</Link></li>
              </ul>
            </div>
            <div className="gutter-box">
                <Card title="带删除和新增" bordered={false}>
                    <div style={{ marginBottom: 16 }}>
                        <Button onClick={this.add}>新增图书馆</Button>
                    </div>
                    <Tabs hideAdd onChange={this.onChange} activeKey={this.state.activeKey}
                        type="editable-card"  onEdit={this.onEdit}  >
                        {this.state.panes.map(pane => <TabPane tab={pane.title} key={pane.key}>{pane.content}</TabPane>)}
                    </Tabs>
                </Card>
            </div>


            <div className="clear"> </div>


              <style>{`
              .div_body{background-color: #fff;margin:30px 10px 10px 10px;border-radius: 10px;padding:10px}
              .ulmain ul,li{list-style: none;float: left;}
              .ulmain ul{overflow-y: scroll;width: expression(childNodes.length * 25%);}
              .ulmain li{width: 25%;}
              .ulmain{width:1200px;}
                .clear{clear: both;}

.ant-btn:hover, .ant-btn:focus, .ant-btn:active, .ant-btn.active {
    background: #2a4a57;
    text-decoration: none;
}

.ant-btn:active, .ant-btn.active {
    color: #fff;
    background-color:  #2a4a57;
    border-color: #152830;
}

.ant-btn:hover, .ant-btn:focus {
    color: #fff;
    background-color: #2a4a57;
    border-color: #405a63;
}
              `}</style>
            </div>
        );
    }
}

export default RuleSetone;
