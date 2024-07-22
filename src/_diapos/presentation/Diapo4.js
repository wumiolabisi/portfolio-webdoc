import { textVariants } from "@/_lib/motionVariants";
import { motion } from "framer-motion";

const Diapo4 = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center w-full h-full">
            <motion.div className="flex flex-col w-full md:w-3/6 justify-center items-center"
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2 }}
                exit="exit"
                variants={textVariants}
            >
                <article className="text-wrap w-80">
                    <p className="text-white text-2xl">
                        Après le bac, j'ai voulu suivre un cursus qui me permettrait de mettre les mains dans le camboui rapidement.
                    </p>
                </article>
            </motion.div>
            <motion.div className="flex flex-col w-full md:w-3/6 justify-center items-center"
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.4 }}
                exit="exit"
                variants={textVariants}
            >
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
            </motion.div>
        </div>
    )
}
export default Diapo4;