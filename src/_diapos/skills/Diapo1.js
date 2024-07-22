import Image from 'next/image'
import { motion } from "framer-motion"
import { textVariants } from '@/_lib/motionVariants'

const Diapo1 = () => {

    return (

        <div className="flex flex-col justify-center w-full h-full gap-4 px-8">
            <div className="flex flex-col gap-4 md:flex-row w-full items-center justify-center">
                <div className="w-full">
                    <motion.div
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -10, opacity: 0 }}
                        transition={{ ease: "easeOut", duration: 1.9 }}
                        variants={textVariants}
                    >
                        <p className="text-white text-5xl text-center">Je sais tranformer des idées en interfaces intuitives et engageantes.</p>

                    </motion.div>

                </div>
            </div>
        </div>
    )
}
export default Diapo1;