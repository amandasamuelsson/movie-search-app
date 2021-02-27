import { Layout } from 'antd';
import React, { CSSProperties } from 'react';
import TableSearchResults from './TableSearchresults';
import TitleSearch from './TitleSearch';


export default function SearchView() {
    return (
        <Layout style={containerStyle}>
            <TitleSearch/>
            {/* <TableSearchResults/> */}
        </Layout>
    );
}

const containerStyle: CSSProperties = {
    background: 'white',
}