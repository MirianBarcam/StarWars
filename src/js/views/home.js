import React, { useState,useEffect,useContext } from "react";
import  CardsContainer  from "../../js/component/cardsContainer.js";
import "../../styles/home.css";
import { Context } from "../store/appContext";

const Home = () => {
	const {store,actions}=useContext(Context);
	//llamamos a la función para que traiga los datos y los guarde en charactersList
	useEffect(()=>{
		actions.fetchCharactersList();
		actions.fetchLocationList();
		actions.fetchEpisodesList()
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
