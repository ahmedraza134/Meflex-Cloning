import tableimgone from "../../Images/tableimgone.png";
import tableimgtwo from "../../Images/tableimgtwo.png";
import tableimgthree from "../../Images/tableimgthree.png";
import tableimgfour from "../../Images/tableimgfour.png";
import tableimgfive from "../../Images/tableimgfive.png";
import tableimgsix from "../../Images/tableimgsix.png";
import tableimgseven from "../../Images/tableimgseven.png";
import tableimgeight from "../../Images/tableimageeight.png";
import tableimgnine from "../../Images/tableimgnine.png";
import tableimgten from "../../Images/tableimgten.png";

const RankingSection = () => {
  return (
    <div className="ranking-section container ">
      <div className="ranking-title">
        <h1>Ranking</h1>
      </div>
      <div className="table-container d-flex justify-content-space-between">
      <table>
        <thead>
          <tr>
            <th className="table-heading">#</th>
            <th className="table-heading">Creators</th>
            <th className="table-heading text-center ">Vote</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              <img src={tableimgone} alt="" />
              <span className="creators-name">GoddesEirene</span>
            </td>
            <td>
              <button className="table-vote-btn">950</button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              <img src={tableimgtwo} alt="" />
              <span className="creators-name">Winter Madagascar</span>
            </td>
            <td>
              <button  className="table-vote-btn">750</button>
            </td>
          </tr>
          <tr >
            <td>3</td>
            <td>
              <img src={tableimgthree} alt="" />
              <span className="creators-name">850</span>
            </td>
            <td>
              <button  className="table-vote-btn">650</button>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>
              <img src={tableimgfour} alt="" />
              <span className="creators-name">Madman</span>
            </td>
            <td>
              <button  className="table-vote-btn">450</button>
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>
              <img src={tableimgfive} alt="" />
              <span className="creators-name">GoddesEirene</span>
            </td>
            <td>
              <button  className="table-vote-btn">100</button>
            </td>
          </tr>
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th className="table-heading">#</th>
            <th className="table-heading">Creators</th>
            <th className="table-heading text-center ">Vote</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              <img src={tableimgsix} alt="" />
              <span className="creators-name">GoddesEirene</span>
            </td>
            <td>
              <button className="table-vote-btn">300</button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              <img src={tableimgseven} alt="" />
              <span className="creators-name">Winter Madagascar</span>
            </td>
            <td>
              <button  className="table-vote-btn">400</button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>
              <img src={tableimgeight} alt="" />
              <span className="creators-name">SpaceExplorer</span>
            </td>
            <td>
              <button  className="table-vote-btn">500</button>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>
              <img src={tableimgnine} alt="" />
              <span className="creators-name">Madman</span>
            </td>
            <td>
              <button  className="table-vote-btn">600</button>
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>
              <img src={tableimgten} alt="" />
              <span className="creators-name">GoddesEirene</span>
            </td>
            <td>
              <button  className="table-vote-btn">150</button>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default RankingSection;
