'use client';
import Diapositive from '@/_components/Diapositive';
import { skillsDiapos } from '@/_diapos/skillsDiapos';
import DiapoNavigator from '@/_components/DiapoNavigator';
import ParticleBackground from './_3d/ParticleBackground';

export default function Skills() {
    const { currentDiapo } = DiapoNavigator({ diapos: skillsDiapos });

    return (
        <div className="overflow-hidden relative">
            <ParticleBackground />
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="flex flex-row justify-center items-center h-full">
                    <Diapositive currentDiapo={currentDiapo} diapos={skillsDiapos} />
                </div>
            </div>
        </div>
    );
}
