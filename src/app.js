/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const ancho = document.querySelector("#ancho");
const alto = document.querySelector("#alto");

window.onload = function() {
  //write your code here
  const card = document.querySelector("#card");
  const selectCard = document.querySelector("#selectCard");
  const palo = ["♦", "♥", "♠", "♣"];
  const numerocarta = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "J",
    "Q",
    "K"
  ];

  function generarCarta() {
    let numeropalo = Math.floor(Math.random() * 4);
    let numeroaleatorio = Math.floor(Math.random() * 12);
    let clase = "";

    if (palo[numeropalo] == "♥" || palo[numeropalo] == "♦") {
      clase = "roja";
    } else {
      clase = "negro";
    }

    let carta = `<div class=${clase} id="palo-superior"><h2>${palo[numeropalo]}</h2></div>
                <div class=${clase} id="numero"><h1>${numerocarta[numeroaleatorio]}</h1></div>
                <div class=${clase} id="palo-inferior"><h2>${palo[numeropalo]}</h2></div>`;

    card.innerHTML = carta;
  }
  generarCarta();

  selectCard.addEventListener("click", event => {
    generarCarta();
  });
};
