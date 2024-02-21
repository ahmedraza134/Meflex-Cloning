import seemoreicon from "../../Images/seemore-icon.png";


const ContestSection = () => {
  return (
    <div className="contest-section container-xl">
      <div className="title">
        <h1>Ongoing Contests</h1>
      </div>
      <div className="buttons">
        <button id="contest-sec-first-btn">a contests</button>
        <button>b contests</button>
        <button>c contests</button>
        <button>d contests</button>
        <button className="ml-3 px-5">See More <span><img src={seemoreicon} alt="seemore-icon" /></span></button>
      </div>
    </div>
  );
};

export default ContestSection;
