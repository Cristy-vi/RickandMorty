

//DATOS DE API

const API_URL = "https://rickandmortyapi.com/api";
const PERSONAJES_URL = "/character/id :";
const LOCATIONS_URL = "/location";
const EPISODES_URL = "/episode";

//////////////////////////////////

const OPCIONES = {croosDomain: true };

//variables
var character = prompt("Escribe el ID del personaje que quieres ver");

//Buscar Personajes
const BUSCAR_PERSONAJE = `${API_URL}${PERSONAJES_URL.replace("id :", ${character})}`;


const PERSONAJE = function(personaje) {
    document.write(`Hola, yo soy ${character.name}, mi especie es ${character.species}, soy originario de ${character.origin}`);
};


function pedirPersonaje(id) {
    const URL = `${API_URL}${PERSONAJE_URL(id)}`;
    $.get(URL, OPCIONES, PERSONAJE);




