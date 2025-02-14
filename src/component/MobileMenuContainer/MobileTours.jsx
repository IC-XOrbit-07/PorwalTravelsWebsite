import React from 'react'
import '../../Css/MobileMenuCss/MobileTours.css'
function MobileTours() {
  return (
    <div
      className="container mx-auto px-4"
      style={{ height: "80vh", overflow: "scroll" }}
    >
      <div className="flex flex-wrap -mx-2">
        <div
          className="mt-8 ml-3 w-5/12 sm:w-5/12 lg:w-5/12"
          style={{ width: "46%" }}
        >
          <p
            className="font-bold mx-3 state_name_tour"
            style={{ fontSize: "25px" }}
          >
            North
          </p>
          <div
            className="ml-4 mt-2 list-none flex gap-1.5 flex-col"
            style={{ color: "#515870" }}
          >
            <li>Jammu & Kashmir</li>
            <li>Himachal Pradesh</li>
            <li>Punjab</li>
            <li>Uttrakhand</li>
            <li>Haryana</li>
            <li>Uttar Pradesh</li>
          </div>
        </div>
        <div className="mt-8 ml-3" style={{ width: "46%" }}>
          <p
            className="font-bold mx-3 state_name_tour"
            style={{ fontSize: "25px" }}
          >
            North East
          </p>
          <div
            className="ml-4 mt-2 list-none flex gap-1.5 flex-col"
            style={{ color: "#515870" }}
          >
            <li>Arunachal Pradesh</li>
            <li>Assam</li>
            <li>Manipur</li>
            <li>Meghalaya</li>
            <li>Mizoram</li>
            <li>Nagaland</li>
            <li>Tripura</li>
          </div>
        </div>
        <div
          className="mt-8 ml-3 w-5/12 sm:w-5/12 lg:w-5/12"
          style={{ width: "46%" }}
        >
          <p
            className="font-bold mx-3 state_name_tour"
            style={{ fontSize: "25px" }}
          >
            South
          </p>
          <div
            className="ml-4 mt-2 list-none flex gap-1.5 flex-col"
            style={{ color: "#515870" }}
          >
            <li>Andhra Pradesh</li>
            <li>Telangana</li>
            <li>Karnataka</li>
            <li>Tamil Nadu</li>
            <li>Kerala</li>
          </div>
        </div>
        <div
          className="mt-8 ml-3 w-5/12 sm:w-5/12 lg:w-5/12"
          style={{ width: "46%" }}
        >
          <p
            className="font-bold mx-3 state_name_tour"
            style={{ fontSize: "25px" }}
          >
            East
          </p>
          <div
            className="ml-4 mt-2 list-none flex gap-1.5 flex-col"
            style={{ color: "#515870" }}
          >
            <li>Bihar</li>
            <li>Jharkhand</li>
            <li>Odisha</li>
            <li>West Bengal</li>
            <li>Sikkim</li>
          </div>
        </div>
        <div
          className="mt-8 ml-3 w-5/12 sm:w-5/12 lg:w-5/12"
          style={{ width: "46%" }}
        >
          <p
            className="font-bold mx-3 state_name_tour"
            style={{ fontSize: "25px" }}
          >
            West
          </p>
          <div
            className="ml-4 mt-2 list-none flex gap-1.5 flex-col"
            style={{ color: "#515870" }}
          >
            <li>Rajasthan</li>
            <li>Gujarat</li>
            <li>Maharashtra</li>
            <li>Goa</li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileTours;
