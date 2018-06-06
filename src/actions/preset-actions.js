import presetStore from '../stores/preset-store'

export function setBeat (beat) {
    presetStore.dispatch({
        type: 'SET_BEAT',
        payload: parseInt(beat)
    })
}

export function setNoteValue (noteValue) {
    presetStore.dispatch({
        type: 'SET_NOTE_VALUE',
        payload: parseInt(noteValue)
    })
}

export function setBpm (bpm) {
    presetStore.dispatch({
        type: 'SET_BPM',
        payload: parseInt(bpm)
    })
}

export function setVolume (volume) {
    presetStore.dispatch({
        type: 'SET_VOLUME',
        payload: parseFloat(volume / 100)
    })
}

export function setAccent (accent) {
    presetStore.dispatch({
        type: 'SET_ACCENT',
        payload: {
            division: parseInt(accent.division),
            volume: parseFloat(accent.volume / 100)
        }
    })
}