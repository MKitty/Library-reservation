/**
 * Created by 2018/6/10.
 */
import React from 'react';
import {Row, Col, Card, Tabs} from 'antd';
import Draggable from 'react-draggable';
import FLOOR from '../../style/imgs/floor-title-bg.png';
const TabPane = Tabs.TabPane;
function callback(key) {
  console.log(key);
}
class Drags extends React.Component {
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
        <TabPane tab="2楼 178/96"  key="2">

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
        {
          ` .dragDemo {
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
            padding-left: 20%;
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

export default Drags;
