import { combineReducers } from 'redux';
import  defaultPreset from '../constants/preset-constants';

const beatReducer = (state=defaultPreset.beat, action) => {
    if (action.type === 'SET_BEAT') {
        return action.payload;
    }
    return state;
}

const noteValueReducer = (state=defaultPreset.noteValue, action) => {
    if (action.type === 'SET_NOTE_VALUE') {
        return action.payload;
    }
    return state;
}

const bpmReducer = (state=defaultPreset.bpm, action) => {
    if (action.type === 'SET_BPM') {
        return action.payload;
    }
    return state;
}

const volumeReducer = (state=defaultPreset.volume, action) => {
    switch (action.type) {
        case 'SET_VOLUME':
            return action.payload;
        case 'MUTE':
            return 0;
        default:
            return state;
    }
}

const accentsReducer = (state=defaultPreset.accents, action) => {
    if (action.type === 'SET_ACCENT') {
        return state.map((accent) => {
            if (action.division === accent.division) {
                return {...accent, ...action.payload };
            }
            return accent;
        });
    }
    return state;
}

const reducers = combineReducers({
    beat: beatReducer,
    noteValue: noteValueReducer,
    accents: accentsReducer,
    volume: volumeReducer,
    bpm: bpmReducer
});

export default reducers; 