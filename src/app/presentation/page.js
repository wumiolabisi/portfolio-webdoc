'use client';
import Diapositive from '@/_components/Diapositive';
import { presentationDiapos } from '@/_diapos/presentationDiapos';
import DiapoNavigator from '@/_components/DiapoNavigator';

export default function Presentation() {
    const { currentDiapo } = DiapoNavigator({ diapos: presentationDiapos });

    return (
        <Diapositive currentDiapo={currentDiapo} diapos={presentationDiapos} />
    );
}
