import React from 'react';
import MovieEntry from './MovieEntry.js';
import PropTypes from 'prop-types';

var MoviesList = ({ movies, movieClickHandler }) => (
    <div className="moviesList">
    {movies.map(movie => (
        <MovieEntry movie={movie} movieClickHandler={movieClickHandler} key={movie.id} />
    ))}
    </div>
);


MoviesList.propTypes = {
    movies: PropTypes.array.isRequired,
    movieClickHandler: PropTypes.func.isRequired
};
export default MoviesList; 