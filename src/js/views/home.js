import React, { useState,useEffect,useContext } from "react";
import  CardsContainer  from "../../js/component/cardsContainer.js";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { useLocalStorage } from "../useLocalStorage.js";


const Home = () => {
	const {store,actions}=useContext(Context);
	const [cardsCharacters,setCardsCharacters]=useLocalStorage('cardsCharacters',store.charactersList);
	const [cardsLocations,setCardsLocations]=useLocalStorage('cardsLocations',store.locationList);
	const [cardsEpisodes,setCardsEpisodes]=useLocalStorage('cardsEpisodes',store.episodesList);
	const [cardsFavourites,setCardsFavourites]=useLocalStorage('cardsFavourites',store.favouriteElements);
	
	useEffect(()=>{
		actions.setCharactersList(cardsCharacters);
		actions.setLocationsList(cardsLocations);
		actions.setEpisodesList(cardsEpisodes);
		actions.setFavouritesList(cardsFavourites);
		if(store.charactersList.length===0 && store.locationList.length===0  && store.episodesList.length===0 ){
			actions.fetchCharactersList();
			actions.fetchLocationList();
			actions.fetchEpisodesList()
		}
	},[]);

	useEffect(()=>{
		console.log('guarda en localstore');
		setCardsCharacters(store.charactersList);
		setCardsLocations(store.locationList);
		setCardsEpisodes(store.episodesList);
		setCardsFavourites(store.favouriteElements);
	});

	return(
	<>
		<CardsContainer setInfoCards={store.charactersList} setTitleContainerCards='Characters'/>
		<CardsContainer setInfoCards={store.locationList} setTitleContainerCards='Locations'/>
		<CardsContainer setInfoCards={store.episodesList} setTitleContainerCards='Episodes'/>
	</>
);
};
export default Home;
