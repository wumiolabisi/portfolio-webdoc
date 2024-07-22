import { usePathname } from 'next/navigation'
const Diapositive = ({ currentDiapo, diapos }) => {
    const DiapoComponent = diapos[currentDiapo]?.component;
    const pathname = usePathname()

    return (
        <div className={`flex flex-col ${currentDiapo === 5 || pathname === '/skills' ? 'w-full md:w-11/12 h-full md:h-4/5' : 'md:bg-light-white rounded-3xl w-full md:w-11/12 h-full md:h-4/5 md:overflow-hidden'}`}>
            {DiapoComponent && <DiapoComponent />}
        </div>
    );
};

export default Diapositive;