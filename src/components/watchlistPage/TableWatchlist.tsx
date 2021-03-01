import React, { CSSProperties } from 'react';
import { Table, Space, Row, Col, Form } from 'antd';
import { FormInstance } from 'antd/lib/form';
import { EyeFilled, DeleteFilled } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { handleSeenClick, removeWatchlistItem } from '../localstorageUtils';
import { MovieItem } from '../welcomePage/Titel';

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
        <a><DeleteFilled style={iconStyle} onClick={() => removeWatchlistItem(record.key)}/></a>
      </Space>
    ),
  },
];

interface State {
  watchList?: MovieItem[];
}

const EditableContext = React.createContext<FormInstance<any> | null>(null);

interface EditableRowProps {
  index: number;
}

const EditableRow: React.FC<EditableRowProps> = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

type EditableTableProps = Parameters<typeof Table>[0];

interface EditableTableState {
  dataSource: MovieItem[];
  count: number;
}

type ColumnTypes = Exclude<EditableTableProps['columns'], undefined>;

class EditableTable extends React.Component<EditableTableProps, EditableTableState> {
  columns: (ColumnTypes[number])[];

  constructor(props: EditableTableProps) {
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
            <a><EyeFilled style={iconStyle} onClick={() => handleSeenClick(record)}/></a>
            <a><DeleteFilled style={iconStyle} onClick={() => this.handleDelete(record.key)}/></a>
          </Space>
        ),
      },
    ];

    const movieItems = JSON.parse(localStorage.getItem('moviesWatchList') || '[]');
    this.state = {
      dataSource: movieItems,
      count: movieItems.length,
    };
  }

  handleDelete = (key: React.Key) => {
    console.log(key);
    const dataSource = [...this.state.dataSource];
    this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
    removeWatchlistItem(key as string);
  };

  render() {
    const { dataSource } = this.state;
    const components = {
      body: {
        row: EditableRow,
      },
    };
    return (
      <div>
        <Table
          components={components}
          rowClassName={() => 'editable-row'}
          bordered
          dataSource={dataSource}
          columns={this.columns}
        />
      </div>
    );
  }
}

class TableWatchlist extends React.Component<State> {

  state: State = {
    watchList: []
  }

  componentDidMount() {
    this.setState({ watchList: JSON.parse(localStorage.getItem('moviesWatchList') || '[]') });
  }

  render() {
    return (
        <Row style={tableContainer}>
            <Col span={24}>
                <EditableTable columns={columns} pagination={false} />
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