import React, { CSSProperties } from 'react';
import { Col, Layout, Row, Image } from 'antd';

const { Content } = Layout;

interface Props {
    imdbId: string;
}

interface State {
    movieDetails: IMovieDetails | undefined;
}

interface IMovieDetails {
    img: string;
    title: string;
    genre: string;
    imdbScore: string;
    overview: string;
    actors: string;
    director: string;
}

class MovieDetails extends React.Component<Props, State> {

    state: State = {
        movieDetails: undefined
    }

    async componentDidMount() {
        const result = await fetchMovieDetails('tt0372784');
        const movieDetails = {
            img: result.Poster,
            title: result.Title,
            genre: result.Genre,
            imdbScore: result.Ratings[0].Value,
            overview: result.Plot,
            actors: result.Actors,
            director: result.Director,
        }
        this.setState({ movieDetails: movieDetails });
    }

    render() {
        return(
            <Layout style={movieDetailContainer}>
                <Content>
                    <Row justify="space-around" align="middle" style={{marginTop:'8rem'}}>
                        <Col lg={{span: 8}}>
                            <Image 
                                src={this.state.movieDetails?.img}
                                width={200}
                                style={poster}>
                            </Image>
                        </Col>
                        <Col lg={{span: 16}}>
                            <h2 style={movieTitle}>{this.state.movieDetails?.title}</h2>
                            <h3 style={genre}>{this.state.movieDetails?.genre}</h3>
                            <h3 style={imdbScore}>{this.state.movieDetails?.imdbScore}</h3>
                            <p>{this.state.movieDetails?.overview}</p>
                            <p>Actors: {this.state.movieDetails?.actors}</p>
                            <p>Director: {this.state.movieDetails?.director}</p>
                        </Col>
                    </Row>
                </Content>
            </Layout>
        );
    }
}

export default MovieDetails;

async function fetchMovieDetails(imdbId: string) {
    try {
        const url = `http://www.omdbapi.com/?i=${imdbId}&apikey=5063ce0d`;
        const result = await fetch(url);
        const data = await result.json();
        console.log(data);
        return data;
        
    } catch (error) {
        console.log(error);
    }
};

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