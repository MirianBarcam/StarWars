import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import IconoRickAndMorty from "../../img/Rick_and_Morty.png";
import "../../styles/navbar.css";

const Navbar = () => {
	
//mapear las dimensiones de la pantalla con hook
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
//---------------------------------------------------

	return (
		<nav className="navbar">
			<Link to="/">
				<img className="navbar-brand mb-0 h1 icon-starWars" src={IconoRickAndMorty}></img>
			</Link>
			<div className={windowWidth<550 ? 'container-btn-favourite-mobile':'container-btn-favourite'}>
				<Link to="/demo">
					<button type="button" className="btn-favourite" >Favourites
						<span className="badge text-bg-secondary">4</span>
					</button>
				</Link>
			</div>
		</nav>
	);
};
export default Navbar;