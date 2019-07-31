import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Note from '../Note/Note';

import styles from './Chord.module.scss';

const Keys = [
    'C1',
    'C#1',
    'D1',
    'D#1',
    'E1',
    'F1',
    'F#1',
    'G1',
    'G#1',
    'A1',
    'A#1',
    'B1',
    'C2',
    'C#2',
    'D2',
    'D#2',
    'E2',
    'F2',
    'F#2',
    'G2',
    'G#2',
    'A2',
    'A#2',
    'B2',
    'C3',
];

export default class Chord extends Component {

    static propTypes = {
        index: PropTypes.number.isRequired,
        notes: PropTypes.object.isRequired,
        playChord: PropTypes.func.isRequired,
        toggleNote: PropTypes.func.isRequired,
    }

    render() {
        const { index, playChord, notes, toggleNote } = this.props;
        return (
            <div className={styles.chord}>
                {Keys.map(key => (
                    <Note
                        note={key}
                        isSelected = {Boolean(notes.get(key))}
                        toggleNote={toggleNote(index)} 
                        key={key}/>
                    )
                )}
                <button onClick={() => playChord(notes)}>Play</button>
            </div>
        )
    }
}