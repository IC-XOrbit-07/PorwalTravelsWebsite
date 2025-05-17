import React from 'react'
import '../Css/Slogan.css'


function Slogan() {
  return (
    <>
      <div className="Slogan_Container_h273_">
        <div className="slogan">
          Make <div id="invisible_space"> </div>{" "}
          <span
            style={{ fontWeight: "700", padding: "2px", color: "coral" }}
            className="travel_word_class"
          >
            travel
          </span>{" "}
          your <br />{" "}
          <span style={{ fontWeight: "900" }} className="highlighter_">
            ultimate advantage
          </span>{" "}
        </div>
      </div>
      <div className="slogan-description">
        <a href="" className="slogan-description-inner">
          <span>Porwal Travels</span> offers personalized trips with custom
          itineraries, seamless bookings, and visa and passport assistance.
        </a>
      </div>

      <div className="flex flex-col justify-center gap-2 align-center our_partner">
        <div className="flex justify-center our_features_text text-4xl text-slate-500">
          Our Partners
        </div>
        <div className="scale-50 scroll_img_prop w-auto">
          <marquee behavior="" direction="" width="100%">
            <div className="flex gap-16">
              <img
                className="img_background_target"
                src="/assets/Images/Kesari.png"
                alt=""
              />
              {/* <img
                className="img_background_target"
                src="/assets/Images/Cox&KingsLogo.png"
                alt=""
              /> */}
              <img
                className="img_background_target"
                src="/assets/Images/FlexiholLogo.png"
                alt=""
              />
              <img
                className="img_background_target"
                src="/assets/Images/GauravYatraLogo.png"
                alt=""
              />
              <img
                className="img_background_target"
                src="/assets/Images/DuniyaDekho.png"
                alt=""
              />
            </div>
          </marquee>
        </div>
      </div>

      <div className="flex justify-center rounded-xl">
        <iframe
          className="rounded-xl m-16 md:m-18 xl:m-20 video_show"
          src="https://www.youtube.com/embed/6KL2QZ91kAM?controls=0&autohide=1&showinfo=0&rel=0&modestbranding=0&fs=0&iv_load_policy=3&autoplay=1&mute=1&start=0"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>

      {/* <div className='flex justify-center text-black mb-2 p-2 explore_earth_slogan_8ewy' style={{fontWeight:'bold'}}>Enquire about your destination</div> */}
    </>
  );
}

export default Slogan
