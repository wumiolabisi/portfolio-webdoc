import Video from "@/_components/Video";

const Diapo3 = () => {
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
}
export default Diapo3;