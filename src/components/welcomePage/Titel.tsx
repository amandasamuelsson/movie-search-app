import { Row, Col } from 'antd';
import React, { CSSProperties } from 'react'; 
import { MovieItem } from './welcomeView';

interface Props {
    data?: MovieItem[];
  }

export default function WelcomeTitle(props: Props) { 
    
    if (!props.data?.length || false) {    
        return(
            <Row>
                <Col span={24}>
                    <h1 style={headline}>Welcome to your favourite movie search app!</h1>
                    <h3 style={tagline}>Search for movies, see the details and rating, add them to your watchlist.</h3> 
                </Col>
            </Row>
        )
    }
    return <div></div>;    
}

const headline: CSSProperties = {
    color: 'white',
    fontSize: '3rem',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '4rem'
}

const tagline: CSSProperties = {
    color: 'white',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '3.2rem',
}

