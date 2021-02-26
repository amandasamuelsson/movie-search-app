import React, { CSSProperties } from 'react';
import { Input, Space } from 'antd';

const { Search } = Input;
export default function TitleSearchInput() {


const onSearch = (value: String) => console.log(value);

return (
    <div>
        <Space direction="vertical">
            <Search style={searchInput} placeholder="input search text" onSearch={onSearch} enterButton />
        </Space>
  </div>
);
}

const searchInput: CSSProperties = {
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    background: 'grey'

}

