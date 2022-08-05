import React from "react";
import "../../styles/card.css";
import { FaHeart} from "react-icons/fa";

const Card = (props) => {


  return (
    <div className="card">
      <img src={props.setImage} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.setName}</h5>
        <h6 >Gender:{props.setData1}</h6>
        <h6>Species:{props.setData2}</h6>
        <h6 >Status:{props.setData3}</h6>
        <h6 >Origin:{props.setData4}</h6>
        <div className="container-btn-card">
          <button href="#" className="btn-learn-more-card">
            Learn more
          </button>
          <button href="#" className="btn-favourite-card">
           <FaHeart/>
          </button>
        </div>

      </div>
    </div>
  );
};
export default Card;