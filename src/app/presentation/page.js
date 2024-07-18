'use client'
import Diapositive from "@/_components/Diapositive"
import Video from "@/_components/Video"
import { useEffect, useState } from 'react'

export default function Presentation() {

    const [currentDiapo, setCurrentDiapo] = useState(0)

    const handleDiapoNext = () => {
        setCurrentDiapo((prev) => prev + 1);
    };

    const handleDiapoPrev = () => {
        setCurrentDiapo((prev) => prev - 1);
    };


    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'ArrowDown') {
                handleDiapoNext();
            } else if (event.key === 'ArrowUp') {
                handleDiapoPrev();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);


    return (
        <Diapositive currentDiapo={currentDiapo}>
        </Diapositive>

    );
}