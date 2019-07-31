import React from 'react';
import PropTypes from 'prop-types';

import styles from './Note.module.scss';

const Note = ({ note, toggleNote, isSelected }) => {
    return (
        <div
            className={styles.note}
            style={{ backgroundColor: isSelected ? '#0f0' : '#ddd'}}
            onClick={() => toggleNote(note)}>
            {note}
        </div>
    );
}

Note.propTypes = {
    note: PropTypes.string.isRequired,
    toggleNote: PropTypes.func.isRequired,
    isSelected: PropTypes.bool.isRequired,
}

export default Note;