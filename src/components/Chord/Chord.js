import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Howl } from 'howler';
import styles from './Chord.module.scss';
import Tone from '../Tone/Tone';

const tones = [
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
        playChord: PropTypes.func.isRequired,
    }

    //stores howl for each tone
    state = {}

    toggleTone = (tone) => {
        if(Boolean(this.state[tone])) {
            this.setState({[tone]: undefined});
        } else {
            const sound = new Howl({
                src: [`/assets/synth/${tone.replace('#','_')}.mp3`],
                html5: true,
                autoplay: true,
                loop: false,
            });
            this.setState({ [tone]: sound });
        }
    }

    render() {
        const { playChord } = this.props;
        return (
            <div className={styles.chord}>
                {tones.map(( tone, renderKey = 0 ) => (
                    <Tone
                        tone={tone}
                        isSelected = {Boolean(this.state[tone])}
                        toggle={this.toggleTone} 
                        key={renderKey++}/>
                    )
                )}
                <button onClick={() => playChord(this.state)}>Play</button>
            </div>
        )
    }
}