import React from 'react';
import { Table,Button,Input,Icon,Popconfirm,Alert,Modal } from 'antd';
import AddUserjrisdiction from './AddUserjrisdiction.jsx';
import UserDetailsjrisdiction from './UserDetailsjrisdiction.jsx';
import ChangeUserjrisdiction from './ChangeUserjrisdiction.jsx';
import BreadcrumbCustom from '../BreadcrumbCustom';
const confirm = Modal.confirm;
function showConfirm() {
  confirm({
    title: '你确定要重置密码?',
    content: '单击OK按钮时，此对话框将在1秒后关闭',
    onOk() {
      return new Promise((resolve, reject) => {
        setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
      }).catch(() => console.log('Oops errors!'));
    },
    onCancel() {},
  });
}
class UserJrisdiction extends React.Component {
    constructor(props) {//   构造函数
        super(props);
        this.state = {
            dataSource:[
                { key: 1, unid:1,userid:20120605,degree:'教职工', name: '裴亚楠',  schoolname: '重邮',major:'计算机',
                schoolnumber:'2013625239',Seatreservation:'冻结',Activateseat:'激活',Speaceservation:"正常",ActivatSpeace:'激活空间'},
                { key: 2, unid:2, userid:20120606,degree:'研究生',name: '裴亚楠1', schoolname: '重邮1', major:'计算机1',
                schoolnumber:'2013625261',Seatreservation:'正常',Activateseat:'',Speaceservation:"正常",ActivatSpeace:'激活空间'},
                { key: 3, unid:3,userid:20120607,degree:'本科',name: '裴亚楠2', schoolname: '重邮2', major:'计算机2',
                  schoolnumber:'2013625230',Seatreservation:'正常',Activateseat:'',Speaceservation:"正常",ActivatSpeace:'激活空间'},
                { key: 4, unid:4, userid:20120608,degree:'教职工',name: '裴亚楠3',schoolname: '重邮3',major:'计算机3',
                schoolnumber:'2013625236',Seatreservation:'正常',Activateseat:'',Speaceservation:"正常",ActivatSpeace:'激活空间'},
                { key: 5, unid:5, userid:20120609,degree:'研究生',name: '裴亚楠4',schoolname: '重邮4', major:'计算机4',
                schoolnumber:'2013625223',Seatreservation:'冻结',Activateseat:'激活',Speaceservation:'正常',ActivatSpeace:'激活空间' }

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
            { title: '序号', dataIndex: 'unid', key: 'unid' ,width:'5%'},
            { title: 'ID', dataIndex: 'userid', key: 'userid' ,width:'6%'},
            { title: '分类', dataIndex: 'degree', key: 'degree' ,width:'8%'},
            { title: '姓名', dataIndex: 'name', key: 'name' ,width:'8%'},
            { title: '学院', dataIndex: 'schoolname', key: 'schoolname',width:'10%' },
            { title: '专业', dataIndex: 'major', key: 'major',width:'10%' },
            { title: '学号', dataIndex: 'schoolnumber', key: 'schoolnumber',width:'10%' },
            { title: '座位预约', dataIndex: 'Seatreservation', key: 'Seatreservation',width:'8%' },
            { title: '激活座位', dataIndex: 'Activateseat', key: 'Activateseat',width:'8%' },
            { title: '空间预约', dataIndex: 'Speaceservation', key: 'Speaceservation',width:'8%' },
            { title: '激活空间', dataIndex: 'ActivatSpeace', key: 'ActivatSpeace',width:'8%' },
            { title: '操作', dataIndex: '', key: 'operation', width:'20%',render: (text,record,index)=>(

                <span className="corperation">
                     <Popconfirm title="删除不可恢复，你确定要删除吗?" >
                                <a title="用户删除"  className="mgl10"onClick={this.onDelete.bind(this,index)}>
                                    <Icon type="delete"/></a>
                     </Popconfirm>
                    <span className="ant-divider"/>

                    <UserDetailsjrisdiction  className="user_details"  pass={record}/>
                    <ChangeUserjrisdiction  className="user_change"  pass={record}/>
                    <Button onClick={showConfirm} style ={{float:"left",marginRight:"10px",background:'none',border: 'none',color: '#2a4a57'}} className="selectedDelete">重置密码</Button>
                </span>
            ) },
        ];
        }

    appendPerson(event){//得到子元素传过来的值
        let array = [];
        let count = 0;
        this.state.dataSource.forEach(function (element) {
            Object.keys(element).some(function (key) {
                if (key === 'unid') {
                    count++;
                    array[count] = element.unid
                }
            })
        })
        let sortData =array.sort();//对遍历得到的数组进行排序
        let MaxData = sortData[(this.state.dataSource.length)-1]//取最后一位下标的值
        event.key=MaxData+1;
        event.unid = MaxData+1;
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
            <BreadcrumbCustom first="用户管理" second="用户权限管理" />
              <div id="div_left">
              </div>
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
                      <AddUserjrisdiction className="add_user_btn" style ={{float:"left",}} callback={this.appendPerson}/>
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
