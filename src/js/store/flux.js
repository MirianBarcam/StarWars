const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			charactersList: [],
			locationList:[],
			episodesList:[],
			elementClicked:{},
		},
		actions: {

			fetchCharactersList: () => {
				fetch("https://rickandmortyapi.com/api/character", {
					method: "GET",
				})
					.then((resp) => {
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

		}
	}
};

export default getState;
