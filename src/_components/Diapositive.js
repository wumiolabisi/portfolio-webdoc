import Diapo1 from "@/app/presentation/_diapos/Diapo1"
import Diapo2 from "@/app/presentation/_diapos/Diapo2"
import Diapo3 from "@/app/presentation/_diapos/Diapo3"
import Diapo4 from "@/app/presentation/_diapos/Diapo4"
import Diapo5 from "@/app/presentation/_diapos/Diapo5"
import Diapo6 from "@/app/presentation/_diapos/Diapo6"


const Diapositive = ({ currentDiapo }) => {
    const diapos = [
        { id: 1, component: Diapo1 },
        { id: 2, component: Diapo2 },
        { id: 3, component: Diapo3 },
        { id: 4, component: Diapo4 },
        { id: 5, component: Diapo5 },
        { id: 6, component: Diapo6 }
    ]

    const DiapoComponent = diapos[currentDiapo].component;
    if (diapos[currentDiapo] == 6) {
        return (
            <div className="flex flex-col rounded-3xl w-full md:w-11/12 h-full md:h-4/5 overflow-hidden ">
                {DiapoComponent && <DiapoComponent />}
            </div>
        )
    } else {
        return (
            <div className="flex flex-col md:bg-light-white rounded-3xl w-full md:w-11/12 h-full md:h-4/5 overflow-hidden ">
                {DiapoComponent && <DiapoComponent />}
            </div>
        )
    }

}
export default Diapositive;