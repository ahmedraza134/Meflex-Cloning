import { FaArrowRight } from "react-icons/fa";
import Card from "react-bootstrap/Card";
import fashionimgone from "../../Images/fashion-category-img-one.png";
import fashionimgtwo from "../../Images/fashion-category-image-two.png";
import fashionimgthree from "../../Images/fashion-category-three.png";
import heroseccardicon from "../../Images/hero-sec-card-icon.png";

const FashionCategory = () => {
  return (
    <div className="fashion-category-section d-flex justify-content-around align-items-center container">
      <div className="first-side">
        <h1>Discover your <br /> Fashion</h1>
        <p>Explore new trending NFTs</p>
        <button>
          Explore <FaArrowRight />
        </button>
      </div>
      <div className="second-side d-flex gap-2">
        <Card
          style={{
            width: "280px",
            height: "422px",
          }}
        >
          <Card.Img variant="top" src={fashionimgone} />
          <Card.Body>
            <div className="card-title">
              <img src={heroseccardicon} alt="heroseccardicon" width={13} />
              <h1 className="card-title">Winter Madagascar</h1>
            </div>
            <div className="card-id">
              <span>Clown#7143</span>
            </div>
            <div className="card-price d-flex justify-content-between border border-1 mt-3 ">
              <div className="price d-flex flex-column ">
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
        <Card
          style={{
            width: "280px",
            height: "422px",
          }}
        >
          <Card.Img variant="top" src={fashionimgtwo} />
          <Card.Body>
            <div className="card-title">
              <img src={heroseccardicon} alt="heroseccardicon" width={13} />
              <h1 className="card-title">Winter Madagascar</h1>
            </div>
            <div className="card-id">
              <span>Clown#7143</span>
            </div>
            <div className="card-price d-flex justify-content-between border border-1 mt-3 ">
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
        <Card
          style={{
            width: "280px",
            height: "422px",
          }}
        >
          <Card.Img variant="top" src={fashionimgthree} width={278} height={241} />
          <Card.Body>
            <div className="card-title">
              <img src={heroseccardicon} alt="heroseccardicon" width={13} />
              <h1 className="card-title">Winter Madagascar</h1>
            </div>
            <div className="card-id">
              <span>Clown#7143</span>
            </div>
            <div className="card-price d-flex justify-content-between border border-1 mt-3 ">
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
    </div>
  );
};

export default FashionCategory;
