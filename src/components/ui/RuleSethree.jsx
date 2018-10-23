/**
 * Created by
 */
import React from 'react';
import {Row, Col, Card, Tabs,Button,Modal} from 'antd';
import BreadcrumbCustom from '../BreadcrumbCustom';
import Draggable from 'react-draggable';
import RuleSetcode from './RuleSetcode.jsx';

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
      <BreadcrumbCustom first="座位预约" second="预约设置3"/>
      <Tabs defaultActiveKey="2" onChange={callback}>

        <TabPane tab="1楼 暂不开放" disabled="disabled"  key="1">

          <Row className="gutter-main" gutter={24}>
          <Col className="gutter-row" md={24}>
              <div className="gutter-box">

                          <span className="disnone">x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</span>
                          <Row>
                              <Col span={20}>
                                    <Col className="t4" span={4}>
                                      <Draggable onDrag={this.handleDrag} {...dragHandlers}>
                                          <Card bordered={false} className={'dragDemo'}>
                                              <div>
                                              <span className="disnone">x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</span>

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

                                              </div>
                                          </Card>
                                      </Draggable>
                                    </Col>
                                    <Col className="t4" span={4}>
                                      <Draggable onDrag={this.handleDrag} {...dragHandlers}>
                                          <Card bordered={false} className={'dragDemo'}>
                                              <div>
                                              <span className="disnone">x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</span>

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

                                              </div>
                                          </Card>
                                      </Draggable>
                                    </Col>
                                    <Col className="t4" span={4}>
                                      <Draggable onDrag={this.handleDrag} {...dragHandlers}>
                                          <Card bordered={false} className={'dragDemo'}>
                                              <div>
                                              <span className="disnone">x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</span>

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

                                              </div>
                                          </Card>
                                      </Draggable>
                                    </Col>
                                    <Col className="t4" span={4}>
                                      <Draggable onDrag={this.handleDrag} {...dragHandlers}>
                                          <Card bordered={false} className={'dragDemo'}>
                                              <div>
                                              <span className="disnone">x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</span>

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

                                              </div>
                                          </Card>
                                      </Draggable>
                                    </Col>
                                    <Col className="t4" span={4}>
                                      <Draggable onDrag={this.handleDrag} {...dragHandlers}>
                                          <Card bordered={false} className={'dragDemo'}>
                                              <div>
                                              <span className="disnone">x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</span>

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

                                              </div>
                                          </Card>
                                      </Draggable>
                                    </Col>
                                    <Col className="t4" span={4}>
                                      <Draggable onDrag={this.handleDrag} {...dragHandlers}>
                                          <Card bordered={false} className={'dragDemo'}>
                                              <div>
                                              <span className="disnone">x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</span>

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

                                              </div>
                                          </Card>
                                      </Draggable>
                                    </Col>
                                    <Col className="t4" span={4}>
                                      <Draggable onDrag={this.handleDrag} {...dragHandlers}>
                                          <Card bordered={false} className={'dragDemo'}>
                                              <div>
                                              <span className="disnone">x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</span>

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

                                              </div>
                                          </Card>
                                      </Draggable>
                                    </Col>
                                    <Col className="t4" span={4}>
                                      <Draggable onDrag={this.handleDrag} {...dragHandlers}>
                                          <Card bordered={false} className={'dragDemo'}>
                                              <div>
                                              <span className="disnone">x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</span>

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

                                              </div>
                                          </Card>
                                      </Draggable>
                                    </Col>
                                    <Col className="t4" span={4}>
                                      <Draggable onDrag={this.handleDrag} {...dragHandlers}>
                                          <Card bordered={false} className={'dragDemo'}>
                                              <div>
                                              <span className="disnone">x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</span>

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

                                              </div>
                                          </Card>
                                      </Draggable>
                                    </Col>
                                    <Col className="t4" span={4}>
                                      <Draggable onDrag={this.handleDrag} {...dragHandlers}>
                                          <Card bordered={false} className={'dragDemo'}>
                                              <div>
                                              <span className="disnone">x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</span>

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

                                              </div>
                                          </Card>
                                      </Draggable>
                                    </Col>

                                </Col>

                                <Col className="trightm" span={4}>
                                  <Col  className="t4 rot180" span={24}>
                                    <Draggable  onDrag={this.handleDrag} {...dragHandlers}>
                                        <Card bordered={false} className={'dragDemo'}>
                                            <div className="t4all">
                                                <span className="disnone">x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</span>
                                                  <Col className="t8" span={8}>
                                                     <Col span={20}>A</Col>
                                                     <Col className="twhite" span={4}>&nbsp;</Col>
                                                  </Col>
                                                   <Col className="twhite" span={8}></Col>
                                                   <Col className="t8" span={8}>B</Col>
                                                   <Col span={24} className="t24">001</Col>
                                                   <Col className="t8" span={8}>
                                                      <Col span={20}>C</Col>
                                                      <Col className="twhite" span={4}>&nbsp;</Col>
                                                   </Col>
                                                    <Col className="twhite"  span={8}></Col>
                                                    <Col className="t8" span={8}>D</Col>

                                            </div>
                                        </Card>
                                    </Draggable>
                                  </Col>
                                  <Col  className="t4 rot180" span={24}>
                                    <Draggable  onDrag={this.handleDrag} {...dragHandlers}>
                                        <Card bordered={false} className={'dragDemo'}>
                                            <div className="t4all">
                                                <span className="disnone">x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</span>
                                                  <Col className="t8" span={8}>
                                                     <Col span={20}>A</Col>
                                                     <Col className="twhite" span={4}>&nbsp;</Col>
                                                  </Col>
                                                   <Col className="twhite" span={8}></Col>
                                                   <Col className="t8" span={8}>B</Col>
                                                   <Col span={24} className="t24">001</Col>
                                                   <Col className="t8" span={8}>
                                                      <Col span={20}>C</Col>
                                                      <Col className="twhite" span={4}>&nbsp;</Col>
                                                   </Col>
                                                    <Col className="twhite"  span={8}></Col>
                                                    <Col className="t8" span={8}>D</Col>

                                            </div>
                                        </Card>
                                    </Draggable>
                                  </Col>
                                </Col>
                          </Row>
                          <div className="rightdownbutton">
                              <Button className="userm">有人</Button>
                              <div style={{clear:'both'}}></div>
                              <Button className="free">空闲</Button>
                          </div>
              </div>
              <br/>
              <div className="suremain">
                <Button type="primary">确定生成</Button>
                <Button className="reset">空闲</Button>
              </div>
          </Col>

          </Row>
        </TabPane>
        <TabPane tab="2楼 178/96"  key="2">

          <Row className="gutter-main" gutter={24}>
          <Col className="gutter-row" md={24}>
              <div className="gutter-box">

                          <span className="disnone">x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</span>
                          <Row>
                              <Col span={20}>
                                    <Col className="t4" span={4}>
                                      <Draggable onDrag={this.handleDrag} {...dragHandlers}>
                                          <Card bordered={false} className={'dragDemo'}>
                                              <div>
                                              <span className="disnone">x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</span>

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

                                              </div>
                                          </Card>
                                      </Draggable>
                                    </Col>
                                    <Col className="t4" span={4}>
                                      <Draggable onDrag={this.handleDrag} {...dragHandlers}>
                                          <Card bordered={false} className={'dragDemo'}>
                                              <div>
                                              <span className="disnone">x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</span>

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

                                              </div>
                                          </Card>
                                      </Draggable>
                                    </Col>
                                    <Col className="t4" span={4}>
                                      <Draggable onDrag={this.handleDrag} {...dragHandlers}>
                                          <Card bordered={false} className={'dragDemo'}>
                                              <div>
                                              <span className="disnone">x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</span>

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

                                              </div>
                                          </Card>
                                      </Draggable>
                                    </Col>
                                    <Col className="t4" span={4}>
                                      <Draggable onDrag={this.handleDrag} {...dragHandlers}>
                                          <Card bordered={false} className={'dragDemo'}>
                                              <div>
                                              <span className="disnone">x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</span>

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

                                              </div>
                                          </Card>
                                      </Draggable>
                                    </Col>
                                    <Col className="t4" span={4}>
                                      <Draggable onDrag={this.handleDrag} {...dragHandlers}>
                                          <Card bordered={false} className={'dragDemo'}>
                                              <div>
                                              <span className="disnone">x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</span>

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

                                              </div>
                                          </Card>
                                      </Draggable>
                                    </Col>
                                    <Col className="t4" span={4}>
                                      <Draggable onDrag={this.handleDrag} {...dragHandlers}>
                                          <Card bordered={false} className={'dragDemo'}>
                                              <div>
                                              <span className="disnone">x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</span>

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

                                              </div>
                                          </Card>
                                      </Draggable>
                                    </Col>
                                    <Col className="t4" span={4}>
                                      <Draggable onDrag={this.handleDrag} {...dragHandlers}>
                                          <Card bordered={false} className={'dragDemo'}>
                                              <div>
                                              <span className="disnone">x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</span>

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

                                              </div>
                                          </Card>
                                      </Draggable>
                                    </Col>
                                    <Col className="t4" span={4}>
                                      <Draggable onDrag={this.handleDrag} {...dragHandlers}>
                                          <Card bordered={false} className={'dragDemo'}>
                                              <div>
                                              <span className="disnone">x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</span>

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

                                              </div>
                                          </Card>
                                      </Draggable>
                                    </Col>
                                    <Col className="t4" span={4}>
                                      <Draggable onDrag={this.handleDrag} {...dragHandlers}>
                                          <Card bordered={false} className={'dragDemo'}>
                                              <div>
                                              <span className="disnone">x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</span>

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

                                              </div>
                                          </Card>
                                      </Draggable>
                                    </Col>
                                    <Col className="t4" span={4}>
                                      <Draggable onDrag={this.handleDrag} {...dragHandlers}>
                                          <Card bordered={false} className={'dragDemo'}>
                                              <div>
                                              <span className="disnone">x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</span>

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

                                              </div>
                                          </Card>
                                      </Draggable>
                                    </Col>

                                </Col>

                                <Col className="trightm" span={4}>
                                  <Col  className="t4 rot180" span={24}>
                                    <Draggable  onDrag={this.handleDrag} {...dragHandlers}>
                                        <Card bordered={false} className={'dragDemo'}>
                                            <div className="t4all">
                                                <span className="disnone">x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</span>
                                                  <Col className="t8" span={8}>
                                                     <Col span={20}>A</Col>
                                                     <Col className="twhite" span={4}>&nbsp;</Col>
                                                  </Col>
                                                   <Col className="twhite" span={8}></Col>
                                                   <Col className="t8" span={8}>B</Col>
                                                   <Col span={24} className="t24">001</Col>
                                                   <Col className="t8" span={8}>
                                                      <Col span={20}>C</Col>
                                                      <Col className="twhite" span={4}>&nbsp;</Col>
                                                   </Col>
                                                    <Col className="twhite"  span={8}></Col>
                                                    <Col className="t8" span={8}>D</Col>

                                            </div>
                                        </Card>
                                    </Draggable>
                                  </Col>
                                  <Col  className="t4 rot180" span={24}>
                                    <Draggable  onDrag={this.handleDrag} {...dragHandlers}>
                                        <Card bordered={false} className={'dragDemo'}>
                                            <div className="t4all">
                                                <span className="disnone">x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</span>
                                                  <Col className="t8" span={8}>
                                                     <Col span={20}>A</Col>
                                                     <Col className="twhite" span={4}>&nbsp;</Col>
                                                  </Col>
                                                   <Col className="twhite" span={8}></Col>
                                                   <Col className="t8" span={8}>B</Col>
                                                   <Col span={24} className="t24">001</Col>
                                                   <Col className="t8" span={8}>
                                                      <Col span={20}>C</Col>
                                                      <Col className="twhite" span={4}>&nbsp;</Col>
                                                   </Col>
                                                    <Col className="twhite"  span={8}></Col>
                                                    <Col className="t8" span={8}>D</Col>

                                            </div>
                                        </Card>
                                    </Draggable>
                                  </Col>
                                </Col>
                          </Row>
                          <div className="rightdownbutton">
                              <Button className="userm">有人</Button>
                              <div style={{clear:'both'}}></div>
                              <Button className="free">空闲</Button>
                          </div>
              </div>
              <br/>
              <div className="suremain">
                <Button type="primary">确定生成</Button>
                <Button className="reset">空闲</Button>
              </div>
          </Col>

          </Row>
        </TabPane>
        <TabPane tab="3楼 178/60" key="3">

          <Row className="gutter-main" gutter={24}>
          <Col className="gutter-row" md={24}>
              <div className="gutter-box">

                          <span className="disnone">x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</span>
                          <Row>
                              <Col span={20}>
                                    <Col className="t4" span={4}>
                                      <Draggable onDrag={this.handleDrag} {...dragHandlers}>
                                          <Card bordered={false} className={'dragDemo'}>
                                              <div>
                                              <span className="disnone">x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</span>

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

                                              </div>
                                          </Card>
                                      </Draggable>
                                    </Col>
                                    <Col className="t4" span={4}>
                                      <Draggable onDrag={this.handleDrag} {...dragHandlers}>
                                          <Card bordered={false} className={'dragDemo'}>
                                              <div>
                                              <span className="disnone">x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</span>

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

                                              </div>
                                          </Card>
                                      </Draggable>
                                    </Col>
                                    <Col className="t4" span={4}>
                                      <Draggable onDrag={this.handleDrag} {...dragHandlers}>
                                          <Card bordered={false} className={'dragDemo'}>
                                              <div>
                                              <span className="disnone">x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</span>

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

                                              </div>
                                          </Card>
                                      </Draggable>
                                    </Col>
                                    <Col className="t4" span={4}>
                                      <Draggable onDrag={this.handleDrag} {...dragHandlers}>
                                          <Card bordered={false} className={'dragDemo'}>
                                              <div>
                                              <span className="disnone">x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</span>

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

                                              </div>
                                          </Card>
                                      </Draggable>
                                    </Col>
                                    <Col className="t4" span={4}>
                                      <Draggable onDrag={this.handleDrag} {...dragHandlers}>
                                          <Card bordered={false} className={'dragDemo'}>
                                              <div>
                                              <span className="disnone">x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</span>

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

                                              </div>
                                          </Card>
                                      </Draggable>
                                    </Col>
                                    <Col className="t4" span={4}>
                                      <Draggable onDrag={this.handleDrag} {...dragHandlers}>
                                          <Card bordered={false} className={'dragDemo'}>
                                              <div>
                                              <span className="disnone">x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</span>

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

                                              </div>
                                          </Card>
                                      </Draggable>
                                    </Col>
                                    <Col className="t4" span={4}>
                                      <Draggable onDrag={this.handleDrag} {...dragHandlers}>
                                          <Card bordered={false} className={'dragDemo'}>
                                              <div>
                                              <span className="disnone">x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</span>

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

                                              </div>
                                          </Card>
                                      </Draggable>
                                    </Col>
                                    <Col className="t4" span={4}>
                                      <Draggable onDrag={this.handleDrag} {...dragHandlers}>
                                          <Card bordered={false} className={'dragDemo'}>
                                              <div>
                                              <span className="disnone">x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</span>

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

                                              </div>
                                          </Card>
                                      </Draggable>
                                    </Col>
                                    <Col className="t4" span={4}>
                                      <Draggable onDrag={this.handleDrag} {...dragHandlers}>
                                          <Card bordered={false} className={'dragDemo'}>
                                              <div>
                                              <span className="disnone">x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</span>

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

                                              </div>
                                          </Card>
                                      </Draggable>
                                    </Col>
                                    <Col className="t4" span={4}>
                                      <Draggable onDrag={this.handleDrag} {...dragHandlers}>
                                          <Card bordered={false} className={'dragDemo'}>
                                              <div>
                                              <span className="disnone">x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</span>

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

                                              </div>
                                          </Card>
                                      </Draggable>
                                    </Col>

                                </Col>

                                <Col className="trightm" span={4}>
                                  <Col  className="t4 rot180" span={24}>
                                    <Draggable  onDrag={this.handleDrag} {...dragHandlers}>
                                        <Card bordered={false} className={'dragDemo'}>
                                            <div className="t4all">
                                                <span className="disnone">x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</span>
                                                  <Col className="t8" span={8}>
                                                     <Col span={20}>A</Col>
                                                     <Col className="twhite" span={4}>&nbsp;</Col>
                                                  </Col>
                                                   <Col className="twhite" span={8}></Col>
                                                   <Col className="t8" span={8}>B</Col>
                                                   <Col span={24} className="t24">001</Col>
                                                   <Col className="t8" span={8}>
                                                      <Col span={20}>C</Col>
                                                      <Col className="twhite" span={4}>&nbsp;</Col>
                                                   </Col>
                                                    <Col className="twhite"  span={8}></Col>
                                                    <Col className="t8" span={8}>D</Col>

                                            </div>
                                        </Card>
                                    </Draggable>
                                  </Col>
                                  <Col  className="t4 rot180" span={24}>
                                    <Draggable  onDrag={this.handleDrag} {...dragHandlers}>
                                        <Card bordered={false} className={'dragDemo'}>
                                            <div className="t4all">
                                                <span className="disnone">x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</span>
                                                  <Col className="t8" span={8}>
                                                     <Col span={20}>A</Col>
                                                     <Col className="twhite" span={4}>&nbsp;</Col>
                                                  </Col>
                                                   <Col className="twhite" span={8}></Col>
                                                   <Col className="t8" span={8}>B</Col>
                                                   <Col span={24} className="t24">001</Col>
                                                   <Col className="t8" span={8}>
                                                      <Col span={20}>C</Col>
                                                      <Col className="twhite" span={4}>&nbsp;</Col>
                                                   </Col>
                                                    <Col className="twhite"  span={8}></Col>
                                                    <Col className="t8" span={8}>D</Col>

                                            </div>
                                        </Card>
                                    </Draggable>
                                  </Col>
                                </Col>
                          </Row>
                          <div className="rightdownbutton">
                              <Button className="userm">有人</Button>
                              <div style={{clear:'both'}}></div>
                              <Button className="free">空闲</Button>
                          </div>
              </div>
              <br/>
              <div className="suremain">
                <Button type="primary">确定生成</Button>
                <Button className="reset">空闲</Button>
              </div>
          </Col>

          </Row>
        </TabPane>

        <TabPane tab="4楼 200/96" key="4">

          <Row className="gutter-main" gutter={24}>
          <Col className="gutter-row" md={24}>
              <div className="gutter-box">

                          <span className="disnone">x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</span>
                          <Row>
                              <Col span={20}>
                                    <Col className="t4" span={4}>
                                      <Draggable onDrag={this.handleDrag} {...dragHandlers}>
                                          <Card bordered={false} className={'dragDemo'}>
                                              <div>
                                              <span className="disnone">x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</span>

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

                                              </div>
                                          </Card>
                                      </Draggable>
                                    </Col>
                                    <Col className="t4" span={4}>
                                      <Draggable onDrag={this.handleDrag} {...dragHandlers}>
                                          <Card bordered={false} className={'dragDemo'}>
                                              <div>
                                              <span className="disnone">x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</span>

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

                                              </div>
                                          </Card>
                                      </Draggable>
                                    </Col>
                                    <Col className="t4" span={4}>
                                      <Draggable onDrag={this.handleDrag} {...dragHandlers}>
                                          <Card bordered={false} className={'dragDemo'}>
                                              <div>
                                              <span className="disnone">x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</span>

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

                                              </div>
                                          </Card>
                                      </Draggable>
                                    </Col>
                                    <Col className="t4" span={4}>
                                      <Draggable onDrag={this.handleDrag} {...dragHandlers}>
                                          <Card bordered={false} className={'dragDemo'}>
                                              <div>
                                              <span className="disnone">x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</span>

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

                                              </div>
                                          </Card>
                                      </Draggable>
                                    </Col>
                                    <Col className="t4" span={4}>
                                      <Draggable onDrag={this.handleDrag} {...dragHandlers}>
                                          <Card bordered={false} className={'dragDemo'}>
                                              <div>
                                              <span className="disnone">x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</span>

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

                                              </div>
                                          </Card>
                                      </Draggable>
                                    </Col>
                                    <Col className="t4" span={4}>
                                      <Draggable onDrag={this.handleDrag} {...dragHandlers}>
                                          <Card bordered={false} className={'dragDemo'}>
                                              <div>
                                              <span className="disnone">x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</span>

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

                                              </div>
                                          </Card>
                                      </Draggable>
                                    </Col>
                                    <Col className="t4" span={4}>
                                      <Draggable onDrag={this.handleDrag} {...dragHandlers}>
                                          <Card bordered={false} className={'dragDemo'}>
                                              <div>
                                              <span className="disnone">x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</span>

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

                                              </div>
                                          </Card>
                                      </Draggable>
                                    </Col>
                                    <Col className="t4" span={4}>
                                      <Draggable onDrag={this.handleDrag} {...dragHandlers}>
                                          <Card bordered={false} className={'dragDemo'}>
                                              <div>
                                              <span className="disnone">x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</span>

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

                                              </div>
                                          </Card>
                                      </Draggable>
                                    </Col>
                                    <Col className="t4" span={4}>
                                      <Draggable onDrag={this.handleDrag} {...dragHandlers}>
                                          <Card bordered={false} className={'dragDemo'}>
                                              <div>
                                              <span className="disnone">x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</span>

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

                                              </div>
                                          </Card>
                                      </Draggable>
                                    </Col>
                                    <Col className="t4" span={4}>
                                      <Draggable onDrag={this.handleDrag} {...dragHandlers}>
                                          <Card bordered={false} className={'dragDemo'}>
                                              <div>
                                              <span className="disnone">x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</span>

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

                                              </div>
                                          </Card>
                                      </Draggable>
                                    </Col>

                                </Col>

                                <Col className="trightm" span={4}>
                                  <Col  className="t4 rot180" span={24}>
                                    <Draggable  onDrag={this.handleDrag} {...dragHandlers}>
                                        <Card bordered={false} className={'dragDemo'}>
                                            <div className="t4all">
                                                <span className="disnone">x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</span>
                                                  <Col className="t8" span={8}>
                                                     <Col span={20}>A</Col>
                                                     <Col className="twhite" span={4}>&nbsp;</Col>
                                                  </Col>
                                                   <Col className="twhite" span={8}></Col>
                                                   <Col className="t8" span={8}>B</Col>
                                                   <Col span={24} className="t24">001</Col>
                                                   <Col className="t8" span={8}>
                                                      <Col span={20}>C</Col>
                                                      <Col className="twhite" span={4}>&nbsp;</Col>
                                                   </Col>
                                                    <Col className="twhite"  span={8}></Col>
                                                    <Col className="t8" span={8}>D</Col>

                                            </div>
                                        </Card>
                                    </Draggable>
                                  </Col>
                                  <Col  className="t4 rot180" span={24}>
                                    <Draggable  onDrag={this.handleDrag} {...dragHandlers}>
                                        <Card bordered={false} className={'dragDemo'}>
                                            <div className="t4all">
                                                <span className="disnone">x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</span>
                                                  <Col className="t8" span={8}>
                                                     <Col span={20}>A</Col>
                                                     <Col className="twhite" span={4}>&nbsp;</Col>
                                                  </Col>
                                                   <Col className="twhite" span={8}></Col>
                                                   <Col className="t8" span={8}>B</Col>
                                                   <Col span={24} className="t24">001</Col>
                                                   <Col className="t8" span={8}>
                                                      <Col span={20}>C</Col>
                                                      <Col className="twhite" span={4}>&nbsp;</Col>
                                                   </Col>
                                                    <Col className="twhite"  span={8}></Col>
                                                    <Col className="t8" span={8}>D</Col>

                                            </div>
                                        </Card>
                                    </Draggable>
                                  </Col>
                                </Col>
                          </Row>
                          <div className="rightdownbutton">
                              <Button className="userm">有人</Button>
                              <div style={{clear:'both'}}></div>
                              <Button className="free">空闲</Button>
                          </div>
              </div>
              <br/>
              <div className="suremain">
                <Button type="primary">确定生成</Button>
                <Button className="reset">空闲</Button>
              </div>
          </Col>

          </Row>
        </TabPane>
      </Tabs>
      <RuleSetcode/>
      <style>
        {`
       .rightdownbutton{position: absolute;;top:60%;right:1%;}
          .rot180{
            transform: rotate(90deg);
            -o-transform: rotate(90deg);
            -webkit-transform: rotate(90deg);
            -moz-transform: rotate(90deg);
            filter:progid:DXImageTransform.Microsoft.BasicImage(Rotation=2);
            }
            .trightm .rot180:nth-of-type(2){margin:-60% 0 0 0}
        .t4{margin:0 1% 0 0}
        .t4 .t8{background:#EEE;color:#000;font-size:1rem}
        .t24{background:#EEE;color:#000;margin:10px 0;padding:15% 0;font-size:1.5rem}
        .t4all{margin:100% 0 0 0;max-width: 170px}
        .twhite{background-color:#fff}
        .suremain{margin:0 0 0 30%}
        .suremain Button{padding:5px 40px;width:200px}
        .userm{float:right;margin-right:10px;background: #2a4a57;color:#fff}
        .free{float:right;margin:10px;background:#eee;}
        .reset{margin:10px;background:#ccc;color:#2a4a57}
        .ant-layout-content{margin-top: 20px!important}
        .dragDemo {
            height: 400px;
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
          .gutter-box{border:2px solid #cacaca;}
          .disnone{display: none}
          .floor-font{position: absolute;top: 50px;left: 44%;color: #000;font-size: 2rem;}
          .clear{clear:both}

           `}</style>
    </div>)
  }
}

export default RuleSethree;
