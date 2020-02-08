import React, { Component } from 'react';
import SearchBar from './SearchBar';

class App extends Component {
  state = {
    videos: [],
  };

  onSearchSubmit = searchTerm => {
    console.log(searchTerm);
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}
export default App;
