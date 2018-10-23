/**
 * Created by .
 */
import React from 'react';
import { Row, Col, Card } from 'antd';
import FixedTable from './FixedTable';
import ExpandedTable from './ExpandedTable';
import EditableTable from './EditableTable';
import BreadcrumbCustom from '../BreadcrumbCustom';

class AdvancedTables extends React.Component {
var UserInfo = React.createClass({
  getInitialState: function() {
    return {name: '', job: '', age: ''}
  },
  getName: function(event) {
    this.setState({name: event.target.value.trim()});
  },
  getJob: function(event) {
    this.setState({job: event.target.value.trim()});
  },
  getAge: function(event) {
    this.setState({age: event.target.value.trim()});
  },
  addUser: function() {
    if (this.state.name === "") {
      alert("名字不能为空");
      return;
    }
    if (this.state.age === "") {
      alert("年龄不能为空");
      return;
    }
    if (this.state.job === "") {
      alert("工作不能为空");
      return;
    }
    var obj = {
      name: this.state.name,
      job: this.state.job,
      age: this.state.age
    };
    this.props.changeUser(obj);
    this.setState({name: '', job: '', age: ''});
  },
  reSetForm: function() {
    this.setState({name: '', job: '', age: ''});
  },
  render: function() {
    return (<div className="info-box">
      <div className="form-group">
        <label>username:</label>
        <inputtype="text"className="form-control"value={this.state.name}onChange={this.getName}/>
      </div>
      <div className="form-group">
        <label>age:</label>
        <inputtype="text"className="form-control"value={this.state.age}onChange={this.getAge}/>
      </div>
      <div className="form-group">
        <label>job:</label>
        <inputtype="text"className="form-control"value={this.state.job}onChange={this.getJob}/>
      </div>
      <buttonclassName="btn btn-primary"onClick={this.addUser}>添加</button>
    <buttonclassName="btn </divbtn-default"onClick={this.reSetForm}style={{marginLeft:'12px'}}>重置</button> >);
  }
});
class Opertionextends
React.Component {
  render() {
    return (<div id="dialog" className="modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <buttontype="button"className="close"data-dismiss="modal"aria-hidden="true">×</button>
              <h4 className="modal-title">{
                  this.props.deleteIndex == -100
                    ? "确认删除全部用户"
                    : "确认删除" + this.props.deleteIndex + "该用户"
                }</h4>
            </div>
            <div className="modal-body">
              <div className="modal-footer">
                <buttontype="button"className="btn btn-default"data-dismiss="modal">取消</button>
                <buttontype="button"data-dismiss="modal"className="btn btn-primary"onClick={this.props.deleteUser.bind(null,this.props.deleteIndex)}>确认</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>)
  }
  hiddeDialog() {
    return "modal"
  }
}

var UserList = React.createClass({
  getInitialState: function() {
    return {getDeleteIndex: -100};
  },
  delete: function() {
    this.props.deleteUser();
  },
  render: function() {
    var aa = this.props.deleteUser;
    var self = this;
    return (<div className="list-box">
      <tableclassName="table table-bordered table-hover">
        <thead>
          <tr>
            <th onClick={this.delete}>Number</th>
            <th>Name</th>
            <th>Age</th>
            <th>Job</th>
            <th>Opertion</th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.userListArr.map(function(user, index) {
              return (<tr key={index}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.job}</td>
                <td>
                  <buttonclassName="btn btn-danger"onClick={self.props.setDeleteIndex.bind(null,index)}data-toggle="modal"data-target="#dialog">删除</button>
                </td>
              </tr>);
            })
          }
          <tr className={self.props.userListArr.length > 0
              ? "table-row"
              : "display-none"}>
            <td colSpan="5" className="text-right">
              <buttonclassName="btn btn-danger"onClick={self.props.setDeleteIndex.bind(null,-100)}data-toggle="modal"data-target="#dialog">全部删除</button>
            </td>
          </tr>
          <tr className={self.props.userListArr.length > 0
              ? "display-none"
              : "table-row"}>
            <td colSpan="5">
              <p className="text-center text-muted">暂无数据...</p>
            </td>
          </tr>
        </tbody>
      </table>
      <OpertiondeleteIndex={self.props.deleteIndex}deleteUser={self.props.deleteUser}/>
    </div>)
  }
});
var UserBox = React.createClass({
  getInitialState: function() {
    return {userListArr: [], msg: '454878748', deleteIndex: -1};
  },
  changeUser: function(user) {
    var old = this.state.userListArr;
    old.push(user)
    this.setState({userListArr: old});
  },
  deleteUser: function(index) {
    if (index > -1) {
      var old = this.state.userListArr;
      old.splice(index, 1)
      this.setState({userListArr: old});
    } else {
      this.deleteAllUser();
    }
    this.defaultIndex();
  },
  defaultIndex: function() {
    this.setState({deleteIndex: -1});
  },
  deleteAllUser: function() {
    this.setState({userListArr: []});
  },
  setDeleteIndex: function(index) {
    this.setState({deleteIndex: index});
  },
  render: function() {
    return (<div>
      <UserInfochangeUser={this.changeUser}/>
      <UserListuserListArr={this.state.userListArr}setDeleteIndex={this.setDeleteIndex}deleteUser={this.deleteUser}deleteIndex={this.state.deleteIndex}/>
    </div>)
  }
});

ReactDOM.render(<UserBox/>, document.getElementById("todolist")) < /script>
}

export default AdvancedTables;
