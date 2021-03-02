import { Layout } from 'antd';
import React, { CSSProperties } from 'react';
import ErrorBoundary from '../ErrorBoundary';
import TableWatchlist from './TableWatchlist';
import TitleWatchlist from './TitelWatchlist';



export default function WatchlistView() {
    return (
        
        <Layout style={containerStyle}>
            <TitleWatchlist/>
            <ErrorBoundary>
                <TableWatchlist/>
            </ErrorBoundary>
        </Layout>
        
    );
}

const containerStyle: CSSProperties = {
    background: 'white',
}