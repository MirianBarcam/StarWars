import React from "react";
import { Link } from "react-router-dom";
import IconoStarWars from "../../img/iconoStarWars.png";
import "../../styles/navbar.css";

export const Navbar = () => {
	return (
		<nav className="navbar mb-3">
			<Link to="/">
				<img className="navbar-brand mb-0 h1 icon_starWars" src={IconoStarWars}></img>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</div>
		</nav>
	);
};
