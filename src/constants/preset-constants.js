const defaultPreset = {
    beat: 4,
    noteValue: 4,
    volume: 1,
    bpm: 120,
    accents: [{
        name: 'whole',
        division: 1,
        volume: 1,
        isHidden: true
    }, {
        name: 'half',
        division: 2,
        volume: 1,
        isHidden: true
    }, {
        name: 'quarter',
        division: 4,
        volume: 1
    }, {
        name: 'eight',
        division: 8,
        volume: 0
    }, {
        name: 'triplet',
        division: 12,
        volume: 0
    }, {
        name: 'sixteenth',
        division: 16,
        volume: 0
    }]
}
export default defaultPreset;