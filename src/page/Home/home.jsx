import AboutSmartTech from "../../components/Home/AboutSmartTech";
import BrandLogo from "../../components/Home/BrandLogo";
import TechnologiesSection from "../../components/Home/TechnologiesSection";
import PortfolioShowcase from "../../components/Home/PortfolioShowcase";
import CTASection from "../../components/Home/CTASection";
import Banner from "../../components/Home/Banner";
import AboutSmartTech2 from "../../components/Home/AboutSmartTech2";
const Home = () => {
  return (
    <>
      <div>
        <Banner />
        <AboutSmartTech />
        <BrandLogo />
        <AboutSmartTech2 />
        <TechnologiesSection />
        <PortfolioShowcase />
        <CTASection />
      </div>
    </>
  );
};

export default Home;
