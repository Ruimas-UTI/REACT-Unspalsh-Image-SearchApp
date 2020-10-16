import React from 'react';
import Searchbar from "./Searchbar";
import unsplash from "../apis/unsplash";
import ImageList from './ImageList';

class App extends React.Component {
    state = { images: []   };  
    onSearchSubmit = async (term) => {
        const response = await unsplash.get("/search/photos", {
            params: { query: term  }
        });
        this.setState({ images: response.data.results });
    }
    render () {
        return <div style={{marginTop:"20px"}}>
                    <Searchbar onSubmit= {this.onSearchSubmit}/>
                    <h1>Found: {this.state.images.length} images</h1>
                    <ImageList images={this.state.images}/>
                </div>
    }
}
export default App;