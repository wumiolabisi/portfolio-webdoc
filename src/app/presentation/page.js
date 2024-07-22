'use client';
import Diapositive from '@/_components/Diapositive';
import { presentationDiapos } from '@/_diapos/presentationDiapos';
import DiapoNavigator from '@/_components/DiapoNavigator';
import { AnimatePresence } from 'framer-motion';

export default function Presentation() {
    const { currentDiapo } = DiapoNavigator({ diapos: presentationDiapos });

    return (
        <AnimatePresence mode="wait">
            <Diapositive key={currentDiapo} currentDiapo={currentDiapo} diapos={presentationDiapos} />
        </AnimatePresence>
    );
}
