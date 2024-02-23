import Navigationbar from "../../components/Navbar";
import HeroSection from "../../components/HeroSection";
import HeroSectionCards from "../../components/HeroSectionCards";
import FeaturedSection from "../../components/FeaturedSection";
import SaleSection from "../../components/SaleSection";
import ArtistSection from "../../components/ArtistSection";
import QualityCards from "../../components/QualityCardsSection";
import CategoriesSection from "../../components/CategoriesSection";
import ContestSection from "../../components/ContestSection";
import RankingSection from "../../components/RankingSection";
import NFTStatsSection from "../../components/NFTStatsSection";
import FashionCategory from "../../components/FashionCategory";
import AIFashionContestSection from "../../components/AIFashionContestSection";
import Footer from "../../components/Footer";
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
      <ContestSection />
      <RankingSection />
      <NFTStatsSection />
      <FashionCategory />
      <AIFashionContestSection />
      <Footer />  
    </>
  );
};

export default Home;
