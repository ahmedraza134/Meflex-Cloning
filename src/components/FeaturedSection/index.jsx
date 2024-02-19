import featuredimgone from "../../Images/featured imgone.png"
import featuredimgtwo from "../../Images/featured imgtwo.png"
import featuredimgthree from "../../Images/featured imgthree.png"
import featuredimgfour from "../../Images/featured imgfour.png"
import featuredimgfive from "../../Images/featured imgfive.png"
import featuredimgsix from "../../Images/featured imgsix.png"


const FeaturedSection = () => {
    return (
        <div className="featured-section">
            <h1>Featured On</h1>
            <div className="featured-images">
                <img src={featuredimgone} alt="" />
                <img src={featuredimgtwo} alt="" />
                <img src={featuredimgthree} alt="" />
                <img src={featuredimgfour} alt="" />
                <img src={featuredimgfive} alt="" />
                <img src={featuredimgsix} alt="" />
            </div>
        </div>
    );
}

export default FeaturedSection