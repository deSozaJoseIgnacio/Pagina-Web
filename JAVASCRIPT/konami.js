const codigoKonami = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a"
];

let posicion = 0;

document.addEventListener("keydown", function(event) {

    if (event.key === codigoKonami[posicion]) {
        posicion++;

        // Si se completó el código
        if (posicion === codigoKonami.length) {
            window.location.href = "../../HTML/bot.html"; // Redirige a la página deseada
        }

    } else {
        // Si se equivoca, vuelve a empezar
        posicion = 0;
    }

});