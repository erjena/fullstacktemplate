import React from 'react';
import MovieEntry from './MovieEntry.js';
import PropTypes from 'prop-types';

var MoviesList = ({ movies, movieClickHandler, displayMovieInfo }) => (
    <div className="moviesList">
    {movies.map(movie => (
        <MovieEntry movie={movie} toggleWatched={movieClickHandler} key={movie.id} displayMovieInfo={displayMovieInfo} />
    ))}
    </div>
);


MoviesList.propTypes = {
    movies: PropTypes.array.isRequired,
    movieClickHandler: PropTypes.func.isRequired,
    displayMovieInfo: PropTypes.func.isRequired
};
export default MoviesList; 