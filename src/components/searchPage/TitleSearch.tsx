import React, { CSSProperties } from 'react';
import { Row, Col, Layout } from 'antd';
import { Input, Space } from 'antd';


const { Search } = Input;

export default function TitleSearch() {
    const onSearch = (value: String) => console.log(value);


    return (
        <Layout style={titleSearch}>
            <Row>
                <Col span={24}>
                <div>
                    <Space direction="vertical">
                        <Search style={searchInput} placeholder="Search for a movie" onSearch={onSearch} enterButton />
                    </Space>
                </div>  
                </Col>
            </Row>
        </Layout>
    );
}

const titleSearch: CSSProperties = {
    backgroundImage: 'url(https://github.com/amandasamuelsson/movie-search-app/blob/master/src/assets/background.png?raw=true)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '25rem',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    padding: '2rem',
}

const searchInput: CSSProperties = {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
}