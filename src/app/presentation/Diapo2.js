import Video from "@/_components/Video";

const Diapo2 = () => {
    return (

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
    )
}
export default Diapo2;