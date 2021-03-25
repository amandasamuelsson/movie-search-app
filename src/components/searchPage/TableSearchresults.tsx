import React, { CSSProperties } from 'react';
import { Table, Space, Row, Col } from 'antd';
import { PlusCircleFilled, EyeFilled } from '@ant-design/icons';
import { MovieItem } from '../welcomePage/welcomeView';
import { Link } from 'react-router-dom';
import { handleSeenClick, handleWatchClick } from '../localstorageUtils';

const columns = [
  {
    title: 'Titel',
    dataIndex: 'title',
    key: 'title',
    render: (text: string, record: MovieItem) => (
      <Link to={'/movie/' + record.key} style={titleStyle}>{text}</Link>
    ),
  },
  {
    title: 'Year',
    dataIndex: 'year',
    key: 'year',
  },
  {
    title: 'Actions',
    key: 'action',
    render: (record: MovieItem) => (
      <Space size="middle">
        <PlusCircleFilled style={iconStyle} onClick={() => handleWatchClick(record)}/>
        <EyeFilled style={iconStyle} onClick={() => handleSeenClick(record)}/>
      </Space>
    ),
  },
];

interface Props {
  data?: MovieItem[];
}

export default function TableSearchResults(props: Props) {

  if (!props.data?.length) {
    return <div></div>
  }
  
  return(     
    <Row style={tableContainer}>
        <Col span={24}>
            <Table columns={columns} dataSource={props.data} pagination={false} />
        </Col>
    </Row>
  )
}

const tableContainer: CSSProperties = {
    margin: '3rem',
    width: '80%'
}

const iconStyle: CSSProperties = {
    color: 'grey',
    fontSize: '1.1rem',
}

const titleStyle: CSSProperties = {
    color: '#564b60',
}