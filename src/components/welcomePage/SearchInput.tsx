import React, { CSSProperties } from 'react';
import { Input, Space } from 'antd';

const { Search } = Input;

interface Props {
    handleSearch: any;
}
class SearchInput extends React.Component<Props> {
    
    onSearch = async (value: string) => {
        const { Search } = await fetchFromOmdb(value);
        const movieItems = Search.map((item: any) => {
            return {
                key: item.imdbID,
                title: item.Title,
                imdbScore: '1',
            }
        });
        this.props.handleSearch(movieItems);
    }
    render() {
        return (
            <div>
                <Space direction="vertical">
                    <Search style={searchInput} placeholder="Search movie" onSearch={this.onSearch} enterButton />
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