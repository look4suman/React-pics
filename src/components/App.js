import React from 'react';
import Unsplash from '../api/Unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
    state = {
        images: []
    };

    onSearchSubmit = async(data) => {
        const response = await Unsplash.get('/search/photos', {
            params: {
                query: data
            }
        });

        this.setState({images: response.data.results});
    }

    render() {
        return (
            <div
                className="ui container"
                style={{
                marginTop: '10px'
            }}>
                <SearchBar searchData={this.onSearchSubmit}></SearchBar>
                <ImageList images={this.state.images}></ImageList>
            </div>
        );
    }
}

export default App;