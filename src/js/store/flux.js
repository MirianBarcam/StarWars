const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			charactersList: [],
			locationList:[],
			episodesList:[],
			elementClicked:{},
			favouriteElements:[]
		},
		actions: {

			fetchCharactersList: () => {
				fetch("https://rickandmortyapi.com/api/character", {
					method: "GET",
				})
					.then((resp) => {
						console.log('hace el fetch');
						return resp.json();
					})
					.then(data => setStore({ charactersList: data.results }));
			},

			fetchLocationList: () => {
				fetch("https://rickandmortyapi.com/api/location", {
					method: "GET",
				})
					.then((resp) => {
						return resp.json();
					})
					.then(data => setStore({ locationList: data.results }));
			},

			fetchEpisodesList: () => {
				fetch("https://rickandmortyapi.com/api/episode", {
					method: "GET",
				})
					.then((resp) => {
						return resp.json();
					})
					.then(data => setStore({ episodesList: data.results }));
			},

			setValueAndTypeElementClicked: (cardInfo,cardType) => {
				const element = cardInfo;
				element.cardtype = cardType;
				setStore({elementClicked:element});
			},
			
			addElementFavourite: (favouriteList,cardInfo)=>{
				cardInfo.key = cardInfo.id + cardInfo.name;
				setStore({
					favouriteElements:[...favouriteList,cardInfo]
				})
				return cardInfo.key;
			},

			deleteElementFavourite: (favouriteList,cardInfo)=>{
				const newfavouriteList = favouriteList.filter(card=>card.key!=cardInfo.key)
				setStore({
					favouriteElements:newfavouriteList
				})
			},

			setCharactersList: (newValue)=>{
				setStore({
					charactersList:newValue
				})
			},

			setLocationsList: (newValue)=>{
				setStore({
					locationList: newValue
				})
			},
			setEpisodesList: (newValue)=>{
				setStore({
					episodesList: newValue
				})
			},
			setFavouritesList:(newValue)=>{
				setStore({
					favouriteElements:newValue
				})
			}

		}
	}
};

export default getState;
