// import React, { CSSProperties } from 'react';
// import { Input, Space } from 'antd';

// const { Search } = Input;
// export default function TitleSearchInput() {


// const onSearch = (value: String) => console.log(value);

// return (
//     <div>
//         <Space direction="vertical">
//             <Search style={searchInput} placeholder="input search text" onSearch={onSearch} enterButton />
//         </Space>
//   </div>
// );
// }

// const searchInput: CSSProperties = {
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: '2rem',
//     background: 'grey'

// }

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
