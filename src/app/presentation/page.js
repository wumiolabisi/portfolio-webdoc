'use client'
import Diapositive from "@/_components/Diapositive"
import { useEffect, useState } from 'react'

export default function Presentation() {

    const [currentDiapo, setCurrentDiapo] = useState(0)
    const totalDiapos = 5

    const handleDiapoNext = () => {
        setCurrentDiapo((prev) => Math.min(prev + 1, totalDiapos - 1));
    }

    const handleDiapoPrev = () => {
        setCurrentDiapo((prev) => Math.max(prev - 1, 0));
    }


    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
                handleDiapoNext()
            } else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
                handleDiapoPrev()

            }
        }

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        }
    }, [])


    return (
        <Diapositive currentDiapo={currentDiapo} />
    )
}