import {reduce, size, forOwn, map} from 'lodash';
import context from '../utils/context';
import metronome_low from '../sounds/metronome-low.wav';
import metronome_med from '../sounds/metronome-med.wav';
import metronome_high from '../sounds/metronome-high.wav';


const OfflineContext = window.OfflineAudioContext || window.webkitOfflineAudioContext;

const availableSamples = [
  {name: 'metronome-low', url: metronome_low},
  {name: 'metronome-med', url: metronome_med},
  {name: 'metronome-high', url: metronome_high}
];

window.availableSamples = availableSamples;

const buffers = [];

let areLoaded = () => {
    size(buffers) === size(availableSamples);
}

let recompileBufferGain = (buffer, receivedGain, callback) => {
  let channels = buffer.numberOfChannels;
  let durationInSamples = buffer.length;
  let sampleRate = buffer.sampleRate;

  const offlineContext = new OfflineContext(channels, durationInSamples, sampleRate);
  const emptyBuffer = offlineContext.createBuffer(channels, durationInSamples, sampleRate);

  const source = offlineContext.createBufferSource();
  const gainNode = offlineContext.createGain();

  let gain = !receivedGain
    ? 1
    : receivedGain;

  for (let channel = 0; channel < channels; channel++) {
    var channelData = emptyBuffer.getChannelData(channel);
    for (let i = 0; i < durationInSamples; i++) {
      channelData[i] = buffer.getChannelData(channel)[i];
    }
  }

  source.buffer = emptyBuffer;
  gainNode.gain.value = gain;

  source.connect(gainNode);
  gainNode.connect(offlineContext.destination);
  source.start(0);

  offlineContext.oncomplete = () => {
    callback(event.renderedBuffer);
  };

  offlineContext.startRendering();
}

let decodeArrayBufferOffline = (arrayBuffer) => {
    return new Promise ( (resolve, reject) => {
        const view = new DataView(arrayBuffer);
        const sampleRate = view.getUint32(24, true);
        const numberOfChannels = view.getUint16(22, true);

        const offlineCtx = new OfflineContext(numberOfChannels, 1, sampleRate);

        offlineCtx.decodeAudioData(arrayBuffer, resolve, reject);
    });
}

async function loadSample (url) {
    return new Promise ( (resolve, reject) => {
        const request = new XMLHttpRequest();
        request.open('GET', url, true);
        request.responseType = 'arraybuffer';
        request.onload = () => {
            decodeArrayBufferOffline(request.response).then(resolve).catch( (buffer) => {
                reject('Error decoding drum samples!', buffer);
            });
        };

        request.send();
    });
}

async function loadAll () {
    const preloadedBuffers = await fetch(availableSamples);
    return reduce(preloadedBuffers, (result, buffer) => {
        result.push(buffer);
        return result;
    }, buffers);
}

async function fetch (samples) {
    const promiseArray = map(samples, async (sampleData) => {
        return {
            name: sampleData.name,
            buffer: await loadSample(sampleData.url)
        };
    });
    return await Promise.all(promiseArray);
}

let getBuffer = (bufferName) => {
    let obj =  buffers.find( ({name}) => name === bufferName );

    if (!obj) {
        throw new Error (`No buffer ${bufferName}`);
    }

    return obj.buffer;
}

export { loadAll };
export { getBuffer }

export default {
  recompileBufferGain
};
