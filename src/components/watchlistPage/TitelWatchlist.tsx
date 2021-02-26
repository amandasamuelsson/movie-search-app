import React, { CSSProperties } from 'react';
import { Row, Col, Layout } from 'antd';


export default function TitleWatchlist() {

    return (
        <Layout style={titleWatchContainer}>
            <Row>
                <Col span={24}>
                    <h1 style={headline}>My watchlist</h1>
                </Col>
            </Row>
        </Layout>
    );
}

const titleWatchContainer: CSSProperties = {
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

const headline: CSSProperties = {
    color: 'white',
    fontSize: '3rem',
    fontWeight: 'bold',
}