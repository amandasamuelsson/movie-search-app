import React, { CSSProperties } from 'react';
import { Input, Space } from 'antd';

const { Search } = Input;

interface Props {
    handleSearch: any;
}
class SearchInput extends React.Component<Props> {
    
    onSearch = async (value: string) => {
        const response = await fetchFromOmdb(value);
        if (response.Response === 'False') {
            return;
        }
        const { Search } = response;
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

// Fetch from api.
async function fetchFromOmdb(value: string) {
    try {
        const url = `http://www.omdbapi.com/?s=${value}&apikey=5063ce0d`;
        const result = await fetch(url);
        const data = await result.json();
        console.log(data);
        return data;
        
    } catch (error) {
        console.log(error);
    }
};