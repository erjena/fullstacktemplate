import React from 'react';
import MoviesList from './MoviesList.js';
import Search from './Search.js';
import AddMovie from './AddMovie.js';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nextId: 0,
      addTitle: '',
      searchValue: '',
      movieList: []
    };

    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.handleAddTitleChange = this.handleAddTitleChange.bind(this);
    this.handleAddTitleSubmit = this.handleAddTitleSubmit.bind(this);
    this.handleWatchChange = this.handleWatchChange.bind(this);
  }

  handleSearchInput(event) {
    this.setState({ searchValue: event.target.value });
  }

  handleSearchSubmit(event) {
    event.preventDefault();

    var filteredlist = [];
    for (var i = 0; i < this.state.movieList.length; i++) {
      var elem = this.state.movieList[i].title.toLowerCase();
      if (elem.includes(this.state.searchValue.toLowerCase())) {
        filteredlist.push(this.state.movieList[i]);
      }
    }
    this.setState({ movieList: filteredlist, searchValue: '' });
  }

  handleAddTitleChange(event) {
    this.setState({ addTitle: event.target.value });
  }

  handleAddTitleSubmit(event) {
    event.preventDefault();

    this.state.movieList.push({ id: this.state.nextId, title: this.state.addTitle, isWatched: false });
    this.state.nextId++;
    this.setState({ movieList: this.state.movieList, addTitle: '' });
  }

  handleWatchChange(id) {
    for (var i = 0; i < this.state.movieList.length; i++) {
      if (this.state.movieList[i].id === id) {
        if (!this.state.movieList[i].isWatched) {
          this.state.movieList[i].isWatched = true;
        } else {
          this.state.movieList[i].isWatched = false;
        }
      }
    }
    this.setState({ movieList: this.state.movieList });
  }


  render() {
    return (
      <div>
        <h1 className="title">Movie List</h1>
        <br />
        <Search
          searchValue={this.state.searchValue}
          onInputChange={this.handleSearchInput}
          onSearchSubmit={this.handleSearchSubmit}
        />
        <br />
        <AddMovie
          addTitle={this.state.addTitle}
          onAddTitleChange={this.handleAddTitleChange}
          onAddTitleSubmit={this.handleAddTitleSubmit}
        />
        <br />
        <MoviesList movies={this.state.movieList} movieClickHandler={this.handleWatchChange} />
      </div>
    );
  }
}

export default App;
