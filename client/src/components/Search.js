import React from 'react';
import PropTypes from 'prop-types';

var Search = ({searchValue, onInputChange, onSearchSubmit}) => (
    <label>
        Search..
    <input type="text" value={searchValue} onChange={onInputChange} />
    <button onClick={onSearchSubmit}>Search</button>
    </label>
);


Search.propTypes = {
    searchValue: PropTypes.string.isRequired,
    onInputChange: PropTypes.func.isRequired,
    onSearchSubmit: PropTypes.func.isRequired
};

export default Search;