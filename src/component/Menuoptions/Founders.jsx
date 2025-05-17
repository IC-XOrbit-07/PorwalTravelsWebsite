import React from 'react'
import '../../Css/MenuOptionCss/Founders.css'
import dadaphoto from '/assets/Images/Dada.jpg'
import papaphoto from '/assets/Images/Papa.png'

export default function Founders() {
  return (
    <div className="founder_container_c8172_ onscreenresponsive">
      <div className="person1">
        <img src={dadaphoto} alt="" className="person_photo" />
        <p className="name_founder mt-4">Mr Ram Prakash Porwal</p>
        <p className="position_founder">Management Team Lead</p>
        <p className="founder_description">
          As the founders of this travel business, I manage all paperwork,
          handle outreach, and offer expert consultancy for passports, visas,
          and both domestic and international tours. My focus is on providing
          seamless travel solutions and guiding clients through all their travel
          needs.
        </p>
        {/* <div>Any Social Media Link</div> */}
      </div>
      <div className="person1">
        <img src={papaphoto} alt="" className="person_photo" />
        <p className="name_founder mt-4">Mr Ajay Kumar Porwal</p>
        <p className="position_founder">Technical Team Lead</p>
        <p className="founder_description">
          As the co-founder, I handle all the technical aspects of the business,
          including submitting documents online, filling out forms, and ensuring
          all necessary work is completed. I focus on streamlining processes and
          making sure everything runs smoothly behind the scenes.
        </p>
        {/* <div>Any Social Media Link</div> */}
      </div>
    </div>
  );
}
