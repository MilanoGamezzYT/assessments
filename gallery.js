const fotos = [
    "pictures/Verstappen.png",
    "pictures/Albon.png",
    "pictures/Alonso.png",
    "pictures/Norris.png",
    "pictures/Hulkenberg.png",
    "pictures/Bottas.png",
    "pictures/DeVries.png",
    "pictures/Gasly.png",
    "pictures/Leclerc.png",
    "pictures/Russell.png"
];

let currentIndex = 0;
const Afbeelingen = document.getElementById("fotos");
const TerugKnop = document.getElementById("terug-knop");
const VerderKnop = document.getElementById("verder-knop");

function Fotos(Index) {
    Afbeelingen.src = fotos[Index];
}

function VolgendeFoto() {
    currentIndex = (currentIndex + 1) % fotos.length;
    Fotos(currentIndex);
}

function VorigeFoto() {
    currentIndex = (currentIndex - 1 + fotos.length) % fotos.length;
    Fotos(currentIndex);
}

TerugKnop.addEventListener("click", VorigeFoto);
VerderKnop.addEventListener("click", VolgendeFoto);

Fotos(currentIndex);