import React from 'react'
import { useParams } from 'react-router-dom'
import BounceCards from '../Reactbits/BounceCards';

import raj_intro_image from '../Rajasthan Tourism/Rajasthan_Intro.jpg'

const images = [
    "https://picsum.photos/400/400?grayscale",
    "https://picsum.photos/500/500?grayscale",
    "https://picsum.photos/600/600?grayscale",
    "https://picsum.photos/700/700?grayscale",
    "https://picsum.photos/300/300?grayscale"
];

const transformStyles = [
    "rotate(5deg) translate(-150px)",
    "rotate(0deg) translate(-70px)",
    "rotate(-5deg)",
    "rotate(5deg) translate(70px)",
    "rotate(-5deg) translate(150px)"
];


function StateDescription() {
    const { name } = useParams();
    return (
        <>
            <div className="h-screen w-auto relative">
                <img
                    src={raj_intro_image}
                    alt=""
                    className="h-full w-full object-cover"
                />
                <div className="absolute bottom-36 left-1/2 transform -translate-x-1/2 text-white font-black text-5xl md:text-6xl lg:text-8xl flex flex-col">
                    Welcome to, {name}
                    <div style={{scale:".9",marginLeft:"-30px"}}>
                        <button className='text-2xl rounded-full' onClick={()=>{}}>
                            <a href="https://www.tourism.rajasthan.gov.in/" target='_blank' className='font-normal ml-6 md:ml-0'>Offical Website ↗</a>
                        </button>
                        {/* <hr className='relative w-auto mx-2.5 -mt-2' /> */}
                    </div>
                </div>

            </div>

            <div className='h-96 w-auto overflow-hidden font-bold text-4xl text-center mt-20 md:text-6xl'>
                Places to visit
                <div className='mt-10 justify-center flex'>
                    <BounceCards
                        className="custom-bounceCards"
                        images={images}
                        containerWidth={500}
                        containerHeight={250}
                        animationDelay={1}
                        animationStagger={0.08}
                        easeType="elastic.out(1, 0.5)"
                        transformStyles={transformStyles}
                        enableHover={false}
                    />
                </div>
            </div>
            
        </>
    )
}

export default StateDescription
    