import cardoneimg from "../../Images/artistcardimgone.png";
import cardtwoimg from "../../Images/artistcardimgtwo.png";
import cardthreeimg from "../../Images/artistcardimgthree.png";
import cardfourimg from "../../Images/artistcardimgfour.png";
import leftarrow from "../../Images/Left arrow.png";
import rightarrow from "../../Images/Right Arrow.png";

const ArtistSection = () => {
  return (
    <div className="artist-section">
      <div className="title">
        <h1>Artist</h1>
      </div>
      <div className="artist-section-para">
        <p>
          Now, savor the recognition of your creativity and officially embrace
          the title of an artist
        </p>
      </div>
      <div className="artist-cards ">
        <div className="first-card">
          <img
            src={leftarrow}
            alt="Left Arrow"
            style={{
              position: "absolute",
              left: "0",
              marginTop: "80px",
             
            }}
          />
          <img src={cardoneimg} alt="" />
          <div className="card-body d-flex justify-content-around">
            <div className="left-side mt-2">
              <span id="kenter">Kenter</span>
            </div>
            <div className="right-side">
              <button id="votes" className="mt-2">
                30/100 VOTES
              </button>
            </div>
          </div>
        </div>
        <div className="second-card">
          <img src={cardtwoimg} alt="" />
          <div className="card-body d-flex justify-content-around">
            <div className="left-side mt-2">
              <span id="kenter">Kenter</span>
            </div>
            <div className="right-side">
              <button id="votes" className="mt-2">
                30/100 VOTES
              </button>
            </div>
          </div>
        </div>
        <div className="third-card">
          <img src={cardthreeimg} alt="" style={{ width: "300px" }} />
          <div className="card-body d-flex justify-content-around">
            <div className="left-side mt-2">
              <span id="kenter">Kenter</span>
            </div>
            <div className="fouth-side">
              <button id="votes" className="mt-2">
                30/100 VOTES
              </button>
            </div>
          </div>
        </div>
        <div className="fourth-card">
        <img
            src={rightarrow}
            alt="Left Arrow"
            style={{
              position: "absolute",
              right: "0",
              marginTop: "80px",
            
            
            }}
          />
          <img src={cardfourimg} alt="" style={{ width: "300px" }} />
          <div className="card-body d-flex justify-content-around">
            <div className="left-side mt-2">
              <span id="kenter">Kenter</span>
            </div>
            <div className="right-side">
              <button id="votes" className="mt-2">
                30/100 VOTES
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistSection;
