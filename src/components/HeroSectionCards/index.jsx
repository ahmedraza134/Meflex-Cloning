import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import heroseccardicon from "../../Images/hero-sec-card-icon.png";
import heroseccardimgone from "../../Images/hero-sec-card-one.png";

const HeroSectionCards = () => {
  return (
    <div className="hero-sec-cards mt-5">
      <Card style={{ width: "300px", height: "422px"}} className="card-one border-2-">
        <Card.Img variant="top" src={heroseccardimgone} />
        <Card.Body>
          <div className="card-title">
            <img src={heroseccardicon} alt="heroseccardicon" width={13} />
            <h1 className="card-title">Winter Madagascar</h1>
          </div>
          <div className="card-id">
            <span>Clown#7143</span>
          </div>
          <div className="card-price d-flex justify-content-between border-1 ">
            <div className="price d-flex flex-column">
              <span>Price</span>
              <span>0.02 ETH</span>
            </div>
            <div className="highest-bid d-flex flex-column">
              <span>Highest Bid</span>
              <span>0.02 ETH</span>
            </div>
          </div>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem", position: "relative", right: "60px" }}>
        <Card.Img variant="top" src={heroseccardimgone} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the cards content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "300px", height: "422px"}} className="card-one border-2-">
        <Card.Img variant="top" src={heroseccardimgone} />
        <Card.Body>
          <div className="card-title">
            <img src={heroseccardicon} alt="heroseccardicon" width={13} />
            <h1 className="card-title">Winter Madagascar</h1>
          </div>
          <div className="card-id">
            <span>Clown#7143</span>
          </div>
          <div className="card-price d-flex justify-content-between border-1 ">
            <div className="price d-flex flex-column">
              <span>Price</span>
              <span>0.02 ETH</span>
            </div>
            <div className="highest-bid d-flex flex-column">
              <span>Highest Bid</span>
              <span>0.02 ETH</span>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default HeroSectionCards;
