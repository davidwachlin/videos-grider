import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    term: '',
  };

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  onVideoSearch = event => {
    event.preventDefault();

    this.props.onSearchSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onVideoSearch}>
          <div className="field">
            <label>Video Search</label>
            <input
              value={this.state.term}
              onChange={this.onInputChange}
              type="text"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
