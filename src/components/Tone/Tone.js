import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tone.module.scss';

const Tone = ({ tone, toggle, isSelected }) => {
    return (
        <div
            className={styles.tone}
            style={{ backgroundColor: isSelected ? '#0f0' : '#ddd'}}
            onClick={() => toggle(tone)}>
            {tone}
        </div>
    );
}

Tone.propTypes = {
    tone: PropTypes.string.isRequired,
    toggle: PropTypes.func.isRequired,
    isSelected: PropTypes.bool.isRequired,
}

export default Tone;