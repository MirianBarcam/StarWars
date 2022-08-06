import React from "react";
import Card from "./card.js";
import "../../styles/cardsContainer.css";

const CardsContainer = (props) => {



  const generateCards= props.setInfoCards?.map((infoCard)=>{
    if(props.setTitleContainerCards==='Characters'){
      return  <Card key={infoCard.id} setName={infoCard.name} setImage={infoCard.image} setData1={infoCard.gender} setData2={infoCard.species} setData3={infoCard.status} setData4={infoCard.origin.name}/>
    }else if(props.setTitleContainerCards==='Locations'){
      return <Card key={infoCard.id} setName={infoCard.name} setData1={infoCard.type} setData2={infoCard.dimension}/>
    }else if(props.setTitleContainerCards==='Episodes'){
      return <Card key={infoCard.id} setName={infoCard.name} setData1={infoCard.air_date} setData2={infoCard.episode}/>
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
