import React, { useState } from "react";
import "../Css/Navbar.css";
import Tours from "./Menuoptions/Tours";
import Offers from './Menuoptions/Offers';
import Blogs from "./Menuoptions/Blogs";
import Founders from "../component/Menuoptions/Founders"
import MobileMenuDialogue from "./MobileMenuContainer/MobileMenuDialogue";
import porwaltravelslogo from '/assets/Images/porwaltravelslogo.png'
import { Link } from "react-router-dom";

function Navbar() {
  // Disabling scroll on hamburger is set to true
  let disableScroll = ()=>{
    document.body.style.overflow='hidden';
  }

  let enableScroll = ()=>{
    document.body.style.overflow='auto';
  }
  const [hamburgerClicked, setHamburgerClicked] = useState(false);

  // Click state for toggling chevron direction
  const [toursClicked, setToursClicked] = useState(false);
  const [offersClicked, setOffersClicked] = useState(false);
  const [blogsClicked, setBlogsClicked] = useState(false);
  const [foundersClicked, setFoundersClicked] = useState(false);

  // Toggle hamburger menu visibility
  const showHamburgerCrossSign = () => {
    setHamburgerClicked(!hamburgerClicked);
  };

  const dragToEnquireForm = ()=>{
    // const scrollPosition = 1200;

    // Smooth scrolling to the specified scroll position
    window.scrollTo({
      top: 830, // Position you want to scroll to
      behavior: "smooth", // Enables smooth scrolling
    });
  };

  // Handle click to toggle SVG direction
  const handleClick = (item) => {
    if (item === "Tours") {
      setToursClicked(!toursClicked);
      setBlogsClicked(false);
      setOffersClicked(false);
      setFoundersClicked(false);
    } else if (item === "Offers") {
      setOffersClicked(!offersClicked);
      setToursClicked(false);
      setBlogsClicked(false);
      setFoundersClicked(false);
    } else if (item === "Blogs") {
      setBlogsClicked(!blogsClicked);
      setToursClicked(false);
      setOffersClicked(false);
      setFoundersClicked(false);
    } else if (item === "Founders") {
      setFoundersClicked(!foundersClicked);
      setToursClicked(false);
      setOffersClicked(false);
      setBlogsClicked(false);
    }
  };

  const topMenuOptions = ["Tours", "Offers", "Blogs", "Founders"];

  return (
    <>
      <div className="navbar_container_6e98">
        {/* Logo Section */}
        <div className="navbar_logo_132_h">
          <Link to="/">
            <img src={porwaltravelslogo} alt="" />
          </Link>
        </div>

        {/* Options Section */}
        <div className="navbar_options_container_e189_">
          {/* Navbar Options: Tours, Reviews, Pricing, Founders */}
          <div className="navabar_options_left_g162">
            {topMenuOptions.map((item) => (
              <div
                key={item}
                onClick={() => handleClick(item)} // Click to toggle SVG direction
                className="cursor-pointer menu_options_container hamburger_option_responsive"
                style={{ padding: ".5rem 1rem", borderRadius: "5px" }}
              >
                <a href="#" className="menuoption">
                  {item}

                  {/* Display the appropriate SVG based on click state */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className={`bi bi-chevron-${
                      (item === "Tours" && toursClicked) ||
                      (item === "Offers" && offersClicked) ||
                      (item === "Blogs" && blogsClicked) ||
                      (item === "Founders" && foundersClicked)
                        ? "up"
                        : "down"
                    }`}
                    viewBox="0 0 16 16"
                    style={{ scale: ".6", marginTop: "5px" }}
                  >
                    <path
                      fillRule="evenodd"
                      d={
                        (item === "Tours" && toursClicked) ||
                        (item === "Offers" && offersClicked) ||
                        (item === "Blogs" && blogsClicked) ||
                        (item === "Founders" && foundersClicked)
                          ? "M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"
                          : "M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                      }
                    />
                  </svg>
                </a>
              </div>
            ))}
          </div>

          {/* Right Section (Search, Contact, etc.) */}
          <div className="navbar_options_right_o921">
            {/* Search Icon */}
            {/* <div className="flex justify-center align-baseline hamburger_option_responsive">
              <svg
                className="hover:cursor-pointer"
                style={{ scale: "1" }}
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="20"
                viewBox="0 0 30 30"
              >
                <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
              </svg>
            </div> */}

            <button className="sales_button_ hamburger_option_responsive">
              <a
                href="https://www.linkedin.com/in/chinmay-porwal-945621270/"
                target="_blank"
              >
                Contact Developer
              </a>
            </button>

            <button className="contact_us_u827">
              <a href="https://wa.me/9829779499" target="_blank">
                Contact Us
              </a>
            </button>

            <div className="hamburger_icon" onClick={showHamburgerCrossSign}>
              {hamburgerClicked ? (
                <svg
                  fill="#000000"
                  height="15px"
                  width="15px"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 490 490"
                >
                  <polygon points="11.387,490 245,255.832 478.613,490 489.439,479.174 255.809,244.996 489.439,10.811 478.613,0 245,234.161 11.387,0 0.561,10.811 234.191,244.996 0.561,479.174 " />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M 3 5 A 1.0001 1.0001 0 1 0 3 7 L 21 7 A 1.0001 1.0001 0 1 0 21 5 L 3 5 z M 3 11 A 1.0001 1.0001 0 1 0 3 13 L 21 13 A 1.0001 1.0001 0 1 0 21 11 L 3 11 z M 3 17 A 1.0001 1.0001 0 1 0 3 19 L 21 19 A 1.0001 1.0001 0 1 0 21 17 L 3 17 z"></path>
                </svg>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic hover box */}
      {toursClicked && <Tours />}

      {offersClicked && <Offers />}

      {blogsClicked && <Blogs />}

      {foundersClicked && <Founders />}

      {/* Responsive menu option display */}
      {hamburgerClicked && <MobileMenuDialogue />}

      {hamburgerClicked && disableScroll()}

      {!hamburgerClicked && enableScroll()}
    </>
  );
}

export default Navbar;
