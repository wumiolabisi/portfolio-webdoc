import Diapositive from "@/_components/Diapositive"
import Video from "@/_components/Video";
import Image from 'next/image'

export default function Presentation() {
    return (
        <>
            <Diapositive classToAdd="hidden">
                <div className="flex flex-col justify-center w-full h-full gap-4 px-8">
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
            <Diapositive classToAdd="hidden">
                <div className="flex flex-col justify-center w-full h-full gap-4 px-8">
                    <div className="flex w-full justify-center">
                        <article className="text-wrap w-96">
                            <p className="text-white text-2xl text-center">
                                J'ai grandit à Montreuil, en banlieue parisienne. C'est ici que ma passion pour la création numérique a commencé
                            </p>
                        </article>
                    </div>
                    <div className="flex flex-col gap-4 md:flex-row w-full items-center justify-center">
                        <Video height="video-h-large" src="/videos/video-omowumi-page-home.mp4" replacementImg="/wumi-section-presentation-1.jpg" />
                    </div>

                </div>
            </Diapositive>
            <Diapositive classToAdd="hidden">
                <div className="flex flex-col md:flex-row-reverse items-center justify-center w-full h-full">
                    <div className="flex flex-col w-full md:w-3/6 justify-center content-center items-center h-fit">
                        <Video height="video-h-long" src="/videos/video-omowumi-page-home.mp4" replacementImg="/wumi-section-presentation-1.jpg" />
                    </div>
                    <div className="flex flex-col w-full md:w-3/6 justify-center items-center">
                        <article className="text-wrap w-80">
                            <p className="text-white text-2xl pb-5">
                                Lorsqu'on a eu Internet, j'étais très jeune.
                            </p>
                            <p className="text-white text-2xl pb-5">
                                Avec Internet, j'ai découvert que j'avais accès à des ressources en illimité : informations, tutos, partitions pour débutant, etc.
                            </p>
                            <p className="text-white text-2xl">
                                Je pouvais apprendre tout ce que je voulais sans quitter ma chambre ! Mieux que ça, je pouvais contribuer et publier ma vision du monde.
                            </p>
                        </article>
                    </div>
                </div>
            </Diapositive>
            <Diapositive classToAdd="hidden">
                <div className="flex flex-col md:flex-row justify-center w-full h-full">
                    <div className="flex flex-col w-full md:w-3/6 justify-center items-center">
                        <article className="text-wrap w-80">
                            <p className="text-white text-2xl">
                                Après le bac, j'ai voulu suivre un cursus qui me permettrait de mettre les mains dans le camboui rapidement.
                            </p>
                        </article>
                    </div>
                    <div className="flex flex-col w-full md:w-3/6 justify-center items-center">
                        <article className="text-wrap w-80">
                            <table className="text-white table-auto border-collapse">
                                <tbody>
                                    <tr>
                                        <td>
                                            2015
                                        </td>
                                        <td>
                                            BTS Services Informatiques aux Organisations
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            2016
                                        </td>
                                        <td>
                                            Licence Professionnelle Création et Développement numérique en ligne
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            2018
                                        </td>
                                        <td>
                                            Certification RNCP XXX
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            2023
                                        </td>
                                        <td>
                                            Certification RNCP XXX
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </article>
                    </div>
                </div>
            </Diapositive>
            <Diapositive>
                <div className="flex flex-col md:flex-row items-center justify-center w-full h-full">
                    <div className="flex flex-col w-full md:w-3/6 justify-center content-center items-center h-fit">
                        <Video height="video-h-long" src="/videos/video-omowumi-page-home.mp4" replacementImg="/wumi-section-presentation-1.jpg" />
                    </div>
                    <div className="flex flex-col w-full md:w-3/6 justify-center items-center">
                        <article className="text-wrap md:w-full w-96">
                            <p className="text-white text-2xl">
                                Grâce à mes expériences professionnelles, j'ai appris à être polyvalente et à travailler en équipe pour répondre aux besoins d'une entreprise.
                            </p>
                            <table className="text-white table-auto border-collapse">
                                <tbody>
                                    <tr>
                                        <td>
                                            2016-2018
                                        </td>
                                        <td>
                                            <h3 className="font-bold">NUMBERLY</h3>
                                            <p>Intégratrice e-mailing</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            2019-2021
                                        </td>
                                        <td>
                                            <h3 className="font-bold">DEV IN MOTION (FREELANCE)</h3>
                                            <p>Développeuse FullStack</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            2021-2023
                                        </td>
                                        <td>
                                            <h3 className="font-bold">KOUNTAC/KROSKEL</h3>
                                            <p>Développeuse WordPress</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            2023-2024
                                        </td>
                                        <td>
                                            <h3 className="font-bold">SOLOCAL MARKETING SERVICESL</h3>
                                            <p>Chargée de projets Webs/Webmaster</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </article>
                    </div>
                </div>
            </Diapositive>
        </>

    );
}