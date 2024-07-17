'use client'
import keyboardListeners from '@/_lib/keyboardListeners'

export default function Diapositive({ children, classToAdd }) {
    return (
        <div className={"flex flex-col md:bg-light-white rounded-3xl w-full md:w-11/12 h-full md:h-4/5 overflow-hidden " + classToAdd}>
            {children}
        </div>
    )
}