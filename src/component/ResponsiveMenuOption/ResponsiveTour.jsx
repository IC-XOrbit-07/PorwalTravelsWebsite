import React, { useState } from 'react'
import '../../Css/ResponsiveMenuOptions/ResponsiveMenuOptions.css'


function responsiveMenuOptions() {
  // const [showtours , setshowtours] = useState(false);
  const toursHandler = ()=>{
    // setshowtours(!showtours);
    console.log("Received");
  }
  return (
    <div id='mobile_menu_container'>
      <ul className='nav_options_holder flex flex-col gap-5 bg-slate-200 p-5'>
        <li className='menu_items mobile_tours_design'>
          <a href="#" onClick={toursHandler} className=''> Tours </a>
          {/* {(showtours && )} */}
        </li>
        {/* <li className='menu_items'><a href="#" className='mobile_tours_design'> Offers</a></li> */}
        <li className='menu_items mobile_tours_design' ><a href="#"> Blogs</a></li>
        <li className='menu_items mobile_tours_design'><a href="#"> Founders</a></li>
      </ul>
      <button type="button"></button>
    </div>
  )
}

export default responsiveMenuOptions
