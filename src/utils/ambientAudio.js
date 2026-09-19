// Web Audio API Ambient Brown Noise Generator (Zero External File Assets)
let audioCtx = null;
let noiseNode = null;
let gainNode = null;
let isPlaying = false;

export const ambientSound = {
  start: () => {
    if (isPlaying) return;

    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;

    if (!audioCtx) {
      audioCtx = new AudioContext();
    }

    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    // 2-second buffer of generated brown noise
    const bufferSize = audioCtx.sampleRate * 2;
    const noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const output = noiseBuffer.getChannelData(0);

    let lastOut = 0.0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      // Brown noise integration filter
      output[i] = (lastOut + 0.02 * white) / 1.02;
      lastOut = output[i];
      output[i] *= 3.5; // Gain boost
    }

    noiseNode = audioCtx.createBufferSource();
    noiseNode.buffer = noiseBuffer;
    noiseNode.loop = true;

    gainNode = audioCtx.createGain();
    gainNode.gain.setValueAtTime(0.06, audioCtx.currentTime); // Soft background level

    noiseNode.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    noiseNode.start(0);
    isPlaying = true;
  },

  stop: () => {
    if (!isPlaying) return;
    try {
      if (noiseNode) {
        noiseNode.stop();
        noiseNode.disconnect();
      }
      if (gainNode) {
        gainNode.disconnect();
      }
    } catch (e) {
      console.warn('Audio cleanup issue:', e);
    }
    isPlaying = false;
  },

  toggle: () => {
    if (isPlaying) {
      ambientSound.stop();
      return false;
    } else {
      ambientSound.start();
      return true;
    }
  },

  isActive: () => isPlaying
};