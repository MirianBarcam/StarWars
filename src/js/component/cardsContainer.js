import React, {useState}from "react";
import Card from "./card.js";
import "../../styles/cardsContainer.css";

const CardsContainer = (props) => {

  const generateCards= props.setInfoCards?.map((infoCard)=>{
      return <Card key={infoCard.id} setName={infoCard.name} setImage={infoCard.image} setData1={infoCard.gender} setData2={infoCard.species} setData3={infoCard.status} setData4={infoCard.origin.name}/>
    })

  return (
    <div className="container-general">
      <h4 className="cardsContainer-title">{props.setTitleContainerCards}</h4>
      <div className="container-card">
        {generateCards}
      </div>
    </div>
  );
};

export default CardsContainer;
