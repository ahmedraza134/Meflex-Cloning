import jacketimageone from "../../Images/jacket-one.png";
import jacketimagetwo from "../../Images/jacket-two.png";
import jacketimagethree from "../../Images/jacket-three.png";

const CategoriesSection = () => {
  return (
    <div className="categories-section">
      <div className="categories-title">
        <h1>Categories</h1>
      </div>
      <div className="categories-para">
        <p>Discover Fashion NFT by categories.</p>
      </div>
      <div className="categories-card-container-one">
      <div className="categories-cards">
        <div className="categories-card-one d-flex">
          <img src={jacketimageone} alt="jacketimageone" />
          <div className="right-side d-flex flex-column">
            <img src={jacketimagetwo} alt="" />
            <img src={jacketimagethree} alt="" />
          </div>
          
        </div>
      </div>
     <span>Jackets</span>
    </div>
    </div>
  );
};

export default CategoriesSection;
