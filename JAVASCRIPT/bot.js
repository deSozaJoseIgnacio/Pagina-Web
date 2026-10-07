let goles = 0;
let atajadas = 0;

let jugando = false;


// Posiciones posibles
const posiciones = [
    "izquierda",
    "derecha"
];


// Función para patear
function patear(posicionJugador) {

    // Evita hacer varios tiros al mismo tiempo
    if (jugando) {
        return;
    }

    jugando = true;

    const pelota = document.getElementById("pelota");
    const arquero = document.getElementById("arquero");
    const mensaje = document.getElementById("mensaje");

    // El arquero elige una posición al azar
    const posicionArquero =
        posiciones[Math.floor(Math.random() * posiciones.length)];


    // Mover pelota
    moverPelota(pelota, posicionJugador);


    // Mover arquero
    moverArquero(arquero, posicionArquero);


    // Esperar a que termine la animación
    setTimeout(function () {

        if (posicionJugador === posicionArquero) {

            // ATAJADA
            atajadas++;

            document.getElementById("atajadas").textContent =
                atajadas;

            mensaje.textContent =
                "🧤 ¡ATAJÓ EL ARQUERO!";

        } else {

            // GOL
            goles++;

            document.getElementById("goles").textContent =
                goles;

            mensaje.textContent =
                "⚽ ¡GOOOOOOL!";

        }

        // Esperar un poco antes del próximo tiro
        setTimeout(function () {

            resetearPosiciones();

            jugando = false;

            mensaje.textContent =
                "Elegí dónde patear";

        }, 1000);

    }, 600);
}


// ---------------- PELOTA ----------------

function moverPelota(pelota, posicion) {

    const posicionesPelota = {

        "izquierda": {
            left: "17%",
            bottom: "50%"
        },

        "derecha": {
            left: "83%",
            bottom: "50%"
        }

    };


    pelota.style.left =
        posicionesPelota[posicion].left;

    pelota.style.bottom =
        posicionesPelota[posicion].bottom;
}


// ---------------- ARQUERO ----------------

function moverArquero(arquero, posicion) {

    const posicionesArquero = {

        "izquierda": {
            left: "17%",
            bottom: "50%"
        },

        "derecha": {
            left: "83%",
            bottom: "50%"
        }

    };


    arquero.style.left =
        posicionesArquero[posicion].left;

    arquero.style.bottom =
        posicionesArquero[posicion].bottom;

    arquero.style.transform =
        "translateX(-50%) rotate(-15deg)";
}


// ---------------- RESET ----------------

function resetearPosiciones() {

    const pelota = document.getElementById("pelota");
    const arquero = document.getElementById("arquero");

    pelota.style.left = "50%";
    pelota.style.bottom = "-35px";

    arquero.style.left = "50%";
    arquero.style.bottom = "25px";

    arquero.style.transform =
        "translateX(-50%) rotate(0deg)";
}


// ---------------- REINICIAR ----------------

function reiniciar() {

    goles = 0;
    atajadas = 0;

    document.getElementById("goles").textContent = goles;
    document.getElementById("atajadas").textContent = atajadas;

    document.getElementById("mensaje").textContent =
        "Elegí dónde patear";

    resetearPosiciones();
}
