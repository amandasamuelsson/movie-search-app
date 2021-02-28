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
        <a><EyeFilled style={iconStyle}/></a>
        <a><DeleteFilled style={iconStyle}/></a>
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

export default function TableWatchlist() {
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