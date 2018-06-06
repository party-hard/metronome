import cuid from 'cuid';

const moveBack = (array, newIndex, oldIndex) => {
    return [
        ...array.slice(0, newIndex), 
           array[oldIndex],
        ...array.slice(newIndex, oldIndex),
        ...array.slice(oldIndex + 1, array.length)
    ];
}

const moveForward = (array, newIndex, oldIndex) => {
    return [
        ...array.slice(0, oldIndex), 
        ...array.slice(oldIndex + 1, newIndex + 1), 
           array[oldIndex], 
        ...array.slice(newIndex + 1, array.length)
    ];
}

const presetsListReducer = (state=[], action)  => {
    switch (action.type) {
        case 'CREATE_PRESET':
            return [
                ...state,
                {
                    id: cuid(),
                    data: action.payload
                }
            ]
        case 'REMOVE_PRESET':
            return state.reduce((result, preset) => {
                if (preset.id !== action.payload.id) {
                    return preset;
                }
            }, []);
        case 'POPULATE':
            return action.payload;
        case 'MOVE_PRESET':
            if (action.payload.newIndex < action.payload.oldIndex) {
                return moveForward(state, action.payload.newIndex, action.payload.oldIndex);
            } else if (action.payload.newIndex > action.payload.oldIndex) {
                return moveBack(state, action.payload.newIndex, action.payload.oldIndex);
            } else {
                return state;
            }
        default:
            return state;
    }
}

export default presetsListReducer;