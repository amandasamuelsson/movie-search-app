import React, { CSSProperties } from 'react';
import { Table, Space, Row, Col } from 'antd';
import { PlusCircleFilled, EyeFilled, DeleteFilled } from '@ant-design/icons';


const columns = [
  {
    title: 'Titel',
    dataIndex: 'title',
    key: 'title',
    render: (text: any) => <a>{text}</a>,
  },
  {
    title: 'IMDB Score',
    dataIndex: 'imdbScore',
    key: 'imdbScore',
  },
  {
    title: 'Actions',
    key: 'action',
    render: (text: any, record: any) => (
      <Space size="middle">
        <a><PlusCircleFilled style={iconStyle}/></a>
        <a><EyeFilled style={iconStyle}/></a>
        <a><DeleteFilled style={iconStyle}/></a>
      </Space>
    ),
  },
];

const data = [
  {
    key: '1',
    title: 'Movie Title1',
    imdbScore: '8.9',
  },
  {
    key: '2',
    title: 'Movie Title2',
    imdbScore: '7.4',
  },
  {
    key: '3',
    title: 'Movie Title3',
    imdbScore: '8.4',
  },
];

export default function TableSearchResults() {
    return (
        <Row style={tableContainer}>
            <Col lg={{span: 24}}>
                <Table columns={columns} dataSource={data} />
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