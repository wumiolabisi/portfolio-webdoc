import Video from "@/_components/Video";
import { imageVariants, textVariants } from "@/_lib/motionVariants";
import { AnimatePresence, motion } from "framer-motion";

const Diapo2 = () => {
    return (
        <AnimatePresence>
            <div className="flex flex-col justify-center w-full h-full gap-4 px-8">
                <motion.div className="flex w-full justify-center"
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.3 }}
                    exit="exit"
                    variants={textVariants}
                >
                    <article className="text-wrap w-96">
                        <p className="text-white text-2xl text-center">
                            J'ai grandit à Montreuil, en banlieue parisienne. C'est ici que ma passion pour la création numérique a commencé
                        </p>

                    </article>
                </motion.div>

                <motion.div className="flex flex-col gap-4 md:flex-row w-full items-center justify-center"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ type: "spring", stiffness: 100 }}
                    variants={imageVariants}
                >
                    <Video height="video-h-large" src="/videos/video-omowumi-page-home.mp4" replacementImg="/wumi-section-presentation-1.jpg" />
                </motion.div>


            </div>

        </AnimatePresence>

    )
}
export default Diapo2;