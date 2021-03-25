import React, { CSSProperties } from 'react';
import { Input, Space } from 'antd';
import axios from 'axios';

const { Search } = Input;

interface Props {
    handleSearch: any;
}
class SearchInput extends React.Component<Props> {
    
    onSearch = async (value: string) => {
        const response = await fetchFromOmdb(value);
        if (!response?.data) {
            return;
        }
        if (response.data.Response === 'False') {
            return;
        }
        const { Search } = response.data;
        const movieItems = Search.map((item: any) => {
            return {
                key: item.imdbID,
                title: item.Title,
                year: item.Year,
            }
        });
        this.props.handleSearch(movieItems);
    }
    render() {
        return (
            <div>
                <Space direction="vertical">
                    <Search 
                        style={searchInput} 
                        placeholder="Search movie" 
                        size="large" 
                        onSearch={this.onSearch} 
                        enterButton 
                    />
                </Space>
            </div>
        );
    }
}

export default SearchInput;

const searchInput: CSSProperties = {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '4rem',
}

// Fetch from api with axios.
async function fetchFromOmdb(value: string) {
    try {
        const url = `http://www.omdbapi.com/?s=${value}&apikey=d9ef535f`;
        const response = await axios.get(url);
        return response;
        
    } catch (error) {
        console.log(error);
    }
};