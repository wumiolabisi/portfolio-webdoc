const Diapositive = ({ currentDiapo, diapos }) => {
    const DiapoComponent = diapos[currentDiapo]?.component;

    return (
        <div className={`flex flex-col ${currentDiapo === 5 ? 'rounded-3xl w-full md:w-11/12 h-full md:h-4/5 overflow-hidden' : 'md:bg-light-white rounded-3xl w-full md:w-11/12 h-full md:h-4/5 overflow-hidden'}`}>
            {DiapoComponent && <DiapoComponent />}
        </div>
    );
};

export default Diapositive;