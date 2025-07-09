import React, { useEffect, useState } from 'react'

const Eyes = () => {

    const [rotate,setRotate] = useState(0);

    useEffect(()=>{
        window.addEventListener("mousemove",(e)=>{
            let mouseX = e.clientX
            let mouseY = e.clientY

            let x = mouseX - window.innerWidth/2;
            let y = mouseY - window.innerHeight/2;

            var angle = Math.atan2(y,x) * (180/Math.PI);
            setRotate(angle-180);
        })
    })
    return (
        <div className=' eyes w-full h-screen  overflow-hidden '>

            <div data-scroll data-scroll-speed ="-.7" className=' w-full h-full relative bg-center bg-cover bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
                <div  className="absolute gap-10 top-1/2 left-1/2 -translate-x-[50%] flex  -translate-y-[50%]">

                    <div className='w-[15vw] flex items-center justify-center rounded-full h-[15vw] bg-zinc-100'>
                        <div className='w-2/3 relative flex items-center justify-center h-2/3 rounded-full bg-black'>
                            <div style={{transform: `translate(-50%,-50%) rotate(${rotate}deg)`}} className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  line w-full h-10 '>
                                <div className='w-10 h-10 rounded-full bg-zinc-100'></div>
                            </div>

                        </div>
                    </div>
                    <div className='w-[15vw] flex items-center justify-center rounded-full h-[15vw] bg-zinc-100'>
                        <div className='w-2/3 relative  flex items-center justify-center h-2/3 rounded-full bg-black'>
                        <div style={{transform: `translate(-50%,-50%) rotate(${rotate}deg)`}} className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  line w-full h-10 '>
                                <div className='w-10 h-10 rounded-full bg-zinc-100'></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Eyes