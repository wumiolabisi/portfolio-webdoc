'use client';
import Diapositive from '@/_components/Diapositive';
import { skillsDiapos } from '@/_diapos/skillsDiapos';
import DiapoNavigator from '@/_components/DiapoNavigator';
import ParticleBackground from './_3d/ParticleBackground';
import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

export default function Skills() {
    const { currentDiapo } = DiapoNavigator({ diapos: skillsDiapos });

    useEffect(() => {
        const ambientSound = new Audio('/sounds/magic-mobil-1.mp3');
        ambientSound.volume = 0.1;
        ambientSound.play();

        const stopSound = () => {
            console.log(timer)
            ambientSound.volume = 0;
            ambientSound.currentTime = 0;
        };
        const timer = setTimeout(stopSound, 10000);

        return () => {
            clearTimeout(timer);
            stopSound();
        };
    }, []);

    return (
        <div className="relative">
            <ParticleBackground />
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="flex flex-row justify-center items-center h-full">
                    <AnimatePresence mode="wait">
                        <Diapositive key={currentDiapo} currentDiapo={currentDiapo} diapos={skillsDiapos} />
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
