import { Layout } from 'antd';
import React, { CSSProperties } from 'react';
import ErrorBoundary from '../ErrorBoundary';
import TableSeenMovies from './TableSeenMovies';
import TitleSeenMovies from './TitleSeenMovies';

export default function SeenMoviesView() {
    return (
        <Layout style={containerStyle}>
            <TitleSeenMovies/>
            <ErrorBoundary>
                <TableSeenMovies/>
            </ErrorBoundary>
        </Layout> 
    );
}

const containerStyle: CSSProperties = {
    background: 'white',
}