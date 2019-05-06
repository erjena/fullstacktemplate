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
      movieList: [],
      showMovies: []
    };

    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.handleAddTitleChange = this.handleAddTitleChange.bind(this);
    this.handleAddTitleSubmit = this.handleAddTitleSubmit.bind(this);
    this.handleWatchChange = this.handleWatchChange.bind(this);
    this.displayWatched = this.displayWatched.bind(this);
    this.displayToWatch = this.displayToWatch.bind(this);
    this.displayMovieInfo = this.displayMovieInfo.bind(this);
    this.filter = this.filter.bind(this);
  }

  handleSearchInput(event) {
    this.setState({ searchValue: event.target.value });
  }

  handleSearchSubmit(event) {
    event.preventDefault();
    this.setState({
      showMovies: this.filter(this.state.movieList, this.state.searchValue),
      searchValue: ''
    });
  }

  handleAddTitleChange(event) {
    this.setState({ addTitle: event.target.value });
  }

  handleAddTitleSubmit(event) {
    event.preventDefault();

    this.state.movieList.push({
      id: this.state.nextId,
      title: this.state.addTitle,
      isWatched: false,
      showDetails: false,
      year: 1976,
      runtime: '107 min',
      metascore: 46,
      imdbRating: 6.2
    });
    this.state.nextId++;
    this.setState({
      movieList: this.state.movieList,
      addTitle: '',
      showMovies: this.filter(this.state.movieList, '')
    });
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

  displayMovieInfo(id) {
    for (var i = 0; i < this.state.movieList.length; i++) {
      if (this.state.movieList[i].id === id) {
        if (!this.state.movieList[i].showDetails) {
          this.state.movieList[i].showDetails = true;
        } else {
          this.state.movieList[i].showDetails = false;
        }
      }
    }
    this.setState({ movieList: this.state.movieList });
  }

  filter(movieList, searchValue, isWatched) {
    var filteredlist = [];
    for (var i = 0; i < movieList.length; i++) {
      var elem = movieList[i].title.toLowerCase();
      if (!elem.includes(searchValue.toLowerCase())) {
        continue;
      }
      if (isWatched === true && !movieList[i].isWatched) {
        continue;
      }
      if (isWatched === false && movieList[i].isWatched) {
        continue;
      }
      filteredlist.push(movieList[i]);
    }
    return filteredlist;
  }

  displayWatched() {
    this.setState({ showMovies: this.filter(this.state.movieList, '', true) });
  }

  displayToWatch() {
    this.setState({ showMovies: this.filter(this.state.movieList, '', false) });
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
        <button onClick={this.displayWatched}>Watched</button>
        <button onClick={this.displayToWatch}>To Watch</button>
        <br />
        <MoviesList movies={this.state.showMovies} movieClickHandler={this.handleWatchChange} displayMovieInfo={this.displayMovieInfo}/>
      </div>
    );
  }
}

export default App;
