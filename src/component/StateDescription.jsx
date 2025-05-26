import React from 'react'
import { useParams } from 'react-router-dom'
// import SplitText from '../Reactbits/Splittext';
import ShinyText from '../Reactbits/ShinyText';

import raj_intro_image from '../Rajasthan Tourism/Rajasthan_Intro.jpg'

const handleAnimationComplete = () => {
    console.log('All letters have animated!');
};
  

function StateDescription() {
    const { name } = useParams();
    return (
        <>
            <div className="h-screen w-screen overflow-hidden relative">
                <img
                    src={raj_intro_image}
                    alt=""
                    className="h-full w-full object-cover"
                />
                <div className="absolute bottom-36 left-1/2 transform -translate-x-1/2 text-white font-black text-5xl md:text-6xl lg:text-8xl flex flex-col">
                    Welcome to, {name}
                    <div>
                        <button className='text-2xl mt-5 border border-grey rounded-full p-2 px-4 ' onClick={()=>{}}>
                            <a href="https://www.tourism.rajasthan.gov.in/" target='_blank'>
                                <ShinyText text="Explore" disabled={false} speed={3} className='custom-class'/>
                            </a>
                        </button>
                    </div>
                </div>

            </div>


        </>
    )
}

export default StateDescription
    