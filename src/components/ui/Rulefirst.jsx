import React from 'react';
import { Table,Button,Input,Icon,Popconfirm,Alert,DatePicker,InputNumber  } from 'antd';
import RulefirstAdd from './RulefirstAdd.jsx';
import RulefirstDetails from './RulefirstDetails.jsx';
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
function onChange(value, dateString) {
  console.log('Selected Time: ', value);
  console.log('Formatted Selected Time: ', dateString);
}

function onOk(value) {
  console.log('onOk: ', value);
}
function onChange(value) {
  console.log('changed', value);
}
class Rulefirst extends React.Component {
    constructor(props) {//   构造函数
        super(props);
        this.state = {
            dataSource:[
                { key: 1, loftid:<Input className="noborder" placeholder="1楼" />,
                readingroom:<Input className="noborder" placeholder="A101" />,
                Unitmodule:<Input className="noborder" placeholder="10人每位" />,
                setaccount:<Input className="noborder" placeholder="10" /> ,
                loftaccount:<InputNumber min={1}  defaultValue={3} onChange={onChange}  />,
                 setol: <Input className="noborder" placeholder="30" /> ,},
                 { key: 2, loftid:<Input className="noborder" placeholder="1楼" />,
                 readingroom:<Input className="noborder" placeholder="A102" />,
                 Unitmodule:<Input className="noborder" placeholder="8人每位" />,
                 setaccount:<Input className="noborder" placeholder="8" /> ,
                  loftaccount:<InputNumber min={1}  defaultValue={1} onChange={onChange}  />,
                  setol:<Input className="noborder" placeholder="8" /> ,},
                  { key: 3, loftid:<Input className="noborder" placeholder="1楼" />,
                  readingroom:<Input className="noborder" placeholder="A102" />,
                  Unitmodule:<Input className="noborder" placeholder="6人每位" />,
                  setaccount:<Input className="noborder" placeholder="6" /> ,
                   loftaccount:<InputNumber min={1}  defaultValue={3} onChange={onChange}  />,
                   setol: <Input className="noborder" placeholder="18" /> ,},
                   { key: 4, loftid:<Input className="noborder" placeholder="1楼" />,
                   readingroom:<Input className="noborder" placeholder="A102" />,
                   Unitmodule:<Input className="noborder" placeholder="4人每位" />,
                   setaccount:<Input className="noborder" placeholder="4" /> ,
                    loftaccount:<InputNumber min={1}  defaultValue={3} onChange={onChange}  />,
                    setol: <Input className="noborder" placeholder="12" /> ,},
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
            { title: '楼层', dataIndex: 'loftid', key: 'loftid' ,width:'8%'},
            { title: '阅览室名称', dataIndex: 'readingroom', key: 'readingroom' ,width:'10%'},
            { title: '单元模块', dataIndex: 'Unitmodule', key: 'Unitmodule' ,width:'15%'},
            { title: '座位数量', dataIndex: 'setaccount', key: 'setaccount' ,width:'10%'},
            { title: '数量', dataIndex: 'loftaccount', key: 'loftaccount' ,width:'15%'},
            { title: '座位总数', dataIndex: 'setol', key: 'setol',width:'15%', },//render: (text, record, index) => (Math.floor(record.age/10))*10+"多岁"},
            { title: '操作', dataIndex: '', key: 'operation', width:'20%',render: (text,record,index)=>(

                <span className="corperation">
                     <Popconfirm title="删除不可恢复，你确定要删除吗?" >
                                <a title="用户删除"  className="mgl10"onClick={this.onDelete.bind(this,index)}>
                                    <Icon type="delete"/></a>
                     </Popconfirm>
                    <span className="ant-divider"/>
                    <RulefirstDetails  className="user_details"  pass={record}/>


                </span>
            ) },
        ];
        }

    appendPerson(event){//得到子元素传过来的值
        let array = [];
        let count = 0;
        this.state.dataSource.forEach(function (element) {
            Object.keys(element).some(function (key) {
                if (key === 'loftid') {
                    count++;
                    array[count] = element.loftid
                }
            })
        })
        let sortData =array.sort();//对遍历得到的数组进行排序
        let MaxData = sortData[(this.state.dataSource.length)-1]//取最后一位下标的值
        event.key=MaxData+1;
        event.loftid = MaxData+1;
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
            <div>
              <div className="calender">
                预约开始时间：<DatePicker className="firstime" showTime format="YYYY-MM-DD HH:mm:ss" placeholder="Select Time" onChange={onChange} onOk={onOk}/>
                座位开放时间：<RangePicker className="firstime" showTime={{ format: 'HH:mm' }} format="YYYY-MM-DD HH:mm" placeholder={['Start Time', 'End Time']} onChange={onChange} onOk={onOk}/>
               </div>
                <div id="div_left"></div>
                <div id="div-right">
                <div className="table_oftop"></div>
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
                      <RulefirstAdd className="add_user_btn" style ={{float:"left",}} callback={this.appendPerson}/>
                      <Button type="primary" style ={{float:"left",margin:"-32px 10px 0 180px",}}>确认生成</Button>


                      </div>
                  </div>
            </div>
              <style>{`
               .firstime{margin:0 5% 20px 0;}
                thead{background-color:#2a4a57}
                .user_details{float:left}
                .user_change{float:left}
                .ant-table table{border:1px solid #e8e8e8; }
                .ant-table-header{background-color:#fff}
                .ant-table table:first-child{border-bottom: none}
                .corperation div{float:left;}
                .corperation div:nth-of-type(2){margin-left: 5%;margin-right: 5%;}
                .ant-table-thead > tr > th{text-align: center;border-collapse: collapse;border:1px solid #e8e8e8;}
                .ant-table-tbody > tr > td {border:1px solid #e8e8e8;padding:0;text-align:center;border-collapse: collapse;}
                .ant-table-tbody > tr > td:last-child{padding:16px}
                .firstime{border: solid 1px #2a4a57;border-radius: 5px}
                .ant-calendar-column-header{background: #f0f2f5;border: solid 1px #2a4a57;}
                .calender{color:#000}
                .ant-table-tbody > tr > td .noborder{border:none;text-align:center;width:100%;height:48px;color:#333}
                .ant-table-tbody > tr > td .noborder:focus {border-color: none;outline: 0;-webkit-box-shadow: 0 0 0 0px rgba(42, 74, 87, 0.2);
                box-shadow: 0 0 0 0px rgba(42, 74, 87, 0.2);border-right-width: none;}
                .ant-table-tbody > tr > td .ant-input-number{width:100%;border:none;padding:16px;height:100%}
                .ant-table-tbody > tr > td .ant-input-number-input{text-align:center;width:100%;height:100%}
                .ant-table-tbody > tr > td input::-webkit-input-placeholder{ /*WebKit browsers*/
                  color:#333;}
                .ant-table-tbody > tr > td input::-moz-input-placeholder{ /*Mozilla Firefox*/
                  color:#333;}
                .ant-table-tbody > tr > td  input::-ms-input-placeholder{ /*Internet Explorer*/
                  color:#333;}
                .ant-table-tbody > tr > td  input::-moz-placeholder{color:#333;}
                .calender .ant-input{width:auto}
              `}</style>
            </div>
        );
    }
}

export default Rulefirst;
