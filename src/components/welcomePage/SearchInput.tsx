import React, { CSSProperties } from 'react';
import { Input, Space } from 'antd';

const { Search } = Input;

export default function SearchInput() {
    const onSearch = (value: String) => console.log(value);

    return (
        <div>
            <Space direction="vertical">
                <Search style={searchInput} placeholder="Search movie" onSearch={onSearch} enterButton />
            </Space>
        </div>
    );
}

const searchInput: CSSProperties = {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
}

