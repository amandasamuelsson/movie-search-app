import React, { CSSProperties } from 'react';
import { Col, Layout, Row, Image } from 'antd';
import moviePoster from '../../assets/movie-poster.jpg';

const { Content } = Layout;

export default function MovieDetails() {

    return(
        <Layout style={movieDetailContainer}>
            <Content>
                <Row justify="space-around" align="middle" style={{marginTop:'8rem'}}>
                    <Col lg={{span: 8}}>
                        <Image 
                            src={moviePoster}
                            width={200}
                            style={poster}
                        ></Image>
                    </Col>
                    <Col lg={{span: 16}}>
                        <h2 style={movieTitle}>Lord of the Rings: The fellowship of the ring (2001)</h2>
                        <h3 style={genre}>Adventure, Fantasy</h3>
                        <h3 style={imdbScore}>IMDB:</h3>
                        <p>Overview:
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                            tempor urna a egestas consectetur. Integer at enim rhoncus
                            ligula faucibus porta.</p>
                        <p>Actors: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p>Director: Lorem ipsum</p>
                    </Col>
                </Row>
            </Content>
        </Layout>
    );
}

const movieDetailContainer: CSSProperties = {
    background: '#4a4a49',
    width: '100%',
    height: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    padding: '2rem',

}

const movieTitle: CSSProperties = {
    color: 'white',
    fontWeight: 'bold',
}

const genre: CSSProperties = {
    color: 'white',
}

const imdbScore: CSSProperties = {
    color: 'white',
}

const poster: CSSProperties = {
    marginBottom: '2rem',
}