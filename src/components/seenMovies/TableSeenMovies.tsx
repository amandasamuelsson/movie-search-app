import React, { CSSProperties } from 'react';
import { Table, Space, Row, Col } from 'antd';
import { EyeFilled, DeleteFilled } from '@ant-design/icons';
import { Link } from 'react-router-dom';


const columns = [
  {
    title: 'Titel',
    dataIndex: 'title',
    key: 'title',
    render: (text: string, record: any) => <Link to={'/movie/' + record.key}><a style={titleStyle}>{text}</a></Link>,
  },
  {
    title: 'Year',
    dataIndex: 'year',
    key: 'year',
  },
  {
    title: 'Actions',
    key: 'action',
    render: () => (
      <Space size="middle">
        <a><DeleteFilled style={iconStyle}/></a>
      </Space>
    ),
  },
];

export default function TableSeenMovies() {
  const savedMovies = JSON.parse(localStorage.getItem('moviesSeenList') || '{}');

    return (
        <Row style={tableContainer}>
            <Col span={24}>
                <Table columns={columns} dataSource={savedMovies} pagination={false} />
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