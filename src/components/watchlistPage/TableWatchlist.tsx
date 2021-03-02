import React, { CSSProperties } from 'react';
import { Table, Space, Row, Col } from 'antd';
import { EyeFilled, DeleteFilled } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { handleSeenClick, removeWatchlistItem } from '../localstorageUtils';
import { MovieItem } from '../welcomePage/welcomeView';
interface State {
  watchList?: MovieItem[];
}

type EditableTableProps = Parameters<typeof Table>[0];
type ColumnTypes = Exclude<EditableTableProps['columns'], undefined>;
class TableWatchlist extends React.Component<State> {
  columns: (ColumnTypes[number])[];
  state: State = {
    watchList: []
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
            <a><EyeFilled style={iconStyle} onClick={() => this.handleSeen(record)}/></a>
            <a><DeleteFilled style={iconStyle} onClick={() => this.handleDelete(record.key)}/></a>
          </Space>
        ),
      },
    ];
  }

  componentDidMount() {
    this.setState({ watchList: JSON.parse(localStorage.getItem('moviesWatchList') as string) || []});
  }

  //Deletes items both in table and in localStorage
  handleDelete = (key: React.Key) => {
    const watchList = [...this.state.watchList || []];
    this.setState({ watchList: watchList.filter(item => item.key !== key) });
    removeWatchlistItem(key as string);
  };

  //Moves item to SeenList
  handleSeen = (record: MovieItem) => {
    const watchList = [...this.state.watchList || []];
    this.setState({ watchList: watchList.filter(item => item.key !== record.key) });
    handleSeenClick(record);
    removeWatchlistItem(record.key);
  };
  
  render() {

    return (
      
        <Row style={tableContainer}>
            <Col span={24}>
                <Table 
                  columns={this.columns} 
                  dataSource={this.state.watchList} 
                  pagination={false}
                />
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