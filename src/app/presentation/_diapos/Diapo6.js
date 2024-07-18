import Button from '@/_components/Button'
import { imageVariants } from "@/_lib/motionVariants";
import { AnimatePresence, motion } from "framer-motion";
const Diapo6 = () => {
    return (
        <AnimatePresence>
            <div className="flex flex-col justify-center items-center w-full h-full gap-4 px-8">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ ease: "easeOut", duration: 0.9 }}
                    variants={imageVariants}
                ><p className="text-white text-4xl font-bold text-center">
                        Concrètement, qu'est-ce que je sais faire ?
                    </p>
                </motion.div>
                <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ ease: "easeOut", delay: 1, duation: 1.2 }}
                    variants={imageVariants}
                ><Button href="/" title="Commencer l'expérience" label="VOIR LA RÉPONSE" /></motion.div>
            </div>
        </AnimatePresence>
    )
}
export default Diapo6;