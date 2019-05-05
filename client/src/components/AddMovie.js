import React from 'react';
import PropTypes from 'prop-types';

var AddMovie = ({ addTitle, onAddTitleChange, onAddTitleSubmit }) => (
    <label>
        <input type="text" value={addTitle} onChange={onAddTitleChange} />
        <button onClick={onAddTitleSubmit}>Add..</button>
    </label>
);

AddMovie.propTypes = {
    addTitle: PropTypes.string.isRequired,
    onAddTitleChange: PropTypes.func.isRequired,
    onAddTitleSubmit: PropTypes.func.isRequired
};

export default AddMovie;