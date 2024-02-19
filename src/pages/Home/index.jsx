import Navigationbar from "../../components/Navbar";
import HeroSection from "../../components/HeroSection";
import HeroSectionCards from "../../components/HeroSectionCards";
import FeaturedSection from "../../components/FeaturedSection";
import SaleSection from "../../components/SaleSection";
import ArtistSection from "../../components/ArtistSection";
import QualityCards from "../../components/QualityCardsSection";
import CategoriesSection from "../../components/CategoriesSection";
import "../../style.css";


const Home = () => {
  return (
    <>
      <Navigationbar />
      <HeroSection />
      <HeroSectionCards />
      <FeaturedSection />
      <SaleSection />
      <ArtistSection />
      <QualityCards />
      <CategoriesSection />
    </>
  );
};

export default Home;
