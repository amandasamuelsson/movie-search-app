import { Layout, Col, Row } from 'antd';
import React, { CSSProperties } from 'react'; 
import ErrorBoundary from '../ErrorBoundary';
import TableSearchResults from '../searchPage/TableSearchresults';
import SearchInput from './SearchInput';
import WelcomeTitle from './Titel';

export interface MovieItem {
    key: string;
    title: string;
    year: string;
}
interface State {
    movieItems?: MovieItem[];
}
class WelcomeView extends React.Component<State> {

    state: State = {
        movieItems: []
    }

    handleSearch = (movieItems: MovieItem[]) => {
        this.setState({ movieItems: movieItems })
    }

    render() {
        return (
            <Layout style={layoutStyle}>
                <WelcomeTitle 
                    data={this.state.movieItems}
                />
                <Row>
                    <Col span={24}>
                        <SearchInput
                            handleSearch={this.handleSearch}
                        />
                    </Col>
                </Row>
                <ErrorBoundary>
                    <TableSearchResults
                        data={this.state.movieItems}
                    />      
                </ErrorBoundary>
            </Layout>
        )
    }
}

export default WelcomeView; 

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