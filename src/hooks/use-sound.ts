import { Audio } from 'expo-av';
import { useEffect, useState } from 'react';

export const useClickSound = () => {
    const [sound, setSound] = useState<Audio.Sound | null>(null);

    async function playSound() {
        const { sound } = await Audio.Sound.createAsync(
            require('../../assets/sounds/clicks.wav')
        );
        setSound(sound);
        await sound.playAsync();
    }

    useEffect(() => {
        return sound
            ? () => {
                sound.unloadAsync();
            }
            : undefined;
    }, [sound]);

    return playSound;
};