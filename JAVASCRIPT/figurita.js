// Selecciona todos los contadores de figuritas
const contadores = document.querySelectorAll(".contador_java");

// Recupera el álbum guardado o crea uno vacío (los valores que estan en la pagina)
let album = JSON.parse(localStorage.getItem("album")) || {};

// Configura cada contador de figurita (son 979)
contadores.forEach(contador => {

    // Obtiene el identificador de la figurita
    const id = contador.dataset.id;

    // Busca la cantidad y los botones del contador
    const cantidad = contador.querySelector(".cantidad");
    const sumar = contador.querySelector(".sumar");
    const restar = contador.querySelector(".restar");

    // Si falta algún elemento necesario, no continúa
    if (!id || !cantidad || !sumar || !restar) {
        return;
    }
    // Inicializa la figurita en 0 si todavía no existe
    if (album[id] === undefined) {
        album[id] = 0;
    }

    // Muestra la cantidad guardada
    cantidad.textContent = album[id];

    // Aumenta la cantidad de la figurita
    sumar.addEventListener("click", () => {
        album[id]++;
        cantidad.textContent = album[id];

        // Guarda los cambios
        localStorage.setItem("album", JSON.stringify(album));
    });

    // Disminuye la cantidad sin permitir valores menores a 0
    restar.addEventListener("click", () => {
        if (album[id] > 0) {
            album[id]--;

            cantidad.textContent = album[id];

            // Guarda los cambios
            localStorage.setItem("album", JSON.stringify(album));
        }
    });
});

// Busca el botón para completar el álbum
const botonCompletar = document.querySelector(".completar");

if (botonCompletar) {
    botonCompletar.addEventListener("click", () => {

        // Pone todas las figuritas en 1.
        contadores.forEach(contador => {

            const id = contador.dataset.id;
            const cantidad = contador.querySelector(".cantidad");

            if (!id || !cantidad) {
                return;
            }

            album[id] = 1;
            cantidad.textContent = 1;
        });

        // Guarda el álbum actualizado.
        localStorage.setItem("album", JSON.stringify(album));
    });
}

// Busca el botón para vaciar el álbum.
const botonVaciar = document.querySelector(".vaciar");

if (botonVaciar) {
    botonVaciar.addEventListener("click", () => {

        // Pone todas las figuritas en 0.
        contadores.forEach(contador => {

            const id = contador.dataset.id;
            const cantidad = contador.querySelector(".cantidad");

            if (!id || !cantidad) {
                return;
            }

            album[id] = 0;
            cantidad.textContent = 0;
        });

        // Guarda el álbum actualizado.
        localStorage.setItem("album", JSON.stringify(album));
    });
}