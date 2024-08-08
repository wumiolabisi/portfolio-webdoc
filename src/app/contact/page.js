'use client';
import { textVariants } from '@/_lib/motionVariants';
import ParticleBackground from '../skills/_3d/ParticleBackground';
import { AnimatePresence, motion } from 'framer-motion';

export default function Skills() {

    return (
        <div className="relative">
            <ParticleBackground />
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="flex flex-row justify-center items-center h-full">
                    <AnimatePresence mode="wait">
                        <div className="flex flex-col justify-center w-full h-full gap-4 px-8">
                            <div className="flex flex-col gap-4 md:flex-row w-full items-center justify-center">
                                <div className="w-full">
                                    <motion.div className='w-full'
                                        initial={{ x: -10, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        exit={{ x: -10, opacity: 0 }}
                                        transition={{ ease: "easeOut", duration: 0.5 }}
                                        variants={textVariants}
                                    >
                                        <p className="text-white md:text-5xl text-2xl text-center m-4 font-bold">Contactez-moi par e-mail</p>
                                    </motion.div>
                                    <motion.div className='w-full'
                                        initial={{ x: -10, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        exit={{ x: -10, opacity: 0 }}
                                        transition={{ ease: "easeOut", duration: 0.5 }}
                                        variants={textVariants}
                                    >
                                        <p className="text-wrap text-white md:text-5xl text-2xl text-center">wumi.olabisi@gmail.com</p>
                                        <div></div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
