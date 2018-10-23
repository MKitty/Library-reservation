/**
 * Created by
 */
import React from 'react';
import {Row, Col, Card, Tabs,Button} from 'antd';
import BreadcrumbCustom from '../BreadcrumbCustom';
import Draggable from 'react-draggable';
import FLOOR from '../../style/imgs/floor-title-bg.png';
const TabPane = Tabs.TabPane;
function callback(key) {
  console.log(key);
}
class RuleSethree extends React.Component {
  state = {
    activeDrags: 0,
    deltaPosition: {
      x: 0,
      y: 0
    },
    controlledPosition: {
      x: -400,
      y: 200
    }
  };
  onStart = () => {
    this.setState({
      activeDrags: ++this.state.activeDrags
    });
  };
  onStop = () => {
    this.setState({
      activeDrags: --this.state.activeDrags
    });
  };
  handleDrag = (e, ui) => {
    const {x, y} = this.state.deltaPosition;
    this.setState({
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY
      }
    });
  };

  render() {
    const dragHandlers = {
      onStart: this.onStart,
      onStop: this.onStop
    };
    const {deltaPosition} = this.state;
    return (<div className="gutter-example button-demo" style={{
        backgroundColor: '#fff',
        padding: '10px 10px 100px 10px'
      }}>
      <BreadcrumbCustom first="座位预约" second="预约设置2"/>
      <Tabs defaultActiveKey="2" onChange={callback}>
        <TabPane tab="1楼 暂不开放" disabled="disabled"  key="1">

          <Row className="gutter-main" gutter={16}>
          <Col className="gutter-row" md={4}>
              <div className="gutter-box">
                  <Draggable onDrag={this.handleDrag} {...dragHandlers}>
                      <Card bordered={false} className={'dragDemo'} style={{
                          backgroundColor: '#6ea4bc',paddingTop: '40%'}}>
                          <div>
                          <span className="disnone">x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</span>
                          <Row>
                            <Col span={4}>col-6</Col>
                            <Col span={4}>col-6</Col>
                            <Col span={4}>col-6</Col>
                            <Col span={4}>col-6</Col>
                            <Col span={4}>col-6</Col>
                            <Col span={4}>col-6</Col>
                          </Row>
                          </div>
                      </Card>
                  </Draggable>
              </div>
          </Col>
          <Col className="gutter-row" md={24}>
              <div className="gutter-box">
                  <Draggable onDrag={this.handleDrag} {...dragHandlers}>
                      <Card bordered={false} className={'dragDemo'}>
                          <div>
                          <span className="disnone">x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</span>
                            <Row>
                              <Col span={4}>col-6</Col>
                              <Col span={4}>col-6</Col>
                              <Col span={4}>col-6</Col>
                              <Col span={4}>col-6</Col>
                              <Col span={4}>col-6</Col>
                              <Col span={4}>col-6</Col>
                            </Row>
                          </div>
                      </Card>
                  </Draggable>
              </div>
          </Col>
          <Col className="gutter-row" md={8}>
              <div className="gutter-box">
                  <Draggable onDrag={this.handleDrag} {...dragHandlers}>
                      <Card bordered={false} className={'dragDemo'} style={{
                          backgroundColor: '#EEEEEE',height: '150px'}}>
                          <div>
                          <span className="disnone">x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</span>
                          <p className="room-tittle room-b">A306</p>
                          <p className="room-b font-1">（余0）</p>
                          </div>
                      </Card>
                  </Draggable>
              </div>
          </Col>


          <Col className="gutter-row" md={15}>
              <div className="gutter-box">
                  <Draggable onDrag={this.handleDrag} {...dragHandlers}>
                      <Card bordered={false} className={'dragDemo'} style={{
                          height: '200px',
                          margin: '0 20% 0 5% '
                        }}>
                          <div>
                          <span className="disnone">x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</span>
                           <img src={FLOOR} alt='中间'/>
                           <div className="floor-font"><span>2nd</span><br/><span>Floor</span></div>
                           <div className="clear"></div>
                          </div>
                      </Card>
                  </Draggable>
              </div>
          </Col>
          <Col className="gutter-row" md={8}>
              <div className="gutter-box">
                  <Draggable onDrag={this.handleDrag} {...dragHandlers}>
                      <Card bordered={false} className={'dragDemo'} style={{
                          backgroundColor: '#EEEEEE',height: '150px'}}>
                          <div>
                          <span className="disnone">x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</span>
                          <p className="room-tittle room-b">A307</p>
                          <p className="room-b font-1">（余0）</p>
                          </div>
                      </Card>
                  </Draggable>
              </div>
          </Col>
          <Col className="gutter-row" md={8}>
              <div className="gutter-box">
                  <Draggable onDrag={this.handleDrag} {...dragHandlers}>
                      <Card bordered={false} className={'dragDemo'} style={{
                          backgroundColor: '#EEEEEE',height: '150px'}}>
                          <div>
                          <span className="disnone">x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</span>
                          <p className="room-tittle room-b">A308</p>
                          <p className="room-b font-1">（余0）</p>
                          </div>
                      </Card>
                  </Draggable>
              </div>
          </Col>
          <Col className="gutter-row" md={4}>
              <div className="gutter-box">
                  <Draggable onDrag={this.handleDrag} {...dragHandlers}>
                      <Card bordered={false} className={'dragDemo'} style={{
                      backgroundColor: '#EEEEEE',
                      height: '350px',
                      marginTop: '-180px'}}>
                          <div>
                          <span className="disnone">x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</span>
                          <p className="room-tittle room-b">A309</p>
                          <p className="room-b font-1">（余0）</p>
                          </div>
                      </Card>
                  </Draggable>
              </div>
          </Col>

          </Row>
        </TabPane>
        <TabPane tab="2楼 178/96"  key="2">

          <Row className="gutter-main" gutter={24}>
          <Col className="gutter-row" md={24}>
              <div className="gutter-box">
                  <Draggable onDrag={this.handleDrag} {...dragHandlers}>
                      <Card bordered={false} className={'dragDemo'}>
                          <div>
                          <span className="disnone">x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</span>
                          <Row>
                          <Col span={20}>
                            <Col className="tall" span={24}>
                              <Col className="t4" span={4}>
                                <Col className="t8" span={8}>
                                   <Col span={20}>A</Col>
                                   <Col className="twhite" span={4}>&nbsp;</Col>
                                </Col>
                                 <Col className="t8" span={8}>
                                    <Col span={20}>B</Col>
                                    <Col className="twhite" span={4}>&nbsp;</Col>
                                 </Col>
                                 <Col className="t8" span={8}>C</Col>
                                 <Col span={24} className="t24">001</Col>
                                 <Col className="t8" span={8}>
                                    <Col span={20}>D</Col>
                                    <Col className="twhite" span={4}>&nbsp;</Col>
                                 </Col>
                                  <Col className="t8" span={8}>
                                     <Col span={20}>E</Col>
                                     <Col className="twhite" span={4}>&nbsp;</Col>
                                  </Col>
                                  <Col className="t8" span={8}>F</Col>
                              </Col>
                              <Col className="t4" span={4}>
                                <Col className="t8" span={8}>
                                   <Col span={20}>A</Col>
                                   <Col className="twhite" span={4}>&nbsp;</Col>
                                </Col>
                                 <Col className="t8" span={8}>
                                    <Col span={20}>B</Col>
                                    <Col className="twhite" span={4}>&nbsp;</Col>
                                 </Col>
                                 <Col className="t8" span={8}>C</Col>
                                 <Col span={24} className="t24">001</Col>
                                 <Col className="t8" span={8}>
                                    <Col span={20}>D</Col>
                                    <Col className="twhite" span={4}>&nbsp;</Col>
                                 </Col>
                                  <Col className="t8" span={8}>
                                     <Col span={20}>E</Col>
                                     <Col className="twhite" span={4}>&nbsp;</Col>
                                  </Col>
                                  <Col className="t8" span={8}>F</Col>
                              </Col>
                              <Col className="t4" span={4}>
                                <Col className="t8" span={8}>
                                   <Col span={20}>A</Col>
                                   <Col className="twhite" span={4}>&nbsp;</Col>
                                </Col>
                                 <Col className="t8" span={8}>
                                    <Col span={20}>B</Col>
                                    <Col className="twhite" span={4}>&nbsp;</Col>
                                 </Col>
                                 <Col className="t8" span={8}>C</Col>
                                 <Col span={24} className="t24">001</Col>
                                 <Col className="t8" span={8}>
                                    <Col span={20}>D</Col>
                                    <Col className="twhite" span={4}>&nbsp;</Col>
                                 </Col>
                                  <Col className="t8" span={8}>
                                     <Col span={20}>E</Col>
                                     <Col className="twhite" span={4}>&nbsp;</Col>
                                  </Col>
                                  <Col className="t8" span={8}>F</Col>
                              </Col>
                              <Col className="t4" span={4}>
                                <Col className="t8" span={8}>
                                   <Col span={20}>A</Col>
                                   <Col className="twhite" span={4}>&nbsp;</Col>
                                </Col>
                                 <Col className="t8" span={8}>
                                    <Col span={20}>B</Col>
                                    <Col className="twhite" span={4}>&nbsp;</Col>
                                 </Col>
                                 <Col className="t8" span={8}>C</Col>
                                 <Col span={24} className="t24">001</Col>
                                 <Col className="t8" span={8}>
                                    <Col span={20}>D</Col>
                                    <Col className="twhite" span={4}>&nbsp;</Col>
                                 </Col>
                                  <Col className="t8" span={8}>
                                     <Col span={20}>E</Col>
                                     <Col className="twhite" span={4}>&nbsp;</Col>
                                  </Col>
                                  <Col className="t8" span={8}>F</Col>
                              </Col>
                              <Col className="t4" span={4}>
                              <Col className="t8" span={8}>
                                 <Col span={20}>A</Col>
                                 <Col className="twhite" span={4}>&nbsp;</Col>
                              </Col>
                               <Col className="t8" span={8}>
                                  <Col span={20}>B</Col>
                                  <Col className="twhite" span={4}>&nbsp;</Col>
                               </Col>
                               <Col className="t8" span={8}>C</Col>
                               <Col span={24} className="t24">001</Col>
                               <Col className="t8" span={8}>
                                  <Col span={20}>D</Col>
                                  <Col className="twhite" span={4}>&nbsp;</Col>
                               </Col>
                                <Col className="t8" span={8}>
                                   <Col span={20}>E</Col>
                                   <Col className="twhite" span={4}>&nbsp;</Col>
                                </Col>
                                <Col className="t8" span={8}>F</Col>
                                </Col>
                            </Col>
                            <Col className="tall" span={24}>
                              <Col className="t4" span={4}>
                                <Col className="t8" span={8}>
                                   <Col span={20}>A</Col>
                                   <Col className="twhite" span={4}>&nbsp;</Col>
                                </Col>
                                 <Col className="t8" span={8}>
                                    <Col span={20}>B</Col>
                                    <Col className="twhite" span={4}>&nbsp;</Col>
                                 </Col>
                                 <Col className="t8" span={8}>C</Col>
                                 <Col span={24} className="t24">001</Col>
                                 <Col className="t8" span={8}>
                                    <Col span={20}>D</Col>
                                    <Col className="twhite" span={4}>&nbsp;</Col>
                                 </Col>
                                  <Col className="t8" span={8}>
                                     <Col span={20}>E</Col>
                                     <Col className="twhite" span={4}>&nbsp;</Col>
                                  </Col>
                                  <Col className="t8" span={8}>F</Col>
                              </Col>
                              <Col className="t4" span={4}>
                                <Col className="t8" span={8}>
                                   <Col span={20}>A</Col>
                                   <Col className="twhite" span={4}>&nbsp;</Col>
                                </Col>
                                 <Col className="t8" span={8}>
                                    <Col span={20}>B</Col>
                                    <Col className="twhite" span={4}>&nbsp;</Col>
                                 </Col>
                                 <Col className="t8" span={8}>C</Col>
                                 <Col span={24} className="t24">001</Col>
                                 <Col className="t8" span={8}>
                                    <Col span={20}>D</Col>
                                    <Col className="twhite" span={4}>&nbsp;</Col>
                                 </Col>
                                  <Col className="t8" span={8}>
                                     <Col span={20}>E</Col>
                                     <Col className="twhite" span={4}>&nbsp;</Col>
                                  </Col>
                                  <Col className="t8" span={8}>F</Col>
                              </Col>
                              <Col className="t4" span={4}>
                                <Col className="t8" span={8}>
                                   <Col span={20}>A</Col>
                                   <Col className="twhite" span={4}>&nbsp;</Col>
                                </Col>
                                 <Col className="t8" span={8}>
                                    <Col span={20}>B</Col>
                                    <Col className="twhite" span={4}>&nbsp;</Col>
                                 </Col>
                                 <Col className="t8" span={8}>C</Col>
                                 <Col span={24} className="t24">001</Col>
                                 <Col className="t8" span={8}>
                                    <Col span={20}>D</Col>
                                    <Col className="twhite" span={4}>&nbsp;</Col>
                                 </Col>
                                  <Col className="t8" span={8}>
                                     <Col span={20}>E</Col>
                                     <Col className="twhite" span={4}>&nbsp;</Col>
                                  </Col>
                                  <Col className="t8" span={8}>F</Col>
                              </Col>
                              <Col className="t4" span={4}>
                                <Col className="t8" span={8}>
                                   <Col span={20}>A</Col>
                                   <Col className="twhite" span={4}>&nbsp;</Col>
                                </Col>
                                 <Col className="t8" span={8}>
                                    <Col span={20}>B</Col>
                                    <Col className="twhite" span={4}>&nbsp;</Col>
                                 </Col>
                                 <Col className="t8" span={8}>C</Col>
                                 <Col span={24} className="t24">001</Col>
                                 <Col className="t8" span={8}>
                                    <Col span={20}>D</Col>
                                    <Col className="twhite" span={4}>&nbsp;</Col>
                                 </Col>
                                  <Col className="t8" span={8}>
                                     <Col span={20}>E</Col>
                                     <Col className="twhite" span={4}>&nbsp;</Col>
                                  </Col>
                                  <Col className="t8" span={8}>F</Col>
                              </Col>
                              <Col className="t4" span={4}>
                              <Col className="t8" span={8}>
                                 <Col span={20}>A</Col>
                                 <Col className="twhite" span={4}>&nbsp;</Col>
                              </Col>
                               <Col className="t8" span={8}>
                                  <Col span={20}>B</Col>
                                  <Col className="twhite" span={4}>&nbsp;</Col>
                               </Col>
                               <Col className="t8" span={8}>C</Col>
                               <Col span={24} className="t24">001</Col>
                               <Col className="t8" span={8}>
                                  <Col span={20}>D</Col>
                                  <Col className="twhite" span={4}>&nbsp;</Col>
                               </Col>
                                <Col className="t8" span={8}>
                                   <Col span={20}>E</Col>
                                   <Col className="twhite" span={4}>&nbsp;</Col>
                                </Col>
                                <Col className="t8" span={8}>F</Col>
                                </Col>
                            </Col>
                          </Col>
                            <Col span={4}>
                                <Col className="t44" span={4}>
                                  <Col className="t44" span={4}>
                                    C
                                  </Col>
                                </Col>
                                <Col span={16}>
                                </Col>
                                <Col className="t44" span={4}>
                                  C
                                </Col>
                            </Col>
                          </Row>
                          <div className="suremain">
                            <Button type="primary">确定生成</Button>
                            <Button className="reset">空闲</Button>

                          </div>
                          <div>
                            <Button className="userm">有人</Button>
                            <div style={{clear:'both'}}></div>
                            <Button className="free">空闲</Button>
                        </div>
                          </div>
                      </Card>
                  </Draggable>
              </div>
          </Col>

          </Row>
        </TabPane>
        <TabPane tab="3楼 178/60" key="3">

          <Row className="gutter-main" gutter={16}>
          <Col className="gutter-row" md={4}>
              <div className="gutter-box">
                  <Draggable onDrag={this.handleDrag} {...dragHandlers}>
                      <Card bordered={false} className={'dragDemo'} style={{
                          backgroundColor: '#6ea4bc',paddingTop: '40%'}}>
                          <div>
                          <span className="disnone">x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</span>
                          <p className="room-tittle">C302</p>
                          <p className="room-yellow">（余321）</p>
                          </div>
                      </Card>
                  </Draggable>
              </div>
          </Col>
          <Col className="gutter-row" md={8}>
              <div className="gutter-box">
                  <Draggable onDrag={this.handleDrag} {...dragHandlers}>
                      <Card bordered={false} className={'dragDemo'} style={{
                          backgroundColor: '#EEEEEE',height: '150px'}}>
                          <div>
                          <span className="disnone">x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</span>
                          <p className="room-tittle room-b">A305</p>
                          <p className="room-b font-1">（余0）</p>
                          </div>
                      </Card>
                  </Draggable>
              </div>
          </Col>
          <Col className="gutter-row" md={8}>
              <div className="gutter-box">
                  <Draggable onDrag={this.handleDrag} {...dragHandlers}>
                      <Card bordered={false} className={'dragDemo'} style={{
                          backgroundColor: '#EEEEEE',height: '150px'}}>
                          <div>
                          <span className="disnone">x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</span>
                          <p className="room-tittle room-b">A306</p>
                          <p className="room-b font-1">（余0）</p>
                          </div>
                      </Card>
                  </Draggable>
              </div>
          </Col>


          <Col className="gutter-row" md={15}>
              <div className="gutter-box">
                  <Draggable onDrag={this.handleDrag} {...dragHandlers}>
                      <Card bordered={false} className={'dragDemo'} style={{
                          height: '200px',
                          margin: '0 20% 0 5% '
                        }}>
                          <div>
                          <span className="disnone">x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</span>
                           <img src={FLOOR} alt='中间'/>
                           <div className="floor-font"><span>2nd</span><br/><span>Floor</span></div>
                           <div className="clear"></div>
                          </div>
                      </Card>
                  </Draggable>
              </div>
          </Col>
          <Col className="gutter-row" md={8}>
              <div className="gutter-box">
                  <Draggable onDrag={this.handleDrag} {...dragHandlers}>
                      <Card bordered={false} className={'dragDemo'} style={{
                          backgroundColor: '#EEEEEE',height: '150px'}}>
                          <div>
                          <span className="disnone">x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</span>
                          <p className="room-tittle room-b">A307</p>
                          <p className="room-b font-1">（余0）</p>
                          </div>
                      </Card>
                  </Draggable>
              </div>
          </Col>
          <Col className="gutter-row" md={8}>
              <div className="gutter-box">
                  <Draggable onDrag={this.handleDrag} {...dragHandlers}>
                      <Card bordered={false} className={'dragDemo'} style={{
                          backgroundColor: '#EEEEEE',height: '150px'}}>
                          <div>
                          <span className="disnone">x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</span>
                          <p className="room-tittle room-b">A308</p>
                          <p className="room-b font-1">（余0）</p>
                          </div>
                      </Card>
                  </Draggable>
              </div>
          </Col>
          <Col className="gutter-row" md={4}>
              <div className="gutter-box">
                  <Draggable onDrag={this.handleDrag} {...dragHandlers}>
                      <Card bordered={false} className={'dragDemo'} style={{
                      backgroundColor: '#EEEEEE',
                      height: '350px',
                      marginTop: '-180px'}}>
                          <div>
                          <span className="disnone">x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</span>
                          <p className="room-tittle room-b">A309</p>
                          <p className="room-b font-1">（余0）</p>
                          </div>
                      </Card>
                  </Draggable>
              </div>
          </Col>

          </Row>
        </TabPane>
        <TabPane tab="4楼 200/96" key="4">

          <Row className="gutter-main" gutter={16}>
          <Col className="gutter-row" md={4}>
              <div className="gutter-box">
                  <Draggable onDrag={this.handleDrag} {...dragHandlers}>
                      <Card bordered={false} className={'dragDemo'} style={{
                          backgroundColor: '#6ea4bc',paddingTop: '40%'}}>
                          <div>
                          <span className="disnone">x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</span>
                          <p className="room-tittle">C302</p>
                          <p className="room-yellow">（余321）</p>
                          </div>
                      </Card>
                  </Draggable>
              </div>
          </Col>
          <Col className="gutter-row" md={8}>
              <div className="gutter-box">
                  <Draggable onDrag={this.handleDrag} {...dragHandlers}>
                      <Card bordered={false} className={'dragDemo'} style={{
                          backgroundColor: '#EEEEEE',height: '150px'}}>
                          <div>
                          <span className="disnone">x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</span>
                          <p className="room-tittle room-b">A305</p>
                          <p className="room-b font-1">（余0）</p>
                          </div>
                      </Card>
                  </Draggable>
              </div>
          </Col>
          <Col className="gutter-row" md={8}>
              <div className="gutter-box">
                  <Draggable onDrag={this.handleDrag} {...dragHandlers}>
                      <Card bordered={false} className={'dragDemo'} style={{
                          backgroundColor: '#EEEEEE',height: '150px'}}>
                          <div>
                          <span className="disnone">x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</span>
                          <p className="room-tittle room-b">A306</p>
                          <p className="room-b font-1">（余0）</p>
                          </div>
                      </Card>
                  </Draggable>
              </div>
          </Col>


          <Col className="gutter-row" md={15}>
              <div className="gutter-box">
                  <Draggable onDrag={this.handleDrag} {...dragHandlers}>
                      <Card bordered={false} className={'dragDemo'} style={{
                          height: '200px',
                          margin: '0 20% 0 5% '
                        }}>
                          <div>
                          <span className="disnone">x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</span>
                           <img src={FLOOR} alt='中间'/>
                           <div className="floor-font"><span>2nd</span><br/><span>Floor</span></div>
                           <div className="clear"></div>
                          </div>
                      </Card>
                  </Draggable>
              </div>
          </Col>
          <Col className="gutter-row" md={8}>
              <div className="gutter-box">
                  <Draggable onDrag={this.handleDrag} {...dragHandlers}>
                      <Card bordered={false} className={'dragDemo'} style={{
                          backgroundColor: '#EEEEEE',height: '150px'}}>
                          <div>
                          <span className="disnone">x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</span>
                          <p className="room-tittle room-b">A307</p>
                          <p className="room-b font-1">（余0）</p>
                          </div>
                      </Card>
                  </Draggable>
              </div>
          </Col>
          <Col className="gutter-row" md={8}>
              <div className="gutter-box">
                  <Draggable onDrag={this.handleDrag} {...dragHandlers}>
                      <Card bordered={false} className={'dragDemo'} style={{
                          backgroundColor: '#EEEEEE',height: '150px'}}>
                          <div>
                          <span className="disnone">x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</span>
                          <p className="room-tittle room-b">A308</p>
                          <p className="room-b font-1">（余0）</p>
                          </div>
                      </Card>
                  </Draggable>
              </div>
          </Col>
          <Col className="gutter-row" md={4}>
              <div className="gutter-box">
                  <Draggable onDrag={this.handleDrag} {...dragHandlers}>
                      <Card bordered={false} className={'dragDemo'} style={{
                      backgroundColor: '#EEEEEE',
                      height: '350px',
                      marginTop: '-180px'}}>
                          <div>
                          <span className="disnone">x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</span>
                          <p className="room-tittle room-b">A309</p>
                          <p className="room-b font-1">（余0）</p>
                          </div>
                      </Card>
                  </Draggable>
              </div>
          </Col>

          </Row>
        </TabPane>

      </Tabs>


      <style>
        {`
        .tall:first-child{margin:0}
        .tall{margin:20% 0 0 0}
        .t44{background:#EEE;color:#000;font-size:1rem}
        .t4{margin:0 1% 0 0}
        .t4 .t8{background:#EEE;color:#000;font-size:1rem}
        .t24{background:#EEE;color:#000;margin:10px 0;padding:15% 0;font-size:1.5rem}
        .twhite{background-color:#fff}
        .suremain{margin:0 0 0 10%}
        .suremain Button{padding:5px 40px;width:200px}
        .userm{float:right;margin-right:10px;background: #2a4a57;color:#fff}
        .free{float:right;margin:10px;background:#eee;}
        .reset{margin:10px;background:#ccc;color:#2a4a57}
        .ant-layout-content{border:1px solid #cacaca;margin-top: 20px!important}
        .dragDemo {
            height: 350px;
            color: #fff;
            text-align: center;
            border-radius: 10px;
          }
          .room-tittle {
            font-size: 2rem;
          }
          .room-yellow {
            color: #D6C58B;
            font-size: 1rem;
          }
          .room-b {
            color: #000000;
          }
          .font-1 {
            font-size: 1rem;
          }
          .gutter-main {
            padding:0 0 0 3%;
          }
          .ant-card {
            background: none;
          }
          .disnone{display: none}
          .floor-font{position: absolute;top: 50px;left: 44%;color: #000;font-size: 2rem;}
          .clear{clear:both}

           `}</style>
    </div>)
  }
}

export default RuleSethree;
