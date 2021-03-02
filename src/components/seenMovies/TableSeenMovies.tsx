import React, { CSSProperties } from 'react';
import { Table, Space, Row, Col } from 'antd';
import { DeleteFilled } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { MovieItem } from '../welcomePage/welcomeView';
import { removeSeenlistItem } from '../localstorageUtils';

interface State {
  seenList?: MovieItem[];
}

type EditableTableProps = Parameters<typeof Table>[0];
type ColumnTypes = Exclude<EditableTableProps['columns'], undefined>;

class TableSeenMovies extends React.Component<State> {
  columns: (ColumnTypes[number])[];
  state: State = {
    seenList: []
  }

  constructor(props: any) {
    super(props);

    this.columns = [
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
            <a><DeleteFilled style={iconStyle} onClick={() => this.handleDelete(record.key)}/></a>
          </Space>
        ),
      },
    ];
  }

  componentDidMount() {
    this.setState({ seenList: JSON.parse(localStorage.getItem('moviesSeenList') as string) || []});
  }

  //Deletes items both in table and in localStorage
  handleDelete = (key: React.Key) => {
    const seenList = [...this.state.seenList || []];
    this.setState({ seenList: seenList.filter(item => item.key !== key) });
    removeSeenlistItem(key as string);
  };

  render() {
    return (
        <Row style={tableContainer}>
            <Col span={24}>
                <Table 
                  columns={this.columns} 
                  dataSource={this.state.seenList} 
                  pagination={false}
                />
            </Col>
        </Row>
    );
  }
}

export default TableSeenMovies;

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