import React from 'react'
import { useParams } from 'react-router-dom'
import BounceCards from '../Reactbits/BounceCards';

import raj_intro_image from '../Reactbits/RajasthanPhoto/Intro.jpg'
import EnquirySection from './EnquirySection';

import image1 from '../Reactbits/RajasthanPhoto/1.jpg'
import image2 from '../Reactbits/RajasthanPhoto/2.jpg'
import image3 from '../Reactbits/RajasthanPhoto/3.jpg'
import image4 from '../Reactbits/RajasthanPhoto/4.jpg'
import image5 from '../Reactbits/RajasthanPhoto/5.jpg'
import Footer from './Footer';

const images = [image1,image2,image3,image4,image5];

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
                            <a href="https://www.tourism.rajasthan.gov.in/" target='_blank' className='font-normal ml-6 md:ml-0'>Official Website ↗</a>
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
                        enableHover={true}
                    />
                </div>
            </div>

            <div className="flex justify-center rounded-xl">
                {/* <iframe
                    className="rounded-xl m-16 md:m-18 xl:m-20 video_show"
                    src="https://www.youtube.com/embed/6KL2QZ91kAM?controls=0&autohide=1&showinfo=0&rel=0&modestbranding=0&fs=0&iv_load_policy=3&autoplay=1&mute=1&start=0"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe> */}

                <iframe className="rounded-xl m-16 md:m-18 xl:m-20 video_show" width="560" height="315" src="https://www.youtube-nocookie.com/embed/UYTYf6MwZj4?si=fJhgxgke4D0sCbUD?controls=0&autohide=1&showinfo=0&rel=0&modestbranding=0&fs=0&iv_load_policy=3&autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            </div>


            <EnquirySection></EnquirySection>
            <Footer/>
            
        </>
    )
}

export default StateDescription
    