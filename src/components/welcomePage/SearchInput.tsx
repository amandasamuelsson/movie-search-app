import React, { CSSProperties } from 'react';
import { Input, Space } from 'antd';

const { Search } = Input;
export default function SearchInput() {


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
    width: '100%',
    height: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
}

