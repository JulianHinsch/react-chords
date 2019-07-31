import React from 'react';
import PropTypes from 'prop-types';

import styles from './BPMSlider.module.scss';

const BPMSlider = ({ bpm, handleBPMChange }) => {
    return (
        <div className={styles.slider}>
            <span>{bpm} BPM</span>
            <input type="range" min="60" max="180" value={bpm} onChange={handleBPMChange}/>
        </div>
    )
}

BPMSlider.propTypes = {
    handleBPMChange: PropTypes.func.isRequired,
}

export default BPMSlider;