import AnnouncementBanner from "./component/AnnouncementBanner";
import Navbar from "../src/component/Navbar";
import Slogan from "./component/Slogan";
import EnquirySection from "./component/EnquirySection";
import Footer from "../src/component/Footer";
import MobileTours from "./component/MobileMenuContainer/MobileTours";
import MobileBlogs from "./component/MobileMenuContainer/MobileBlogs";
import MobileFounders from "./component/MobileMenuContainer/MobileFounders";

import "../src/Css/Body.css";


import { BrowserRouter , Routes, Route } from "react-router-dom";
import StateDescription from "./component/StateDescription";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={
              <>
                <AnnouncementBanner />
                <Navbar />
                <Slogan />
                <EnquirySection />
                <Footer />
              </>
            }
          />


          <Route path="/mobiletours" element={
            <>
              <AnnouncementBanner/>
              <Navbar/>
              <MobileTours/>
            </>
          }
          />

          <Route path="/region/:name" element={<StateDescription/>} />
          
          <Route path="/mobileblogs" element={
            <>
              <AnnouncementBanner/>
              <Navbar/>
              <MobileBlogs/>
            </>
          }
          />

          <Route path="/mobilefounders" element={
            <>
              <AnnouncementBanner/>
              <Navbar/>
              <MobileFounders/>
            </>
          }
          />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
