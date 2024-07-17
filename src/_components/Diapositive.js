export default function Diapositive({ children }) {
    return (
        <div className="flex md:bg-light-white rounded-3xl w-full md:w-11/12 h-full md:h-4/5 overflow-hidden">
            {children}
        </div>
    )
}