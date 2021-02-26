import React, { CSSProperties } from 'react';
import { Table, Space, Row, Col } from 'antd';
import { PlusCircleFilled, EyeFilled, DeleteFilled } from '@ant-design/icons';


const columns = [
  {
    title: 'Titel',
    dataIndex: 'title',
    key: 'title',
    render: (text: string) => <a style={titleStyle}>{text}</a>,
  },
  {
    title: 'IMDB Score',
    dataIndex: 'imdbScore',
    key: 'imdbScore',
  },
  {
    title: 'Actions',
    key: 'action',
    render: () => (
      <Space size="middle">
        <a><PlusCircleFilled style={iconStyle}/></a>
        <a><EyeFilled style={iconStyle}/></a>
        {/* <a><DeleteFilled style={iconStyle}/></a> */}
      </Space>
    ),
  },
];

const data = [
  {
    key: '1',
    title: 'The Lord of the Rings: The Two Towers (2002)',
    imdbScore: '8.9',
  },
  {
    key: '2',
    title: 'The Lord of the Rings: The Return of the King (2003)',
    imdbScore: '7.4',
  },
  {
    key: '3',
    title: 'The Lord of the Rings: The Fellowship of the Ring (2001)',
    imdbScore: '8.4',
  },
];

export default function TableSearchResults() {
    return (
        <Row style={tableContainer}>
            <Col span={24}>
                <Table columns={columns} dataSource={data} pagination={false} />
            </Col>
        </Row>
    );
}

const tableContainer: CSSProperties = {
    margin: '3rem',
}

const iconStyle: CSSProperties = {
    color: 'grey',
    fontSize: '1.1rem',
}

const titleStyle: CSSProperties = {
    color: '#564b60',
}