import React from 'react'

const About = () => {
    return (
        <div className='bg-[#CDEA68] p-20 rounded-tl-3x1 rounded-tr-3x1 w-full text-black'>

            <h1
                className=' font-[Neue_Montreal tracking-tight text-[3vw] '>I create innovative 3D websites to deliver immersive experiences for users, leveraging React, the MERN stack, and Three.js. These websites are designed to showcase products, communicate complex ideas effectively, and attract top talent.

            </h1>
            <div className='border-[#738146] pt-10 flex  gap-5 mt-20 w-full border-t-[2px]'>
                <div
                    className='w-1/2'>
                    <h1 className='text-7xl '>My approch:</h1>
                    <button className=' flex uppercase gap-10 items-center rounded-full px-10 py-6 bg-[#000000] mt-10 text-3xl text-white'>
                        Read More
                        <div className=' w-3 h-3 bg-zinc-300 rounded-full'>

                        </div>
                    </button>
                </div>
                <div className='w-1/2 flex flex-wrap gap-4 rounded-3xl '>
                <img src="https://ochi-website-clone.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FaboutImg.1fe3502d.webp&w=750&q=75" alt="" />
                    {/* <div>
                        <img className='rounded-3xl object-cover w-[15vw] h-[20vw]' src="src/assets/vansh_img.jpg" alt="" />
                    </div>
                    <div>
                        <img className='rounded-3xl object-cover  w-[28vw] h-[20vw]' src="src/assets/vansh_2.jpg" alt="" />
                    </div>
                    <div>
                        <img className='rounded-3xl object-cover w-[50vw] h-[20vw]' src="src/assets/vansh_3.jpg" alt="" />
                    </div> */}
                </div>


            </div>
        </div>
    )
}

export default About