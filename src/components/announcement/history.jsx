import React from 'react';
import { Table,Button,Input,Icon,Popconfirm,Alert } from 'antd';
import AddUserhistory from './AddUserhistory.jsx';
import UserDetailshistory from './UserDetailshistory.jsx';
import ChangeUserhistory from './ChangeUserhistory.jsx';
import BreadcrumbCustom from '../BreadcrumbCustom';

class UserJrisdiction extends React.Component {
    constructor(props) {//   构造函数
        super(props);
        this.state = {
            dataSource:[
                { key: 1, hisid:1,histitle:'金卡活动',promulgator:'小李', promutime: '2018-6-19', promucontent:'小李中了10000w'},
                { key: 2, hisid:2,histitle:'金卡活动',promulgator:'小张', promutime: '2018-6-24', promucontent:'小李中了92542213213w'},
                { key: 3, hisid:3,histitle:'金卡活动',promulgator:'小张', promutime: '2018-6-15', promucontent:'小李中了181712110w'},

            ],
            index : '',
            PersonCount :0,
            selectedRowKeys:[],
            selectedRows:[],
            record : 'abc'
        };
        this.onDelete = this.onDelete.bind(this);//绑定this,声明该方法需要绑定this, 直接在onClick中调用
        this.appendPerson = this.appendPerson.bind(this);
        this.handleSelectedDelete = this.handleSelectedDelete.bind(this);
       this.columns = [
            { title: '序号', dataIndex: 'hisid', key: 'hisid' ,width:'8%'},
            { title: '标题', dataIndex: 'histitle', key: 'histitle' ,width:'20%'},
            { title: '发布者', dataIndex: 'promulgator', key: 'promulgator' ,width:'10%'},
            { title: '发布时间', dataIndex: 'promutime', key: 'promutime' ,width:'10%'},
            { title: '发布内容', dataIndex: 'promucontent', key: 'promucontent' ,width:'30%'},
            { title: '操作', dataIndex: '', key: 'operation', width:'20%',render: (text,record,index)=>(

                <span className="corperation">
                     <Popconfirm title="删除不可恢复，你确定要删除吗?" >
                                <a title="用户删除"  className="mgl10"onClick={this.onDelete.bind(this,index)}>
                                    <Icon type="delete"/></a>
                     </Popconfirm>
                    <span className="ant-divider"/>
                    <UserDetailshistory  className="user_details"  pass={record}/>
                    <ChangeUserhistory  className="user_change"  pass={record}/>
                </span>
            ) },
        ];
        }

    appendPerson(event){//得到子元素传过来的值
        let array = [];
        let count = 0;
        this.state.dataSource.forEach(function (element) {
            Object.keys(element).some(function (key) {
                if (key === 'hisid') {
                    count++;
                    array[count] = element.hisid
                }
            })
        })
        let sortData =array.sort();//对遍历得到的数组进行排序
        let MaxData = sortData[(this.state.dataSource.length)-1]//取最后一位下标的值
        event.key=MaxData+1;
        event.hisid = MaxData+1;
        this.setState({
              dataSource:[...this.state.dataSource,event]
          })

    }

    onDelete(index){
            console.log(index)
            const dataSource = [...this.state.dataSource];
            dataSource.splice(index, 1);//index为获取的索引，后面的 1 是删除几行
            this.setState({ dataSource });
    }

    handleSelectedDelete(){
        if(this.state.selectedRowKeys.length>0){
            console.log(...this.state.selectedRowKeys)
            const dataSource = [...this.state.dataSource]
            dataSource.splice(this.state.selectedRows,this.state.selectedRows.length)
            this.setState({ dataSource });
        }
        else{

        }
    }

    render() {
        //联动选择框
       const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                this.setState({//将选中的id和对象存入state
                        selectedRowKeys:selectedRowKeys,
                        selectedRows:selectedRows
                })
                console.log(selectedRows,selectedRowKeys)
            },
            onSelect: (record, selected, selectedRows) => {
                //console.log( record, ` selected :${selected}`,`selectedRows:${selectedRows}`);
            },
            onSelectAll: (selected, selectedRows, changeRows) => {
                //console.log(selected, selectedRows, changeRows);
            },
            getCheckboxProps: record => ({
                disabled: record.name === 'Disabled User',    // Column configuration not to be checked
            }),
        }
        return (
            <div className="div_body">
            <BreadcrumbCustom first="用户管理" second="用户清单管理" />
              <div id="div_left"></div>
              <div id="div-right">
              <div className="table_oftop">
              <Button type="primary" style ={{float:"right",marginRight:"10px",marginBottom:"10px"}} >导出</Button>

              </div>
              <Table columns={this.columns}
                     dataSource={this.state.dataSource}
                     className="table"
                     rowSelection={rowSelection}
                     scroll ={{y:'auto'}}/>
                  <div className="table_oftop">
                      <Button type="primary" icon="search" style={{float:"right",marginLeft:10}}>查询</Button>
                      <Input placeholder="input search text" style ={{width:300,float:"right"}}/>
                      <div id="add_delete">
                      <Button type="primary" style ={{float:"left",marginRight:"10px"}} className="selectedDelete" onClick={this.handleSelectedDelete}>删除所选</Button>
                      <AddUserhistory className="add_user_btn" style ={{float:"left",}} callback={this.appendPerson}/>
                      </div>
                  </div>

            </div>
              <style>{`
                .div_body{background-color: #fff;margin:30px 10px 10px 10px;border-radius: 10px;padding:10px}

                thead{background-color:#2a4a57}
                .user_details{float:left}
                .user_change{float:left}
                /*.ant-table-thead > tr.ant-table-row-hover > td, .ant-table-tbody > tr.ant-table-row-hover > td, .ant-table-thead > tr:hover > td, .ant-table-tbody > tr:hover > td {
                    background: #2a4a57;
                    color:#fff;
                }
              .ant-table table{border:1px solid #e8e8e8;  border-collapse: separate;
                border-spacing: 0;border-radius:0;}
                */
                .ant-table table{border:1px solid #e8e8e8; }
                .ant-table-header{background-color:#fff}
                .ant-table table:first-child{border-bottom: none}
                .corperation div{float:left;}
                .corperation div:nth-of-type(2){margin-left: 5%;margin-right: 5%;}
                .ant-table-tbody > tr > td{text-align: center;}
                .ant-table-thead > tr > th{text-align: center;}
              `}</style>
            </div>
        );
    }
}

export default UserJrisdiction;
