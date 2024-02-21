import jacketimageone from "../../Images/jacket-one.png";
import jacketimagetwo from "../../Images/jacket-two.png";
import jacketimagethree from "../../Images/jacket-three.png";
import shoesimageone from "../../Images/shoes-one-img.png";
import shoesimagetwo from "../../Images/shoes-two-img.png";
import shoesimagethree from "../../Images/shoes-three-img.png";
import dressimageone from "../../Images/dress-one-image.png";
import dressimagetwo from "../../Images/dress-image-two.png";
import dressimagethree from "../../Images/dress-image-three.png";
import purseimageone from "../../Images/purse-one.png";
import purseimagetwo from "../../Images/purse-two.png";
import purseimagethree from "../../Images/purse-three.png";
import { FaArrowRight } from "react-icons/fa";

const CategoriesSection = () => {
  return (
    <div className="categories-section container-xxl ">
      <div className="categories-title">
        <h1>Categories</h1>
      </div>
      <div className="categories-para d-flex justify-content-between ">
        <p>Discover Fashion NFT by categories.</p>
        <button id="explore-categories" >Explore Categories <span className="ms-3"><FaArrowRight /></span></button>
      </div>

      <div className="categories-cards-main d-flex flex-wrap justify-content-center gap-5 mt-4 ">
        <div className="categories-card-container-one">
          <div className="categories-cards">
            <div className="categories-card-one d-flex">
              <img src={jacketimageone} alt="jacketimageone" />
              <div className="right-side d-flex flex-column p-1">
                <img src={jacketimagetwo} alt="" />
                <img src={jacketimagethree} alt="" className="mt-2" />
              </div>
            </div>
          </div>
          <div className="card-categories-text">
            <span className="d-block" id="categories-info">
              2000+ Collections
            </span>
            <span id="categories-title">Jackets</span>
          </div>
        </div>
        <div className="categories-card-container-one pb-2">
          <div className="categories-cards">
            <div className="categories-card-one d-flex">
              <img src={shoesimageone} alt="jacketimageone" />
              <div className="right-side d-flex flex-column p-1">
                <img src={shoesimagetwo} alt="" />
                <img src={shoesimagethree} alt="" className="mt-2" />
              </div>
            </div>
          </div>
          <div className="card-categories-text">
            <span className="d-block" id="categories-info">
              2000+ Collections
            </span>
            <span id="categories-title">Shoes</span>
          </div>
        </div>
        <div className="categories-card-main-container"></div>
        <div className="categories-card-container-one pb-2">
          <div className="categories-cards">
            <div className="categories-card-one d-flex">
              <img src={dressimageone} alt="jacketimageone" />
              <div className="right-side d-flex flex-column p-1">
                <img src={dressimagetwo} alt="" />
                <img src={dressimagethree} alt="" className="mt-2" />
              </div>
            </div>
          </div>
          <div className="card-categories-text">
            <span className="d-block" id="categories-info">
              2000+ Collections
            </span>
            <span id="categories-title">Dress</span>
          </div>
        </div>
        <div className="categories-card-container-one pb-2">
          <div className="categories-cards">
            <div className="categories-card-one d-flex">
              <img src={purseimageone} alt="jacketimageone" />
              <div className="right-side d-flex flex-column p-1">
                <img src={purseimagetwo} alt="" />
                <img src={purseimagethree} alt="" className="mt-2" />
              </div>
            </div>
          </div>
          <div className="card-categories-text">
            <span className="d-block" id="categories-info">
              2000+ Collections
            </span>
            <span id="categories-title">Purse</span>
          </div>
        </div>
        <div className="categories-card-container-one pb-2">
          <div className="categories-cards">
            <div className="categories-card-one d-flex">
              <img src={jacketimageone} alt="jacketimageone" />
              <div className="right-side d-flex flex-column p-1">
                <img src={jacketimagetwo} alt="" />
                <img src={jacketimagethree} alt="" className="mt-2" />
              </div>
            </div>
          </div>
          <div className="card-categories-text">
            <span className="d-block" id="categories-info">
              2000+ Collections
            </span>
            <span id="categories-title">Jackets</span>
          </div>
        </div>
        <div className="categories-card-container-one pb-2">
          <div className="categories-cards">
            <div className="categories-card-one d-flex">
              <img src={jacketimageone} alt="jacketimageone" />
              <div className="right-side d-flex flex-column p-1">
                <img src={jacketimagetwo} alt="" />
                <img src={jacketimagethree} alt="" className="mt-2" />
              </div>
            </div>
          </div>
          <div className="card-categories-text">
            <span className="d-block" id="categories-info">
              2000+ Collections
            </span>
            <span id="categories-title">Jackets</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesSection;
