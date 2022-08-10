import React from "react";
import Card from "./card.js";
import "../../styles/cardsContainer.css";

const CardsContainer = (props) => {

  const generateCards= props.setInfoCards?.map((infoCard)=>{
    if(props.setTitleContainerCards==='Characters'){
      return  <Card key={infoCard.id} cardInfo={infoCard} cardId={infoCard.id} cardType={'character'} setName={infoCard.name} setImage={infoCard.image} statementData1={'Name:'} setData1={infoCard.gender} statementData2={'Specie:'} setData2={infoCard.species} statementData3={'Status:'} setData3={infoCard.status} statementData4={'Origin:'} setData4={infoCard.origin.name}/>
    }else if(props.setTitleContainerCards==='Locations'){
      return <Card key={infoCard.id} cardInfo={infoCard} cardId={infoCard.id} cardType={'location'} setName={infoCard.name} statementData1={'Type:'} setData1={infoCard.type} statementData2={'Dimension:'} setData2={infoCard.dimension}/>
    }else if(props.setTitleContainerCards==='Episodes'){
      return <Card key={infoCard.id} cardInfo={infoCard} cardId={infoCard.id} cardType={'episode'} setName={infoCard.name} statementData1={'Air Date:'} setData1={infoCard.air_date} statementData2={'Episode:'} setData2={infoCard.episode}/>
    }
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
