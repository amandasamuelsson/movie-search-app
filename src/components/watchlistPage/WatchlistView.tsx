import { Layout } from 'antd';
import React, { CSSProperties } from 'react';
import TableWatchlist from './TableWatchlist';
import TitleWatchlist from './TitelWatchlist';



export default function WatchlistView() {
    return (
        <Layout style={containerStyle}>
            <TitleWatchlist/>
            <TableWatchlist/>
        </Layout>
    );
}

const containerStyle: CSSProperties = {
    background: 'white',
}