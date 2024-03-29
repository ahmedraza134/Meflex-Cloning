import footerlogo from "../../Images/Meflex Logo.png";
import footergooglelink from "../../Images/footer-google-link.png";
import footertwitterlink from "../../Images/footer-twitter-link.png";
import footerinstagramlink from "../../Images/footer-instagram-link.png";
import footerlinkedinlink from "../../Images/footer-linkedin-link.png";
import footeryoutubelink from "../../Images/footer-youtube-link.png";

const Footer = () => {
  return (
    <>
    <div className="footer-row-one">
    <div className="footer-container-row-one container-xxl">
      <div className="footer-left-side">
        <img src={footerlogo} alt="footerlogo" className="align-self-start" />
        <span>Join Meflex Community</span>
        <div className="footer-links d-flex gap-3">
          <div className="google-link">
            <img src={footergooglelink} alt="google link" />
          </div>
          <div className="twitter-link">
            <img src={footertwitterlink} alt="twitter link" />
          </div>
          <div className="instagram-link">
            <img src={footerinstagramlink} alt="instagram link" />
          </div>
          <div className="linkedin-link">
            <img src={footerlinkedinlink} alt="linkedin link" />
          </div>
          <div className="youtube-link">
            <img src={footeryoutubelink} alt="youtube link" />
          </div>
        </div>
      </div>
      <div className="footer-right-side">
        <div className="footer-columns">
          <div className="footer-right-column-one">
            <span className="footer-right-column-heading">Marketplace</span>
            <span>Explore</span>
            <span>Contest</span>
            <span>Help</span>
          </div>
          <div className="footer-right-column-two">
            <span className="footer-right-column-heading">Links</span>
            <span>API</span>
            <span>Token</span>
            <span>Branding</span>
          </div>
          <div className="footer-right-column-three">
            <span className="footer-right-column-heading">Socials</span>
            <span>Facebook</span>
            <span>Discord</span>
            <span>Instagram</span>
          </div>
        </div>
      </div>
    </div>
    </div>
   <div className="footer-row-two">
      <div className="row-two-left-side">
        <span>© Copyright 2023 verona, Inc. All rights reserved.</span>
      </div>
      <div className="row-two-right-side">
        <span>Terms of Service</span>
        <span>Privacy Policy</span>
        <span>Cookies</span>
      </div>
   </div>
   </>
  );
};

export default Footer;
