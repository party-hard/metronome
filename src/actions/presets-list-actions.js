
import presetsListStore from '../stores/presets-list-store';

export function createPreset (preset) {
    presetsListStore.dispatch({
        type: 'CREATE_PRESET',
        payload: preset
    })
}