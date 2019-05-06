import React from 'react';
import PropTypes from 'prop-types';

var MovieEntry = ({ movie, toggleWatched, displayMovieInfo }) => {
    var details;
    if (movie.showDetails === true) {
        details = <span>
            year: {movie.year}
            runtime: {movie.runtime}
            metascore: {movie.metascore}
            imdbRating: {movie.imdbRating}
            <input type="checkbox" onChange={() => (toggleWatched(movie.id))} defaultChecked={movie.isWatched} />
        </span>
    }

    return (
    <div className="singleMovie">
        <div onClick={() => (displayMovieInfo(movie.id))}>{movie.title}</div>
        {details}
    </div>
    )
};

MovieEntry.propTypes = {
    movie: PropTypes.object.isRequired,
    toggleWatched: PropTypes.func.isRequired,
    displayMovieInfo: PropTypes.func.isRequired
};
export default MovieEntry;