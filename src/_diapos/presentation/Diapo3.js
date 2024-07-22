import Video from "@/_components/Video";
import { imageVariants, textVariants } from "@/_lib/motionVariants";
import { motion } from "framer-motion";

const Diapo3 = () => {
    return (
        <div className="flex flex-col md:flex-row-reverse items-center justify-center w-full h-full">
            <motion.div className="flex flex-col w-full md:w-3/6 justify-center content-center items-center h-fit"
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ type: "spring", stiffness: 100 }}
                variants={imageVariants}
            >
                <Video height="video-h-long" src="/videos/video-omowumi-page-home.mp4" replacementImg="/wumi-section-presentation-1.jpg" />
            </motion.div>
            <motion.div className="flex flex-col w-full md:w-3/6 justify-center items-center"
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.3 }}
                exit="exit"
                variants={textVariants}
            >
                <article className="text-wrap w-80">
                    <p className="text-white text-2xl pb-5">
                        Lorsqu'on a eu Internet, ce monde de possibilités s'est étendu davantage.
                    </p>
                    <p className="text-white text-2xl pb-5">
                        J'avais accès à des ressources en illimité : informations, tutos, partitions pour débutant, etc.
                    </p>
                    <p className="text-white text-2xl">
                        Mieux que ça, je pouvais contribuer et publier ma vision du monde.
                    </p>
                </article>
            </motion.div>

        </div>
    )
}
export default Diapo3;