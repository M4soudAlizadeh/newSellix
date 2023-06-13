import Nav from "../pages/MainPageComponent/Nav";
import BanerSection from "./MainPageComponent/BanerSection";
import VideoSection from "./MainPageComponent/VideoSection";
import CryptoSection from "./MainPageComponent/CryptoSection";
import SellSection from "./MainPageComponent/SellSection";
import PaymentSection from "./MainPageComponent/PaymentSection";
import MarcketSection from "./MainPageComponent/MarcketSection";
import FraudSection from "./MainPageComponent/FraudSection";
import PowerSection from "./MainPageComponent/PowerSection";
import AppSection from "./MainPageComponent/AppSection";
import ReadyToSection from "./MainPageComponent/ReadyToSection";
import FooterSection from "./MainPageComponent/FooterSection";
import InformationSection from "./MainPageComponent/InformationSection";
import classes from "./MainPage.module.css";
const MainPage = () => {
  return (
    <div className={classes["MainPage"]}>
      <Nav />
      <BanerSection />
      <VideoSection />
      <CryptoSection />
      <SellSection />
      <PaymentSection />
      <PowerSection />
      <MarcketSection />
      <FraudSection />
      <AppSection />
      <ReadyToSection />
      <InformationSection />
      <FooterSection />
    </div>
  );
};
export default MainPage;
