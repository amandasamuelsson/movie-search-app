import React, { CSSProperties } from 'react';
import { Table, Space, Row, Col } from 'antd';
import { EyeFilled, DeleteFilled } from '@ant-design/icons';
import { Link } from 'react-router-dom';

let seenList: any[] = [];

function handleSeenClick(record: any) {
  seenList.push(record)
  localStorage.setItem('moviesSeenlist', JSON.stringify(seenList));
}


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
    render: (record: any) => (
      <Space size="middle">
        <a><EyeFilled style={iconStyle} onClick={() => handleSeenClick(record)}/></a>
        <a><DeleteFilled style={iconStyle}/></a>
      </Space>
    ),
  },
];

class TableWatchlist extends React.Component {
  savedMovies = JSON.parse(localStorage.getItem('moviesWatchlist') || '{}');

  render() {
    return (
        <Row style={tableContainer}>
            <Col span={24}>
                <Table columns={columns} dataSource={this.savedMovies} pagination={false} />
            </Col>
        </Row>
    );
  }
}

export default TableWatchlist;

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