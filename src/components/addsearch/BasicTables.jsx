/**
 * Created by .
 */
import React from 'react';
import { Row, Col, Card } from 'antd';
import BasicTable from './BasicTable';
import SelectTable from './SelectTable';
import SortTable from './SortTable';
import SearchTable from './SearchTable';
import BreadcrumbCustom from '../BreadcrumbCustom';

const BasicTables = () => (
    <div className="gutter-example">
        <BreadcrumbCustom first="用户管理" second="用户清单管理 " />
        <Row gutter={16}>
          <Col className="gutter-row" md={24}>
                <div className="gutter-box">
                    <Card title="用户清单管理" bordered={true}>
                        <BasicTable />
                    </Card>
                </div>
            </Col>

          <Col className="gutter-row" span={10}>
                <div className="gutter-box">
                    <Card title="弹层表单" bordered={false}>
                    </Card>
                </div>
            </Col>
        </Row>
        <Row gutter={16}>
            <Col className="gutter-row" md={24}>
                <div className="gutter-box">
                    <Card title="用户清单管理 " bordered={true}>
                        <SelectTable />
                    </Card>
                </div>
            </Col>
        </Row>
       <Row gutter={16}>
            <Col className="gutter-row" md={12}>
                <div className="gutter-box">
                    <Card title="可控的筛选和排序" bordered={false}>
                        <SortTable />
                    </Card>
                </div>
            </Col>
            <Col className="gutter-row" md={12}>
                <div className="gutter-box">
                    <Card title="自定义筛选" bordered={false}>
                        <SearchTable />
                    </Card>
                </div>
            </Col>
        </Row>
    </div>
);

export default BasicTables;
