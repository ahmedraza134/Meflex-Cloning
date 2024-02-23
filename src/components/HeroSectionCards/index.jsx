import Card from "react-bootstrap/Card";
import heroseccardicon from "../../Images/hero-sec-card-icon.png";
import heroseccardimgcenter from "../../Images/hero-sec-card-one.png";
import heroseccardimgleft from "../../Images/hero-sec-card-two.png";
import heroseccardimgright from "../../Images/hero-sec-card-three.png";

const HeroSectionCards = () => {
  return (
    <div className="hero-sec-cards">
      <Card className="card-left">
        <Card.Img
          className="hero-sec-card-img"
          variant="top"
          src={heroseccardimgcenter}
          style={{
            width: "300px",
            display: "flex",
            marginLeft: "10px",
            marginRight: "10px",
            marginTop: "10px",
            borderRadius: "12px",
          }}
        />
        <Card.Body>
          <div className="card-title">
            <img src={heroseccardicon} alt="heroseccardicon" />
            <h1>Winter Madagascar</h1>
          </div>
          <div className="card-id">
            <span>Clown#7143</span>
          </div>
          <div className="hero-section-card-price">
            <div className="price d-flex flex-column">
              <span className="hero-section-card-price-title">Price</span>
              <span className="hero-section-card-price-rate">0.02 ETH</span>
            </div>
            <div className="highest-bid d-flex flex-column">
              <span className="hero-section-card-price-title">Highest Bid</span>
              <span className="hero-section-card-price-rate">0.02 ETH</span>
            </div>
          </div>
        </Card.Body>
      </Card>
      <Card className="card-center">
        <Card.Img
          className="hero-sec-card-img"
          variant="top"
          src={heroseccardimgcenter}
          style={{
            width: "300px",
            marginLeft: "10px",
            marginRight: "10px",
            marginTop: "10px",
            borderRadius: "12px",
          }}
        />
        <Card.Body>
          <div className="card-title">
            <img src={heroseccardicon} alt="heroseccardicon" />
            <h1>Winter Madagascar</h1>
          </div>
          <div className="card-id">
            <span>Clown#7143</span>
          </div>
          <div className="hero-section-card-price">
            <div className="price d-flex flex-column">
              <span className="hero-section-card-price-title">Price</span>
              <span className="hero-section-card-price-rate">0.02 ETH</span>
            </div>
            <div className="highest-bid d-flex flex-column">
              <span className="hero-section-card-price-title">Highest Bid</span>
              <span className="hero-section-card-price-rate">0.02 ETH</span>
            </div>
          </div>
        </Card.Body>
      </Card>
      <Card className="card-right">
        <Card.Img
          className="hero-sec-card-img"
          variant="top"
          src={heroseccardimgcenter}
          style={{
            width: "300px",
            display: "flex",
            marginLeft: "10px",
            marginRight: "10px",
            marginTop: "10px",
            borderRadius: "12px",
          }}
        />
        <Card.Body>
          <div className="card-title">
            <img src={heroseccardicon} alt="heroseccardicon" />
            <h1>Winter Madagascar</h1>
          </div>
          <div className="card-id">
            <span>Clown#7143</span>
          </div>
          <div className="hero-section-card-price">
            <div className="price d-flex flex-column">
              <span className="hero-section-card-price-title">Price</span>
              <span className="hero-section-card-price-rate">0.02 ETH</span>
            </div>
            <div className="highest-bid d-flex flex-column">
              <span className="hero-section-card-price-title">Highest Bid</span>
              <span className="hero-section-card-price-rate">0.02 ETH</span>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default HeroSectionCards;
