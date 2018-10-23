
/**
 * Created by .
 */
import React from 'react';
import { Table } from 'antd';

const columns = [{
    title: '序号',
    dataIndex: 'name',
}, {
    title: 'ID',
    dataIndex: 'age',
}, {
    title: '分类',
    dataIndex: 'classfication',
}, {
    title: '学院',
    dataIndex: 'school',
}, {
    title: '专业',
    dataIndex: 'major',
}, {
    title: '学号',
    dataIndex: 'martrikeInnumber',
}, {
    title: '姓名',
    dataIndex: 'compellation',
}, {
    title: '生日',
    dataIndex: 'birthday',
}, {
    title: '头像',
    dataIndex: 'buddha',
}, {
    title: '微信',
    dataIndex: 'weixin',
}, {
    title: '标签1',
    dataIndex: 'tag1',
}, {
    title: '标签2',
    dataIndex: 'tag2',
}
, {
    title: '标签3',
    dataIndex: 'tag3',
}
, {
    title: '标签4',
    dataIndex: 'tag4',
}, {
    title: '学币',
    dataIndex: 'learnc',
}, {
    title: '组别',
    dataIndex: 'group',
}, {
    title: '操作',
    dataIndex: 'operate',
}];

const data = [];
for (let i = 0; i < 46; i++) {
    data.push({
        key: i,
        name: `${i}`,
        age: 32,
        classfication: `本科`,
        school: `自动化学院`,
        major: `物联网工程`,
        martrikeInnumber: `2011202526`,
        compellation: `裴亚楠`,
        birthday: `1996.10.26`,
        buddha: ``,
        weixin: `13695210478`,
        tag1: `长得好看`,
        tag2: `有个性`,
        tag3: `头发长`,
        tag4: `有礼貌`,
        learnc: `50`,
        group: `人工`,
        operate: `修改  删除`,
    });
}

class SelectTable extends React.Component {
    state = {
        selectedRowKeys: [],  // Check here to configure the default column
    };
    onSelectChange = (selectedRowKeys) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
    };
    render() {
        const { selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
            selections: [{
                key: 'odd',
                text: '选择奇数列',
                onSelect: (changableRowKeys) => {
                    let newSelectedRowKeys = [];
                    newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                        if (index % 2 !== 0) {
                            return false;
                        }
                        return true;
                    });
                    this.setState({ selectedRowKeys: newSelectedRowKeys });
                },
            }, {
                key: 'even',
                text: '选择偶数列',
                onSelect: (changableRowKeys) => {
                    let newSelectedRowKeys = [];
                    newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                        if (index % 2 !== 0) {
                            return true;
                        }
                        return false;
                    });
                    this.setState({ selectedRowKeys: newSelectedRowKeys });
                },
            }],
            onSelection: this.onSelection,
        };
        return (
            <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
        );
    }
}

export default SelectTable;
