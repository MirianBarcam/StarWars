const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			charactersList: [],
			locationList:[],
			episodesList:[]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			fetchCharactersList: () => {
				fetch("https://rickandmortyapi.com/api/character", {
					method: "GET",
				})
					.then((resp) => {
						console.log(resp.ok);
						console.log(resp.status);
						return resp.json();
					})
					.then(data => setStore({ charactersList: data.results }));

			},
			fetchLocationList: () => {
				fetch("https://rickandmortyapi.com/api/location", {
					method: "GET",
				})
					.then((resp) => {
						console.log(resp.ok);
						console.log(resp.status);
						return resp.json();
					})
					.then(data => setStore({ locationList: data.results }));

			},
			fetchEpisodesList: () => {
				fetch("https://rickandmortyapi.com/api/episode", {
					method: "GET",
				})
					.then((resp) => {
						console.log(resp.ok);
						console.log(resp.status);
						return resp.json();
					})
					.then(data => setStore({ episodesList: data.results }));

			},
		}
	}
};

export default getState;
