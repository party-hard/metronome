const AudioContext = window.AudioContext || window.webkitAudioContext
const context = new AudioContext()
let unlocked = false

let unlock = (callback) => {
   var buffer = context.createBuffer(1, 1, 22050)
   var source = context.createBufferSource()
   source.buffer = buffer
   source.connect(context.destination)

   source.start(0)

   setTimeout(function () {
     if (source.playbackState === source.PLAYING_STATE || source.playbackState === source.FINISHED_STATE) {
       unlocked = true
     }
     callback()
  }, 10)
}

let isUnlocked = () => unlocked

export default {
    context,
    unlock,
    isUnlocked
}
