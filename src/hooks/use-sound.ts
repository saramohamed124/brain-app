import { createAudioPlayer } from 'expo-audio';

// Load and compile the asset at file layout level so it maps natively
const clickAsset = require('../../assets/sounds/clicks.wav');

export const useClickSound = () => {
    // Instantiate the player globally within this hook scope
    const player = createAudioPlayer(clickAsset);

    function playSound() {
        if (player) {
            // If tapped in quick succession, rewind to the start
            player.seekTo(0);
            player.play();
        }
    }

    return playSound;
};