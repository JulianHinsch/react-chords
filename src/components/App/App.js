import React, { Component } from 'react';
import { Howl } from 'howler';
import Immutable from 'immutable';
import Chord from '../Chord/Chord';
import BPMSlider from '../BPMSlider/BPMSlider';

import styles from '../App/App.module.scss';

export default class App extends Component {

    state = {
        chords: Immutable.fromJS([{}]),
        bpm: 120,
    }

    /**
     * Iterate through all notes in a chord, play each one
     */
    playChord = (chord) => {
        chord.forEach(note => note.play());
    }

    /**
     * Iterate through all chords, play each one
     */
    playAllChords = () => {
        this.state.chords.forEach((chord, index) => {
            setTimeout(() => {
                this.playChord(chord);
            }, index * (60000 / this.state.bpm))
        });
    }

    toggleNote = (chordIndex) => (note) => {
        if(this.state.chords.hasIn([chordIndex, note])) {
            this.setState(prevState => ({ chords: prevState.chords.deleteIn([chordIndex, note])}))
        } else {
            const howl = new Howl({
                src: `/assets/synth/${note.replace('#','_')}.mp3`,
                html5: true,
                autoplay: true,
                loop: false,
            });
            howl.play();
            this.setState(prevState => ({ chords: prevState.chords.setIn([chordIndex, note], howl) }))
        }
    }    

    addChord = () => {
        this.setState(prevState => ({
            chords: this.state.chords.push(Immutable.Map())
        }));
    }

    removeChord = () => {}

    handleBPMChange = (event) => {
        this.setState({ bpm: event.target.value })
    }

    render() {
        console.log(this.state.chords);
        return (
            <div className={styles.app}>
                <div className={styles.chord_container}>
                    {this.state.chords.map((chord, index) => {
                        return (
                            <Chord 
                                notes={chord}
                                playChord={this.playChord} 
                                toggleNote={this.toggleNote}
                                index={index}
                                key={index}/>
                        )
                    })}
                </div>
                <div className={styles.controls}>
                    <div>
                        <button onClick={this.addChord}>Add Chord</button>
                        <button onClick={this.playAllChords}>Play All</button>
                    </div>
                    <BPMSlider 
                        handleBPMChange={this.handleBPMChange} 
                        bpm={this.state.bpm}/>
                </div>
            </div>
        );
    }
}