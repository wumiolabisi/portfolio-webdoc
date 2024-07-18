import Image from 'next/image'
import { motion, AnimatePresence } from "framer-motion"
import { titleVariants, imageVariants, textVariants, hoverEffect } from '@/_lib/motionVariants'

const Diapo1 = () => {
    return (
        <AnimatePresence>

            <div className="flex flex-col justify-center w-full h-full gap-4 px-8">


                <motion.div className="flex w-full justify-center"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ ease: "easeOut", duration: 1.9 }}
                    variants={titleVariants}
                >
                    <h1 className="text-white text-4xl font-bold text-center">Retour où tout a commencer</h1>
                </motion.div>


                <div className="flex flex-col gap-4 md:flex-row w-full items-center justify-center">
                    <div className="w-full md:w-3/6 h-96">
                        <div className="relative w-full">
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                transition={{ type: "spring", stiffness: 100, delay: 2 }}
                                variants={imageVariants}
                            >
                                <Image className="rounded-lg absolute md:top-0 md:left-16 w-1/2" src="/wumi-section-presentation-1-1.jpg"
                                    width={285}
                                    height={300}
                                    alt="Picture of the author" style={{ objectFit: "cover" }} />
                            </motion.div>
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                transition={{ type: "spring", stiffness: 100, delay: 2.2 }}
                                variants={imageVariants}
                            >
                                <Image className="rounded-lg absolute top-16 md:top-10 left-40 lg:left-64 w-1/2 drop-shadow-lg" src="/wumi-section-presentation-1-1.jpg"
                                    width={285}
                                    height={300}
                                    alt="Picture of the author" style={{ objectFit: "cover" }} />
                            </motion.div>
                        </div>
                    </div>
                    <motion.div className="flex w-full md:w-3/6 justify-center md:justify-start md:px-4"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ delay: 2.3 }}
                        variants={textVariants}
                    >
                        <article className="text-wrap py-8 w-80">
                            <p className="text-white text-2xl md:ml-4 sm:mt-4">
                                Dès mon plus jeune âge, j&#x27;ai utilisé l&#x27;ordinateur et
                                internet comme un monde de possibilités infinies.
                            </p>
                        </article>
                    </motion.div>
                </div>
            </div>
        </AnimatePresence >
    )
}
export default Diapo1;