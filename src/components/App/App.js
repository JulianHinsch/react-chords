import React, { Component } from 'react';
import Chord from '../Chord/Chord';
import styles from '../App/App.module.scss';

export default class App extends Component {

    state = {
        //right now these are all empty objects
        chords: [{}],
    }

    playChord = (chord) => {
        Object.values(chord).forEach(sound => {
            if(sound) {
                sound.play();                
            }
        });
    }

    playChords = () => {
        this.state.chords.forEach(chord => this.playChord(chord));
    }

    addChord = () => {
        this.setState(prevState => ({ chords: [...prevState.chords, {}] }));
    }

    render() {
        return (
            <div className={styles.app}>
                <div className={styles.chord_container}>
                    {this.state.chords.map((chord, renderKey=0) => <Chord playChord={this.playChord} key={renderKey++}/>)}
                </div>
                <div className={styles.controls}>
                    <button onClick={this.addChord}>Add Chord</button>
                    <button onClick={this.playChords}>Play All</button>
                </div>
            </div>
        );
    }
}