import AnnouncementBanner from "./component/AnnouncementBanner";
import Navbar from "../src/component/Navbar";
import Slogan from "./component/Slogan";
import EnquirySection from "./component/EnquirySection";
import Footer from "../src/component/Footer";
import "../src/Css/Body.css";

function App() {
  return (
    <>
      <AnnouncementBanner />
      <Navbar />
      <Slogan />
      <EnquirySection />
      <Footer />
    </>
  );
}

export default App;
