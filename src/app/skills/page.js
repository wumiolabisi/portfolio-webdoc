'use client';
import Diapositive from '@/_components/Diapositive';
import { skillsDiapos } from '@/_diapos/skillsDiapos';
import DiapoNavigator from '@/_components/DiapoNavigator';
import ParticleBackground from './_3d/ParticleBackground';
import { AnimatePresence } from 'framer-motion';

export default function Skills() {
    const { currentDiapo } = DiapoNavigator({ diapos: skillsDiapos });

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
