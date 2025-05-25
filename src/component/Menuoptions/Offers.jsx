import React from 'react'
import '../../Css/MenuOptionCss/Offers.css'
import offer_banner from '/assets/Images/Offers.png'

function Offers() {
    return (
        <div className='menu_box_enlarge_y263_offers hideOnResponsive'>
          <img src={offer_banner} className='bg-black rounded-xl w-full h-full object-cover' alt=""/>
        </div>
    )
}

export default Offers

