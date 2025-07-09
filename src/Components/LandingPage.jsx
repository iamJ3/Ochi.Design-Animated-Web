import { motion } from 'framer-motion';
import React from 'react'
import { MdArrowOutward } from "react-icons/md";

const LandingPage = () => {
    return (
        <div className='w-full h-screen px-20 bg-zinc-900 pt-1'>

            <div className="TextStructure font-semibold mt-20 sm:mt-32 md:mt-40 px-4 sm:px-10 md:px-20 ">
                {["Hey,", "Its me..", "jatin sharma"].map((item, index) => {
                    return (
                        <div className="masker">
                      
                            <div className="w-full md:w-fit flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                                {index === 1 && (
                                    <motion.div className="w-[20%] sm:w-[10vw]  h-[10%] sm:h-[6vw] rounded"></motion.div>
                                )}
                                <h1 className="uppercase tracking-tighter font-medium text-4xl sm:text-6xl md:text-8xl font-['Founders_Grotesk']">
                                    {item}
                                </h1>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className='MiniText border-t-[1px] border-zinc-600 mt-40 flex py-5 px-20 justify-between'>
                {[
                    "Imama Making it in React", "Will Start Three.Js Soon"].map((item, index) =>
                        <p className='text-md font-light tracking-wide leading-none'>{item}</p>
                    )}

                <div className="start flex items-center">
                    <div href='#' className=' cursor-pointer px-5  py-2 border-[2px] rounded-full border-r-zinc-500 font-bold capitalize text-sm '>Contact Here</div>
                    <div className='p-2' >
                        <MdArrowOutward />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage