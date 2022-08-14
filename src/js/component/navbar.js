import React, { useState,useEffect,useContext } from "react";
import { Link, StaticRouter } from "react-router-dom";
import IconoRickAndMorty from "../../img/Rick_and_Morty.png";
import "../../styles/navbar.css";
import { Context } from "../store/appContext";

const Navbar = () => {
	const {store,actions} = useContext(Context);
	const [windowWidth, setWindowWidth] = useState(0);
	

	useEffect(() => {
		updateDimensions();
		window.addEventListener('resize', updateDimensions);
		return () =>
			window.removeEventListener('resize', updateDimensions);
	}, [])

	const updateDimensions = () => {
		const width = window.innerWidth
		setWindowWidth(width);
		
	}
	const generateFavouriteList = store.favouriteElements.map((favouriteElement)=>{
		return <li><a class="dropdown-item" href="#">{favouriteElement.name}</a></li>
	})
			
	

	return (
		<nav className="navbar">
			<Link to="/">
				<img className="navbar-brand mb-0 h1 icon-starWars" src={IconoRickAndMorty}></img>
			</Link>
			<div className={windowWidth<550 ? 'container-btn-favourite-mobile':'container-btn-favourite '} id="navbarScroll">
			<div class="nav-item dropdown">
					<button type="button" className="btn-favourite nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" >Favourites
						<span className="badge text-bg-secondary">{store.favouriteElements.length}</span>
					</button>
					<ul class="dropdown-menu">
						{generateFavouriteList}
					</ul>
			</div>
			</div>
		</nav>
	);
};
export default Navbar;