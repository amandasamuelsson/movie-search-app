import React, { CSSProperties } from 'react';
import { Table, Space, Row, Col } from 'antd';
import { PlusCircleFilled, EyeFilled, DeleteFilled } from '@ant-design/icons';
import { MovieItem } from '../welcomePage/Titel';
import { Link } from 'react-router-dom';


const columns = [
  {
    title: 'Titel',
    dataIndex: 'title',
    key: 'title',
    render: (text: string) => <Link to=''><a style={titleStyle}>{text}</a></Link>,
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
      </Space>
    ),
  },
];

interface Props {
  data?: MovieItem[];
}

class TableSearchResults extends React.Component<Props> {
  render() {
    return (
      <Row style={tableContainer}>
          <Col span={24}>
              <Table columns={columns} dataSource={this.props.data} pagination={false} />
          </Col>
      </Row>
    )
  }
}

export default TableSearchResults;

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