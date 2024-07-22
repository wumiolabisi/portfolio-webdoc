'use client';
import { useEffect, useState } from 'react';

const DiapoNavigator = ({ diapos, initialIndex = 0 }) => {
    const [currentDiapo, setCurrentDiapo] = useState(initialIndex);
    const totalDiapos = diapos.length;
    const audio = new Audio('/sounds/COMCam_Instamatic declenchement 2 (ID 2822)_LS.mp3');
    audio.volume = 0.3

    const handleDiapoNext = () => {
        setCurrentDiapo((prev) => Math.min(prev + 1, totalDiapos - 1));
        audio.play();
    };

    const handleDiapoPrev = () => {
        setCurrentDiapo((prev) => Math.max(prev - 1, 0));
        audio.play();

    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
                handleDiapoNext();
            } else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
                handleDiapoPrev();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [totalDiapos]);

    return { currentDiapo, handleDiapoNext, handleDiapoPrev };
};

export default DiapoNavigator;
