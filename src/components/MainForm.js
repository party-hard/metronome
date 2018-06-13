import React, { Component } from 'react'
import { connect } from 'react-redux'
import formConstants from '../constants/form-constants'

@connect((store) => {
    return {...store}
})


export default class MainForm extends React.Component {
    onParamsChange (event) {
        const {name, value} = event.target
        this.props.onChange(name, value)
    }

    onAccentChange (id, value) {
        this.props.onChange('accent', {
            division: id,
            volume: value
        })
    }

    isAccentOn (volume) {
        return !!volume
    }

    changeTrackStatus () {
        this.props.isPlaying
            ? this.props.onChange('status', false)
            : this.props.onChange('status', true)
    }

    render () {
        const {
            beat,
            noteValue,
            bpm,
            volume,
            accents,
            isPlaying
        } = this.props

        const mappedBeatRange = formConstants.beatRange.map((beat, i) => {
            return (
                <option key={i} value={beat}>
                    {beat}
                </option>
            )
        })
        const mappedNoteValueRange = formConstants.noteValueRange.map((noteValue, i) => {
            return (
                <option key={i} value={noteValue.value}>
                    {noteValue.name}
                </option>
            )
        })
        const accentInputMapper = (accent, i) => {
            const name = `volume_accent_${accent.division}`
            const idOn = `${accent.division}_on`
            const idOff = `${accent.division}_off`
            return (
                <li key={i} class='col-xs-3 col-sm-3 col-md-3 col-lg-3'>
                    <button 
                        class='accent_switch'
                        name={name}
                        id={idOn}
                        data-is-on={this.isAccentOn(accent.volume)}
                        onClick={this.onAccentChange.bind(this, accent.division, 1)}
                        >on</button>
                    <button 
                        class='accent_switch'
                        name={name}
                        id={idOff}
                        data-is-off={!this.isAccentOn(accent.volume)}
                        onClick={this.onAccentChange.bind(this, accent.division, 0)}
                        >off</button>
                </li>
            )
        }

        const accentLabelsMapper = (accent, i) => {
            return (
                <li key={i} class='col-xs-3 col-sm-3 col-md-3 col-lg-3'>
                    {accent.name}
                </li>
            )
        }

        const filterHidden = (accent) => {
            return !accent.isHidden
        }

        const mappedAccentsInputs = accents.filter(filterHidden).map(accentInputMapper)
        
        const mappedAccentsLabels = accents.filter(filterHidden).map(accentLabelsMapper)
        
        return (
           <div class='MainForm'>
                <div className="form-controls-wrapper">
                    <div class='row labels'>
                        <div class='col-xs-3 col-sm-3 col-md-3 col-lg-3'>
                            beat
                        </div>
                        <div class='col-xs-3 col-sm-3 col-md-3 col-lg-3'>
                            note value
                        </div>
                        <div class='col-xs-3 col-sm-3 col-md-3 col-lg-3'>
                            bpm: {bpm}
                        </div>
                        <div class='col-xs-3 col-sm-3 col-md-3 col-lg-3'>
                            volume
                        </div>
                    </div>
                    <div class='row'>
                        <div class='col-xs-3 col-sm-3 col-md-3 col-lg-3'>
                            <select name='beat'
                                    id='beat_select'
                                    defaultValue={beat}
                                    onChange={this.onParamsChange.bind(this)}>
                                {mappedBeatRange}
                            </select>
                        </div>
                        <div class='col-xs-3 col-sm-3 col-md-3 col-lg-3'>
                            <select name='noteValue'
                                    id='noteValue'
                                    defaultValue={noteValue}
                                    onChange={this.onParamsChange.bind(this)}>
                                {mappedNoteValueRange}
                            </select>
                        </div>
                        <div class='col-xs-3 col-sm-3 col-md-3 col-lg-3'>
                            <input type='range'
                                   min='20'
                                   max='350'
                                   name='bpm'
                                   id='bpm'
                                   onChange={this.onParamsChange.bind(this)}
                                   defaultValue={bpm}/>
                        </div>
                        <div class='col-xs-3 col-sm-3 col-md-3 col-lg-3'>
                            <input type='range'
                                   min='0'
                                   max='100'
                                   name='volume'
                                   id='volume'
                                   onChange={this.onParamsChange.bind(this)}
                                   defaultValue={volume * 100}/>
                        </div>
                    </div>
                    <ul class='row accents-labels'>{mappedAccentsLabels}</ul>
                    <ul class='row accents-inputs'>{mappedAccentsInputs}</ul>
                </div>
                <div class="main-button-wrapper">
                    <div class='row'>
                        <div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 '>
                            <button class='main-button' 
                                    data-is-playing={isPlaying}
                                    onClick={this.changeTrackStatus.bind(this)}>
                                {isPlaying ? 'stop' : 'start'}
                            </button>
                        </div>
                    </div>
                </div>
           </div> 
        )
    }
}