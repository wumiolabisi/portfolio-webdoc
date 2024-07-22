import Image from 'next/image'
import { motion } from "framer-motion"
import { imageVariants, textVariants } from '@/_lib/motionVariants'

const Diapo1 = () => {

    return (


        <div className="flex flex-col justify-center w-full h-full gap-4 px-8">
            <div className="flex flex-col gap-4 md:flex-row w-full items-center justify-center">
                <div className="w-full md:w-2/5">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ type: "spring", stiffness: 100 }}
                        variants={imageVariants}
                    >
                        <Image className="rounded-lg mx-auto" src="/wumi-section-presentation-1-1.jpg"
                            width={285}
                            height={300}
                            alt="Picture of the author" style={{ objectFit: "cover" }} />
                    </motion.div>

                </div>

                <motion.div className="flex flex-col w-full md:w-3/5 justify-center md:justify-start"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ delay: 0.2 }}
                    variants={textVariants}
                >
                    <article className="text-wrap  pb-4">
                        <h2 className="text-white text-xl font-bold">UX/UI Design</h2>
                        <p className="text-white ">
                            J'aspire à créer des interfaces visuellement captivantes et ergonomiques,
                            avec une maîtrise des règles d'intégration web et des standards RGAA pour une
                            accessibilité optimale.
                        </p>
                    </article>
                    <article className="text-wrap pb-4">
                        <h2 className="text-white text-xl font-bold">Développement front & back</h2>
                        <p className="text-white ">
                            Je maîtrise le développement web complet, de la création d'interfaces dynamiques avec ReactJS et TailwindCSS,
                            à la conception d'architectures back-end robustes.
                        </p>
                    </article>
                    <article className="text-wrap ">
                        <h2 className="text-white text-xl font-bold">SEO</h2>
                        <p className="text-white ">
                            J'optimise les sites web avec plusieurs outils (GA4, HotJar, SemRush, etc.) pour améliorer leur visibilité et leur classement,
                            en mettant en œuvre des stratégies efficaces pour atteindre les objectifs de référencement.
                        </p>
                    </article>
                </motion.div>

            </div>
        </div>
    )
}
export default Diapo1;