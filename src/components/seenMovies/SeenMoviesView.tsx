import { Layout } from 'antd';
import React, { CSSProperties } from 'react';
import ErrorBoundary from '../ErrorBoundary';
import TableSeenMovies from './TableSeenMovies';
import TitleSeenMovies from './TitleSeenMovies';



export default function SeenMoviesView() {
    return (

        <ErrorBoundary>
            <Layout style={containerStyle}>
                <TitleSeenMovies/>
                <TableSeenMovies/>
            </Layout>
        </ErrorBoundary>
        
    );
}

const containerStyle: CSSProperties = {
    background: 'white',
}