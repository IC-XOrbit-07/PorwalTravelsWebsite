import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "../../Css/MobileMenuCss/MobileMenuDialogue.css";


function MobileMenuDialogue() {

  // const hideelementId = ()=>{
  //   document.getElementById("mobile_menu_container").style.display="none";

  // }

  return (
    <div id="mobile_menu_container">
      {/* Tours Conatiner */}
      <div className="tours_container">
        <div className="menu_name_tours">
          <Link to="/mobiletours">Tours -&gt;</Link>
        </div>
      </div>

      {/* Offers Conatiner */}
      {/* <div className="tours_container">
        <div className="menu_name_tours">
          <a href="">Offers -&gt;</a>{" "}
        </div>
      </div> */}
      {/* Blogs Conatiner */}
      <div className="tours_container">
        <div className="menu_name_tours">
          <Link to="/mobileblogs">Blogs -&gt;</Link>
        </div>
      </div>
      {/* Founders Conatiner */}
      <div className="tours_container">
        <div className="menu_name_tours">
          <Link to="/mobilefounders">Founders -&gt;</Link>
        </div>
      </div>

      {/* Google Maps */}
      <div className="tours_container">
        <div className="menu_name_tours">
          <a href="https://www.google.com/maps/place/25%C2%B020'32.6%22N+74%C2%B037'24.8%22E/@25.3424006,74.6235565,17z/data=!3m1!4b1!4m4!3m3!8m2!3d25.3424006!4d74.6235565?entry=ttu&g_ep=EgoyMDI1MDIxMC4wIKXMDSoASAFQAw%3D%3D">
            Locate on Map -&gt;
          </a>
        </div>
      </div>

      {/* <input type="search" name="" id="" placeholder='Search for anything you want' className='w-full bg-slate-400 text-slate-950'/> */}

      <button
        type="button"
        className="w-full h-14 rounded-lg text-white text mt-4 font-semibold"
        style={{ backgroundColor: "coral", fontWeight: "bold" }}
      >
        Free Gift (Coming Soon) !!!
      </button>

      <button
        type="button"
        className="bg-black w-full h-14 rounded-lg text-white text mt-4 font-semibold"
      >
        <a
          href="https://www.linkedin.com/in/chinmay-porwal-945621270/"
          target="_blank"
        >
          Contact Developer
        </a>
      </button>

      <p className="mt-6 text-center" style={{ padding: "10px" }}>
        Shop No - 4 Bhadu Shakari Samiti Pur Road , Bhilwara , Rajasthan , India 
        9829779499 - Ram Prakash Porwal
        9950874991 - Ajay Kumar Porwal
      </p>
    </div>
  );
}

export default MobileMenuDialogue
