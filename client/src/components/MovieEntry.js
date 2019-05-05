import React from 'react';
import PropTypes from 'prop-types';

var MovieEntry = ({ movie, movieClickHandler }) => (
    <div className="singleMovie">
        {movie.title}
        <button onClick={() => { movieClickHandler(movie.id); }}>{movie.isWatched ? "watched" : "to watch"}</button>
    </div>
);

MovieEntry.propTypes = {
    movie: PropTypes.object.isRequired,
    movieClickHandler: PropTypes.func.isRequired
};
export default MovieEntry;