import nftstatssectionimage from "../../Images/nftstatssectionimage.png";


const NFTStatsSection = () => {
  return (
    <div className="nft-stats-section d-flex justify-content-around container-xxl flex-wrap">
      <div className="nft-stats-left">
        <h1 className="nft-stats-title">NFT marketplace for Fashion Enthusiast</h1>
     
      <div className="nft-counts d-flex gap-5">
        <div className="nft-count-one">
          <h1>12,000</h1>
          <span>Fashion NFTs collected</span>
        </div>
        <div className="nft-count-two">
          <h1>12,000</h1>
          <span>Earned by Designers</span>
        </div>
        <div className="nft-count-three">
          <h1>12,000</h1>
          <span>In Designer Royalties</span>
        </div>
        <div className="nft-count-four">
          <h1>12,000</h1>
          <span>Fashion NFT Market Cap</span>
        </div>
      </div>
      </div>
      <div className="nft-stats-right">
        <img src={nftstatssectionimage} alt="products image" style={{ position: "relative", top: "-120px" }} />
      </div>
    </div>
  );
};

export default NFTStatsSection;
