import Diapositive from "@/_components/Diapositive"
import Image from 'next/image'

export default function Presentation() {
    return (
        <Diapositive>
            <div className="flex flex-col items-center content-center justify-center w-full h-full gap-4 px-8">
                <div className="flex w-full justify-center">
                    <h1 className="text-white text-4xl font-bold">Retour où tout a commencer</h1>
                </div>
                <div className="flex flex-col gap-4 md:flex-row w-full items-center justify-center">
                    <div className="w-full md:w-3/6 h-96">
                        <div className="relative w-full">
                            <Image className="rounded-lg absolute md:top-0 md:left-16 w-1/2" src="/wumi-section-presentation-1-1.jpg"
                                width={285}
                                height={300}
                                alt="Picture of the author" style={{ objectFit: "cover" }} />
                            <Image className="rounded-lg absolute top-16 md:top-10 left-40 lg:left-64 w-1/2 drop-shadow-lg" src="/wumi-section-presentation-1-1.jpg"
                                width={285}
                                height={300}
                                alt="Picture of the author" style={{ objectFit: "cover" }} />
                        </div>
                    </div>
                    <div className="flex w-full md:w-3/6 justify-center md:justify-start md:px-4">
                        <article className="text-wrap py-8 w-80">
                            <p className="text-white text-2xl md:ml-4 sm:mt-4">
                                Dès mon plus jeune âge, j&#x27;ai utilisé l&#x27;ordinateur et internet comme un monde de possibilités infinies.</p>
                        </article>
                    </div>
                </div>

            </div>
        </Diapositive>

    );
}