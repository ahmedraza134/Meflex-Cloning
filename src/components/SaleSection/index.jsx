import saleimgone from "../../Images/sale-sec-img-one.png";
import saleimgtwo from "../../Images/sale-sec-img-two.png";
import saleimgthree from "../../Images/sale-sec-img-three.png";
import saleimgfour from "../../Images/sale-sec-img-four.png";


const SaleSection = () => {
  return (
   
    <div className="sale-section container-xxl">
      <div className="sale-section-title">
        <h1>MEFLEX</h1>
        <h1>PUBLIC SALE OPEN</h1>
      </div>
      <div className="sale-section-para">
        <p>
          It will be sold on a first-come, first-served basis, and may be closed
          early if the amount of public sale is exhausted
        </p>
      </div>
      <div className="sale-section-date">
        <p>January 18, 2024 00:00 ~ February 29, 2024 23:59</p>
      </div>
      <div className="sale-section-btn">
        <button id="participate-btn">Participate Now</button>
        <button>Login <br /> <span id="for-investors">for investors</span></button>
      </div>
      <div className="sale-sec-images">
        <img src={saleimgone} alt="saleimgone" width={52} style={{ position: "relative", top: "-250px", left: "-400px"}} />
        <img src={saleimgtwo} alt="saleimgtwo" width={132} height={132} style={{ position: "relative", top: "-400px", left: "500px"}}/>
        <img src={saleimgthree} alt="saleimgthree" width={64} style={{ position: "relative", top: "-350px", left: "500px"}} />
        <img src={saleimgfour} alt="saleimgfour" width={84} style={{ position: "relative", top: "-200px", left: "400px"}} />
      </div>
    </div>
   
  );
};

export default SaleSection;
