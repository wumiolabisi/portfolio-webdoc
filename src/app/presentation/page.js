import Diapositive from "@/_components/Diapositive"

export default function Presentation() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between bg-grey-dark">
            <div className="container mx-auto h-screen">
                <div className="flex justify-center items-center md:h-screen h-fit">
                    <Diapositive>
                        <div className="flex flex-col md:flex-row-reverse items-center content-center justify-center w-full h-full">
                            <div className="flex w-full md:w-3/6 justify-center md:justify-start">
                                <article className="text-wrap py-24 md:py-0">
                                    <p className="text-white text-4xl font-bold">Retour où tout a commencer</p>
                                </article>
                            </div>
                        </div>
                    </Diapositive>

                </div>
            </div>
        </main>
    );
}