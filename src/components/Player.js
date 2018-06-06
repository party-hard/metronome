
import React, { Component } from "react";
import formConstants from '../constants/form-constants';

import presetStore from '../stores/preset-store';
import {
    setAccent,
    setBeat,
    setBpm,
    setNoteValue,
    setVolume
} from '../actions/preset-actions';

import MainForm from './MainForm';

class Player extends React.Component {
    constructor (props) {
        super(props);
        
        this.state = {
            track: props.track || presetStore.getState()
        }
    }

    componentDidMount () {
        presetStore.subscribe(() => {
            this.setState({
                track: presetStore.getState()
            })
        });
    }

    onParamsChange (name, value) {
        switch (name) {
            case 'beat':
                setBeat(value)
                break
            case 'noteValue':
                setNoteValue(value)
                break
            case 'bpm':
                setBpm(value)
                break
            case 'volume':
                setVolume(value)
                break
            case 'accent':
                setAccent(value)
                break
            default:
                break
        }
    }

    render () {
        let {
            beat,
            noteValue,
            volume,
            bpm,
            accents
        } = this.state.track;
        return (
            <div>
                <MainForm beat={beat}
                          noteValue={noteValue}
                          volume={volume}
                          bpm={bpm}
                          accents={accents}
                          onChange={this.onParamsChange}/>
            </div>
        );
    }
}

export default Player;