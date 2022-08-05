import React,{useEffect, useState} from "react";
import "../../styles/cardsContainer.css";

const Locations = (props) => {

  //traemos todos los personajes
  useEffect(() => {
    console.log("Get de inicio");
    fetch("https://rickandmortyapi.com/api/location", {
      method: "GET",
    })
      .then((resp) => {
        console.log(resp.ok); // Será true (verdad) si la respuesta es exitosa.
        console.log(resp.status); // el código de estado = 200 o código = 400 etc.
        return resp.json(); // (regresa una promesa) will try to parse the result as json as return a promise that you can .then for results
      })
      .then((data) => {
        console.log("lo que ha traido el get del principio", data);
        props.getAllLocations(data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
    </>
  );
};
export default Locations;