import React, { useState } from "react";
import  CardsContainer  from "../../js/component/cardsContainer.js";
import "../../styles/home.css";
import Characters from "../store/characters.js";
import Locations from "../store/characters.js";
import Episodies from "../store/characters.js";

const Home = () => {
	const [allCharacters,setAllCharacters]=useState();
	const [allLocations,setAllLocations] =useState ();
	const [allEpisodies,setAllEpisodies] = useState();


	return(
	<>
		<Characters getAllCharacters={setAllCharacters}/>
		<Locations getAllLocations={setAllLocations}/>
		<Episodies getAllEpisodies={setAllEpisodies}/>
		<CardsContainer setInfoCards={allCharacters} setTitleContainerCards='Characters'/>
		<CardsContainer setInfoCards={allCharacters} setTitleContainerCards='Location'/>
		<CardsContainer setInfoCards={allCharacters} setTitleContainerCards='Episodies'/>
	</>
);
};
export default Home;
