import { Layout } from 'antd';
import React, { CSSProperties } from 'react';
import TableSeenMovies from './TableSeenMovies';
import TitleSeenMovies from './TitleSeenMovies';



export default function SeenMoviesView() {
    return (
        <Layout style={containerStyle}>
            <TitleSeenMovies/>
            <TableSeenMovies/>
        </Layout>
    );
}

const containerStyle: CSSProperties = {
    background: 'white',
}