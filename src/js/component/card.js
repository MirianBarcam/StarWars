import React, {useContext} from "react";
import "../../styles/card.css";
import { FaHeart} from "react-icons/fa";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Card = (props) => {
  const {store,actions} = useContext(Context);

  const addElementToFavourite = ()=>{
    props.cardInfo.favourite = !props.cardInfo.favourite;
    if(props.cardInfo.favourite){
      actions.addElementFavourite(store.favouriteElements,props.cardInfo)
    }else{
      props.cardInfo.key= actions.deleteElementFavourite(store.favouriteElements,props.cardInfo)
    }
  }
  return (
    <div className="card">
      <img src={props.setImage} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.setName}</h5>
        <h6 >{props.statementData1}{props.setData1}</h6>
        <h6>{props.statementData2}{props.setData2}</h6>
        <h6 >{props.statementData3}{props.setData3}</h6>
        <h6 >{props.statementData4}{props.setData4}</h6>
        <div className="container-btn-card">
        <Link to="/cardSelected">
          <button href="#" className="btn-learn-more-card" onClick={()=>actions.setValueAndTypeElementClicked(props.cardInfo,props.cardType)}>
            Learn more
          </button>
          </Link>
          <button href="#" className={props.cardInfo.favourite ? 'btn-favourite-card-on' : 'btn-favourite-card'} onClick={addElementToFavourite}>
           <FaHeart/>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Card;