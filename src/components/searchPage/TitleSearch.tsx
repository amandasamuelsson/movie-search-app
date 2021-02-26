import React, { CSSProperties } from 'react';
import { Row, Col, Layout } from 'antd';


export default function TitleSearch() {

    return (
        <Layout style={titleSearch}>
            <Row>
                <Col span={24}>
                    <h1>Sökfältet injectas här från komponenten SearchInput.tsx</h1>
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