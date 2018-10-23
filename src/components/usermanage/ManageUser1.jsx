import React from 'react';
import { Table,Button,Input,Icon,Popconfirm,Alert } from 'antd';
import AddUser from './AddUser.jsx';
import UserDetails from './UserDetails.jsx';
import ChangeUser from './ChangeUser.jsx';
import BreadcrumbCustom from '../BreadcrumbCustom';

class ExampleTable extends React.Component {
    constructor(props) {//   构造函数
        super(props);
        this.state = {
            dataSource:[
                { key: 1, nid:1, name: '裴亚楠', gender:'女' , age: 22, schoolname: '重邮', description: '长提好看，有气质，身材好',major:'计算机'},
                { key: 2, nid:2, name: '裴亚楠1', gender:'女' , age: 22, schoolname: '重邮1', description: '长提好看，有气质，身材好',major:'计算机1'},
                { key: 6, nid:6,name: '裴亚楠2', gender:'女' , age: 22, schoolname: '重邮2', description: '长提好看，有气质，身材好',major:'计算机2'},
                { key: 4, nid:4, name: '裴亚楠3', gender:'女' , age: 22, schoolname: '重邮3', description: '长提好看，有气质，身材好',major:'计算机3'},
                { key: 5, nid:5, name: '裴亚楠4', gender:'女' , age: 22, schoolname: '重邮4', description: '长提好看，有气质，身材好',major:'计算机4'}
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
            { title: '编号', dataIndex: 'nid', key: 'nid' ,width:'8%'},
            { title: '姓名', dataIndex: 'name', key: 'name' ,width:'15%'},
            { title: '性别', dataIndex: 'gender', key: 'gender' ,width:'10%'},
            { title: '年龄', dataIndex: 'age', key: 'age',width:'15%', },//render: (text, record, index) => (Math.floor(record.age/10))*10+"多岁"},
            { title: '学校', dataIndex: 'schoolname', key: 'schoolname',width:'15%' },

            { title: '标签', dataIndex: 'description', key: 'description' ,width:'20%'},
            { title: '专业', dataIndex: 'major', key: 'schoolname',width:'15%' },

            { title: '操作', dataIndex: '', key: 'operation', width:'15%',render: (text,record,index)=>(

                <span>
                     <Popconfirm title="删除不可恢复，你确定要删除吗?" >
                                <a title="用户删除"  className="mgl10"onClick={this.onDelete.bind(this,index)}>
                                    <Icon type="delete"/></a>
                     </Popconfirm>
                    <span className="ant-divider"/>
                    <UserDetails className="user_details"  pass={record}/>
                    <ChangeUser className="user_details"  pass={record}/>
                </span>
            ) },
        ];
        }

    appendPerson(event){//得到子元素传过来的值
        let array = [];
        let count = 0;
        this.state.dataSource.forEach(function (element) {
            Object.keys(element).some(function (key) {
                if (key === 'nid') {
                    count++;
                    array[count] = element.nid
                }
            })
        })
        let sortData =array.sort();//对遍历得到的数组进行排序
        let MaxData = sortData[(this.state.dataSource.length)-1]//取最后一位下标的值
        event.key=MaxData+1;
        event.nid = MaxData+1;
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
            <BreadcrumbCustom first="座位预约" second="预约设置2" />
              <div id="div_left"></div>
              <div id="div-right">
                  <div className="table_oftop">
                      <Button type="primary" icon="search" style={{float:"right",marginLeft:10}}>查询</Button>
                      <Input placeholder="input search text" style ={{width:300,float:"right"}}/>
                      <div id="add_delete">
                      <Button type="primary" style ={{float:"left",marginRight:"10px"}} className="selectedDelete" onClick={this.handleSelectedDelete}>删除所选</Button>
                      <AddUser className="add_user_btn" style ={{float:"left",}} callback={this.appendPerson}/>
                      </div>
                  </div>
                <Table columns={this.columns}
                       dataSource={this.state.dataSource}
                       className="table"
                       rowSelection={rowSelection}
                       scroll ={{y:400}}/>

            </div>
            </div>
        );
    }
}

export default ExampleTable;
