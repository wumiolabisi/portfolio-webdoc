import Video from "@/_components/Video";

const Diapo5 = () => {

    return (

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
    )
}

export default Diapo5;