import React, { useState,useEffect,useContext } from "react";
import  CardsContainer  from "../../js/component/cardsContainer.js";
import "../../styles/home.css";
import { Context } from "../store/appContext";

const Home = () => {
	const {store,actions}=useContext(Context);
	useEffect(()=>{
		if(store.charactersList.length===0 && store.locationList.length===0  && store.episodesList.length===0 ){
			actions.fetchCharactersList();
			actions.fetchLocationList();
			actions.fetchEpisodesList()
		}
	},[]);

	return(
	<>
		<CardsContainer setInfoCards={store.charactersList} setTitleContainerCards='Characters'/>
		<CardsContainer setInfoCards={store.locationList} setTitleContainerCards='Locations'/>
		<CardsContainer setInfoCards={store.episodesList} setTitleContainerCards='Episodes'/>
	</>
);
};
export default Home;
