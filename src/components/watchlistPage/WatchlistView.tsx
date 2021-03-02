import { Layout } from 'antd';
import React, { CSSProperties } from 'react';
import ErrorBoundary from '../ErrorBoundary';
import TableWatchlist from './TableWatchlist';
import TitleWatchlist from './TitelWatchlist';



export default function WatchlistView() {
    return (
        
        <ErrorBoundary>
            <Layout style={containerStyle}>
                <TitleWatchlist/>
                <TableWatchlist/>
            </Layout>
        </ErrorBoundary>
        
    );
}

const containerStyle: CSSProperties = {
    background: 'white',
}