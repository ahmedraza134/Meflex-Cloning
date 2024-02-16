import roundimgone from "../../Images/roundimgone.png";
import roundimgtwo from "../../Images/roundimgtwo.png";
import roundimgthree from "../../Images/roundimgthree.png";
import { FaArrowRight } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-sec-title">
        <h1>
          MEFLEX, AI Fashion <br /> Contest Platform{" "}
        </h1>
      </div>
      <div className="hero-sec-para">
        <p>Design,create,store and trade unique NFTs easily!</p>
      </div>
      <div className="hero-sec-rounded-image">
        <img src={roundimgone} alt="roundimgone" />
        <img
          src={roundimgtwo}
          alt="roundimgtwo"
          className="rounded-image-two"
        />
        <img
          src={roundimgthree}
          alt="roundimgthree"
          className="rounded-image-three"
        />
        <span>+50K</span>
      </div>
      <div className="hero-sec-btn">
        <span>Mint Design with AI</span>
        <FaArrowRight style={{ color: "white", marginLeft: "11px" }} />
      </div>
    </div>
  );
};

export default HeroSection;
