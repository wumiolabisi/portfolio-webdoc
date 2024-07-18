
export default function Diapositive({ currentDiapo }) {
    const diapos = [
        { id: 1, content: "Diapo 1" },
        { id: 2, content: "Diapo2" },
        { id: 3, content: "Diapo3" },
        { id: 4, content: "Diapo4" },
        { id: 5, content: "Diapo5" }

    ]
    return (
        <div className="flex flex-col md:bg-light-white rounded-3xl w-full md:w-11/12 h-full md:h-4/5 overflow-hidden ">
            {diapos[currentDiapo] && (
                <div className="diapo-content">
                    <h1>{diapos[currentDiapo].content}</h1>
                </div>
            )}
        </div>
    )
}