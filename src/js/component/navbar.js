import React from "react";
import { Link } from "react-router-dom";
import IconoRickAndMorty from "../../img/Rick_and_Morty.png";
import "../../styles/navbar.css";

export const Navbar = () => {
	return (
		<nav className="navbar mb-3">
			<Link to="/">
				<img className="navbar-brand mb-0 h1 icon_starWars" src={IconoRickAndMorty}></img>
			</Link>
			<div className="container_btn_favourite">
				<Link to="/demo">
					<button type="button" className="btn_favourite" >Favourites
					<span className="badge text-bg-secondary">4</span>
					</button>
				</Link>
			</div>
		</nav>
	);
};
