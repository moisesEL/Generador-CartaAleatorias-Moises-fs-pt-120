import "./style.css";

window.onload = () => {
  const palos = ["♦","♥", "♠","♣"];
  const numeros = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  // guardamos todos los elementos que usemos
  const carta = document.getElementById("carta");
  const palo1 = document.querySelector(".palo1");
  const palo2 = document.querySelector(".palo2");
  const numero = document.querySelector(".numero");
  const boton = document.getElementById("generarCarta");

  function generarCarta() {
    const numeroAleatorio = numeros[Math.floor(Math.random() * numeros.length)];
    const paloAleatorio = palos[Math.floor(Math.random() * palos.length)];

    carta.classList.remove("corazones", "diamantes", "picas", "treboles");

    if (paloAleatorio === "♥") carta.classList.add("corazones");
    if (paloAleatorio === "♦") carta.classList.add("diamantes");
    if (paloAleatorio === "♠") carta.classList.add("picas");
    if (paloAleatorio === "♣") carta.classList.add("treboles");

    
    palo1.textContent = paloAleatorio;
    palo2.textContent = paloAleatorio;
    numero.textContent = numeroAleatorio;
  
  }

  generarCarta();

  // Extra 1: boton generar carta nueva
  boton.addEventListener("click", generarCarta);
};
