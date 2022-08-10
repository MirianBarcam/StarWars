import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import imgDefault from "../../img/imgDefault.png";
import { Context } from "../store/appContext";

import "../../styles/cardSelected.css";

const CardSelected = () => {
	const { store, actions } = useContext(Context);
	const imageCardSelected = ()=>{
		if (store.elementClicked.image){
			return store.elementClicked.image;
		}else{return imgDefault}
	}

		const generateCardSelected=()=>{
			if(store.elementClicked.cardtype==='character'){
				return generateCharacterCard()
			}else if(store.elementClicked.cardtype==='location'){
				return generateLocationCard()
			}else if(store.elementClicked.cardtype==='episode'){
				return generateEpisodeCard()
			}
		}

		const generateCharacterCard=()=>{
			return (<>
					  <h6> Status: {store.elementClicked.status}</h6>
					  <h6> Species: {store.elementClicked.species}</h6>
					  <h6> Gender: {store.elementClicked.gender}</h6>
					  <h6> Origin name: {store.elementClicked.origin.name}</h6>
					  <h6> Location name: {store.elementClicked.location.name}</h6>
					  <h6> Created: {store.elementClicked.created}</h6>
					</>
					);
		}

		const generateLocationCard=()=>{
			return (<>
					<h6> Type: {store.elementClicked.type}</h6>
					<h6> Dimension: {store.elementClicked.dimension}</h6>
					<h6> Created: {store.elementClicked.created}</h6>
				</>
		  );
		}
		const generateEpisodeCard=()=>{
			return (<>
					<h6> Air date: {store.elementClicked.air_date}</h6>
					<h6> Episode: {store.elementClicked.episode}</h6>
					<h6> Created: {store.elementClicked.created}</h6>
		  </>
		  );
		}

	return (
		<>
		<div className="container-cardSelected">
			<div className="container-image">
			<img src={imageCardSelected()} className="img-fluid" alt="..."></img>
			</div>
			<div className="container-description">
			<h5 className="card-title">{store.elementClicked.name}</h5>
			{generateCardSelected()}	
			</div>
		</div>
		</>
	);
};
export default CardSelected;