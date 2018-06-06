import React, { Component } from "react";
import formConstants from '../constants/form-constants';

import presetStore from '../stores/preset-store';
class MainForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            beat: props.beat,
            noteValue: props.noteValue,
            bpm: props.bpm,
            volume: props.volume,
            accents: props.accents
        }
    }

    componentDidMount () {
        presetStore.subscribe(() => {
            console.info('state', presetStore.getState());
            this.setState(presetStore.getState())
        });
    }

    onParamsChange (event) {
        const {name, value} = event.target
        this.props.onChange(name, value)
    }

    onAccentChange (event) {
        this.props.onChange('accent', {
            division: event.target.id,
            volume: event.target.value
        })
    }

    render () {
        const {
            beat,
            noteValue,
            bpm,
            volume,
            accents
        } = this.state;
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
            let name = `volume_accent_${accent.division}`
            return (
                <li key={i} className="col-sm">
                    <input type="range"
                            className="accent"
                            min="0"
                            max="100"
                            orient="vertical"
                            name={name}
                            id={accent.division}
                            onChange={this.onAccentChange.bind(this)}
                            defaultValue={accent.volume * 100}/>
                </li>
            )
        }

        const accentLabelsMapper = (accent, i) => {
            return (
                <li key={i} className="col-sm">
                    {accent.name}
                </li>
            )
        }

        const mappedAccentsInputs = accents.filter((accent) =>  {
            return !accent.isHidden
        }).map(accentInputMapper)
        
        const mappedAccentsLabels = accents.filter((accent) =>  {
            return !accent.isHidden
        }).map(accentLabelsMapper)
        
        return (
           <div className="MainForm">
                <div className="row labels">
                    <div className="col-sm">
                        beat
                    </div>
                    <div className="col-sm">
                        note value
                    </div>
                    <div className="col-sm">
                        bpm: {bpm}
                    </div>
                    <div className="col-sm">
                        volume
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <select name="beat"
                                id="beat_select"
                                defaultValue={beat}
                                onChange={this.onParamsChange.bind(this)}>
                            {mappedBeatRange}
                        </select>
                    </div>
                    <div className="col-sm">
                        <select name="noteValue"
                                id="noteValue"
                                defaultValue={noteValue}
                                onChange={this.onParamsChange.bind(this)}>
                            {mappedNoteValueRange}
                        </select>
                    </div>
                    <div className="col-sm">
                        <input type="range"
                               min="20"
                               max="350"
                               name="bpm"
                               id="bpm"
                               onChange={this.onParamsChange.bind(this)}
                               defaultValue={this.state.bpm}/>
                    </div>
                    <div className="col-sm">
                        <input type="range"
                               min="0"
                               max="100"
                               name="volume"
                               id="volume"
                               onChange={this.onParamsChange.bind(this)}
                               defaultValue={volume * 100}/>
                    </div>
                </div>
                <ul className="row accents-labels">{mappedAccentsLabels}</ul>
                <ul className="row accents-inputs">{mappedAccentsInputs}</ul>
           </div> 
        );
    }
}

export default MainForm;