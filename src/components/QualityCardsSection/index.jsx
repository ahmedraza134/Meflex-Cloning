import cardoneicon from "../../Images/quality-card-one-icon.png";
import cardtwoicon from "../../Images/quality-card-two-icon.png";
import cardthreeicon from "../../Images/quality-card-icon-three.png";
import cardfouricon from "../../Images/quality-card-icon-four.png";
import cardfiveicon from "../../Images/quality-card-icon-five.png";
import cardsixicon from "../../Images/quality-card-icon-six.png";
import cardsevenicon from "../../Images/quality-card-icon-seven.png";
import cardeighticon from "../../Images/quality-card-eight-icon.png";
import cardnineicon from "../../Images/quality-card-nine-icon.png";
import cardtenicon from "../../Images/quality-card-icon-ten.png";

const QualityCards = () => {
  return (
    <div className="quality-section container-xxl">
      <div className="quality-sec-title">
        <h1>You Design, We make them real.</h1>
      </div>
      <div className="quality-sec-para">
        <p>
          Meflex revolutionizes the world of fashion with AI-driven creativity.
          We empower designers and enthusiasts to explore <br /> uncharted realms of
          artificial intelligence  into fashion, blending technology and style
          for avant-garde expressions.
        </p>
      </div>
      <div className="quality-sec-cards">
        <div className="quality-sec-card-one  ">
          <img
            src={cardoneicon}
            alt="card icon"
            style={{ alignSelf: "center", marginBottom: "16px" }}
          />
          <h1>Customization at its Best</h1>
          <p> Tailoring to Your Needs.</p>
        </div>
        <div className="quality-sec-card-two">
          <img
            src={cardtwoicon}
            alt="card icon"
            style={{ alignSelf: "center", marginBottom: "16px" }}
          />
          <h1>From Blueprint to Reality</h1>
          <p>Our Commitment to Your Vision.</p>
        </div>
        <div className="quality-sec-card-three">
          <img
            src={cardthreeicon}
            alt="card icon"
            style={{ alignSelf: "center", marginBottom: "16px" }}
          />
          <h1>Quality Assurance</h1>
          <p> Where Precision Meets Production.</p>
        </div>
        <div className="quality-sec-card-four  ">
          <img
            src={cardfouricon}
            alt="card icon"
            style={{ alignSelf: "center", marginBottom: "16px" }}
          />
          <h1>Streamlined Production</h1>
          <p> Efficient, Effective, Exceptional.</p>
        </div>
        <div className="quality-sec-card-five  ">
          <img
            src={cardfiveicon}
            alt="card icon"
            style={{ alignSelf: "center", marginBottom: "16px" }}
          />
          <h1>Material Matters</h1>
          <p> Sourcing the Best for Your Designs.</p>
        </div>
        <div className="quality-sec-card-six  ">
          <img
            src={cardsixicon}
            alt="card icon"
            style={{ alignSelf: "center", marginBottom: "16px" }}
          />
          <h1>State-of-the-Art Facilities</h1>
          <p className="text-center">
            {" "}
            Modern Manufacturing for Modern Designs
          </p>
        </div>
        <div className="quality-sec-card-seven  ">
          <img
            src={cardsevenicon}
            alt="card icon"
            style={{ alignSelf: "center", marginBottom: "16px" }}
          />
          <h1>Sustainable Practices</h1>
          <p className="text-center">
            {" "}
            Eco-Friendly Manufacturing for a Better Tomorrow.
          </p>
        </div>
        <div className="quality-sec-card-eight  ">
          <img
            src={cardeighticon}
            alt="card icon"
            style={{ alignSelf: "center", marginBottom: "16px" }}
          />
          <h1>Collaborative Process</h1>
          <p className="text-center">
            {" "}
            Keeping You in the Loop Every Step of the Way.
          </p>
        </div>
        <div className="quality-sec-card-nine  ">
          <img
            src={cardnineicon}
            alt="card icon"
            style={{ alignSelf: "center", marginBottom: "16px" }}
          />
          <h1>Timeline Commitment</h1>
          <p>Delivering on Time, Every Time.</p>
        </div>
        <div className="quality-sec-card-ten  ">
          <img
            src={cardtenicon}
            alt="card icon"
            style={{ alignSelf: "center", marginBottom: "16px" }}
          />
          <h1>Skilled Craftsmanship</h1>
          <p className="text-center"> Where Art Meets Industrial Excellence.</p>
        </div>
        <div className="quality-sec-card-eleven  ">
          <img
            src={cardtenicon}
            alt="card icon"
            style={{ alignSelf: "center", marginBottom: "16px" }}
          />
          <h1>Global Reach</h1>
          <p> Shipping Your Designs Worldwide.</p>
        </div>
        <div className="quality-sec-card-twelve  ">
          <img
            src={cardtenicon}
            alt="card icon"
            style={{ alignSelf: "center", marginBottom: "16px" }}
          />
          <h1>Aftercare Services</h1>
          <p className="text-center"> Ensuring Product Longevity and Satisfaction.</p>
        </div>
      </div>
    </div>
  );
};
export default QualityCards;
