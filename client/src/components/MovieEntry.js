import React from 'react';
import PropTypes from 'prop-types';

var MovieEntry = ({ movie, toggleWatched, displayMovieInfo }) => {
    var details;
    if (movie.showDetails === true) {
        details = <span>
            year: 1957
            runtime: 107 min
            metascore: 46
            imbdRating: 6.2
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