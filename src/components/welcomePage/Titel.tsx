import { Row, Col } from 'antd';
import Layout from 'antd/lib/layout/layout';
import React, { CSSProperties } from 'react'; 
import TableSearchResults from '../searchPage/TableSearchresults';
import SearchInput from './SearchInput';

export interface MovieItem {
    key: string;
    title: string;
    imdbScore: string;
}
interface State {
    movieItems?: MovieItem[];
}

class WelcomeTitle extends React.Component<State> {

    state: State = {
        movieItems: []
    }

    handleSearch = (movieItems: MovieItem[]) => {
        this.setState({ movieItems: movieItems })
    }

    render() {
        return(
            <Layout style={layoutStyle}> 
                <Row>
                    <Col span={24}>
                        <h1 style={headline}>Welcome to your favourite movie search app!</h1>
                        <h3 style={tagline}>Search for movies, see the details and rating, add them to your watchlist.</h3> 
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <SearchInput 
                        handleSearch={this.handleSearch}/>
                    </Col>
                </Row>
                <TableSearchResults
                data={this.state.movieItems}/>
            </Layout>
        )
    }
}

const layoutStyle: CSSProperties = {
    backgroundImage: 'url(https://github.com/amandasamuelsson/movie-search-app/blob/master/src/assets/background.png?raw=true)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    width: '100%',
    height: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    marginTop: '-6rem'
    
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

export default WelcomeTitle; 