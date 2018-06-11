import { connect } from 'react-redux'
import React, { Component } from 'react'
import formConstants from '../constants/form-constants'

import presetStore from '../stores/preset-store'
import {
    setAccent,
    setBeat,
    setBpm,
    setNoteValue,
    setVolume,
    startPreset,
    stopPreset
} from '../actions/preset-actions'

import MainForm from './MainForm'

@connect((store) => {
    return {
        track: store
    }
})

export default class Player extends React.Component {

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
            case 'status':
                value ? startPreset() : stopPreset()
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
        } = this.props
        return (
            <div>
                <MainForm beat={beat}
                          noteValue={noteValue}
                          volume={volume}
                          bpm={bpm}
                          accents={accents}
                          onChange={this.onParamsChange}/>
            </div>
        )
    }
}