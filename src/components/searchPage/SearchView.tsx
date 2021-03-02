import { Layout } from 'antd';
import React, { CSSProperties } from 'react';
import ErrorBoundary from '../ErrorBoundary';
import TableSearchResults from './TableSearchresults';
import TitleSearch from './TitleSearch';


export default function SearchView() {
    return (
        
        <ErrorBoundary>
            <Layout style={containerStyle}>
                <TitleSearch/>
                {/* <TableSearchResults/> */}
            </Layout>
        </ErrorBoundary>
    );
}

const containerStyle: CSSProperties = {
    background: 'white',
}