import { Row, Col } from 'antd';
import Layout from 'antd/lib/layout/layout';
import React, { CSSProperties } from 'react'; 


function WelcomeTitle() {
    return (
        <Layout style={layoutStyle}> 
            <Row>
                <Col span={24}>
                    <h1 style={headline}>Welcome to your favourite movie search app! <br />
                    Search for movies, see the details and rating, add them to your watchlist.</h1> 
                </Col>
            </Row>
        </Layout>
    )
}

const layoutStyle: CSSProperties = {
    backgroundImage: 'url(https://github.com/amandasamuelsson/movie-search-app/blob/master/src/assets/background.png?raw=true)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    padding: '2rem',
    
}

const headline: CSSProperties = {
    color: 'white',
    fontSize: '2rem',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center'
}



export default WelcomeTitle; 