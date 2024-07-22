import Image from 'next/image'
import { motion } from "framer-motion"
import { textVariants, sectionVariants } from '@/_lib/motionVariants'
import Link from 'next/link'
import { useState } from 'react'
import Button from '@/_components/Button'

const Diapo3 = () => {

    const [activeProject, setActiveProject] = useState("project1");

    return (


        <div className="flex flex-col justify-center w-full h-full gap-4 px-8">
            <div className="flex flex-col gap-4 md:flex-row w-full items-start justify-center">
                <div className="w-full md:w-1/5">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ type: "spring", stiffness: 100 }}
                        variants={textVariants}
                    >
                        <h2 className="text-white text-2xl font-bold">Mes projets récents</h2>
                        <ul>
                            <li className="text-white py-2"><button onClick={() => setActiveProject("project1")}>Page 28</button></li>
                            <li className="text-white py-2"><button onClick={() => setActiveProject("project2")}>Kroskel</button></li>
                            <Link target="_blank" href="https://github.com/wumiolabisi" alt="Accéder à mon profil github" title="Accéder à mon profil Github pour voir d'autres projets"><li className="text-white py-4">Voir d'autres projets</li></Link>
                            <Button href="" label="Télécharger mon CV" />
                        </ul>
                    </motion.div>

                </div>
                <motion.section
                    initial="hidden"
                    animate={activeProject === "project1" ? "visible" : "hidden"}
                    variants={sectionVariants}
                    transition={{ duration: 0.5 }}
                    id="project1"
                    className={activeProject === "project1" ? "flex flex-col md:rounded-3xl w-full height-section md:w-4/5 justify-center md:justify-start md:bg-light-white md:p-16 overflow-y-scroll" : "hidden"}
                >
                    <motion.div id="page28"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ delay: 0.2 }}
                        variants={textVariants}
                    >
                        <article className="text-wrap text-white pb-4">
                            <div className="flex flex-row justify-center py-8">
                                <Image className="rounded-lg mx-auto" src="/wumi-section-presentation-1-1.jpg"
                                    width={500}
                                    height={300}
                                    alt="Picture of the author" style={{ objectFit: "cover" }} />

                            </div>
                            <h2 className="text-xl font-bold">Conception et développement du catalogue de films PAGE 28</h2>
                            <ul>
                                <li><span className="badge font-bold text-sm">ADRESSE</span> <Link href="https://page28.fr">page28.fr</Link></li>
                                <li><span className="badge font-bold text-sm">STACK</span> WordPress, PHP, Javascript, SASS</li>
                                <li><span className="badge font-bold text-sm">ETAT DU PROJET</span> En ligne</li>
                                <li><span className="badge font-bold text-sm">CODE SOURCE</span> https://github.com/wumiolabisi/page28-wp-theme</li>
                            </ul>
                            <p className="my-4">
                                Page28 est un catalogue engagé de films et séries qui souhaite mettre en avant le travail des
                                femmes du cinéma. Imaginé par la réalisatrice Anne ROUX, ce projet a débuté durant l'été 2023.
                                Je continue de travailler activement sur ce projet, et le contenu du catalogue est en cours de mise à jour.
                            </p>
                            <h3 className="font-bold">Points clés de ce projet</h3>
                            <ul className='list-disc ps-8'>
                                <li>Conception des maquettes avec Photoshop et Penpot</li>
                                <li>Développement du thème sur mesure avec PHP, SASS et HTML</li>
                                <li>Laravel Mix pour optimiser les fichiers js et css</li>
                                <li>Mise en place d'un système de filtrage avec AJAX</li>
                            </ul>
                        </article>
                    </motion.div>
                </motion.section>
                <motion.section
                    initial="hidden"
                    animate={activeProject === "project2" ? "visible" : "hidden"}
                    variants={sectionVariants}
                    transition={{ duration: 0.5 }}
                    id="project2"
                    className={activeProject === "project2" ? "flex flex-col md:rounded-3xl w-full md:w-4/5 justify-center md:justify-start md:bg-light-white md:p-16 " : "hidden"}
                >
                    <motion.div id="page28"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ delay: 0.2 }}
                        variants={textVariants}
                    >
                        <article className="text-wrap text-white pb-4">
                            <div className="flex flex-row justify-center py-8">
                                <Image className="rounded-lg mx-auto" src="/wumi-section-presentation-1-1.jpg"
                                    width={500}
                                    height={300}
                                    alt="Picture of the author" style={{ objectFit: "cover" }} />

                            </div>
                            <h2 className="text-xl font-bold">Mise en place de la boutique e-commerce KROSKEL</h2>
                            <ul>
                                <li><span className="badge font-bold text-sm">ADRESSE</span> <Link href="https://kroskel.com">kroskel.com</Link></li>
                                <li><span className="badge font-bold text-sm">STACK</span> WordPress, PHP, Javascript, CSS/HTML</li>
                                <li><span className="badge font-bold text-sm">ETAT DU PROJET</span> En ligne</li>
                            </ul>
                            <p className="my-4">
                                Kroskel est une marque de vêtements franco-camerounaise créé en 2015 par Ornella Djoukui.
                                Pour améliorer la visibilité de sa marque en ligne, elle a fait appel à moi pour concevoir et mettre en place rapidement une
                                boutique en ligne et un blog.
                            </p>
                            <h3 className="font-bold">Points clés de ce projet</h3>
                            <ul className='list-disc ps-8'>
                                <li>Mise en place du site de A à Z : de la conception à la mise en place du thème avec Elementor et CSS/JS/HTML</li>
                                <li>Maintenance de la boutique : corrections des bugs, installations et mises à jour des plugins</li>
                                <li>SEO : Mise en place d'une stratégie SEO pour chaque page produit</li>
                                <li>Autres compétences mise en oeuvre durant cette expérience : intégration d'emails et suivi de campagne avec The Newsletter Plugin, montages vidéo pour la stratégie de communication</li>
                            </ul>
                        </article>
                    </motion.div>
                </motion.section>
            </div>
        </div>
    )
}
export default Diapo3;