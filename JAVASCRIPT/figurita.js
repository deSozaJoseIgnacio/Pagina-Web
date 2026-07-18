const contadores = document.querySelectorAll(".contador_java");

let album = JSON.parse(localStorage.getItem("album")) || {};

contadores.forEach(contador => {

    const id = contador.dataset.id;

    const cantidad = contador.querySelector(".cantidad");
    const sumar = contador.querySelector(".sumar");
    const restar = contador.querySelector(".restar");

    if (!id || !cantidad || !sumar || !restar) return;

    if (album[id] === undefined) {
        album[id] = 0;
    }

    cantidad.textContent = album[id];

    sumar.addEventListener("click", () => {
        album[id]++;
        cantidad.textContent = album[id];

        localStorage.setItem("album", JSON.stringify(album));
    });

    restar.addEventListener("click", () => {
        if (album[id] > 0) {
            album[id]--;

            cantidad.textContent = album[id];

            localStorage.setItem("album", JSON.stringify(album));
        }
    });
});

const botonCompletar = document.querySelector(".completar");

if (botonCompletar) {
    botonCompletar.addEventListener("click", () => {

        contadores.forEach(contador => {

            const id = contador.dataset.id;
            const cantidad = contador.querySelector(".cantidad");

            if (!id || !cantidad) return;

            album[id] = 1;
            cantidad.textContent = 1;
        });

        localStorage.setItem("album", JSON.stringify(album));
    });
}

const botonVaciar = document.querySelector(".vaciar");

if (botonVaciar) {
    botonVaciar.addEventListener("click", () => {

        contadores.forEach(contador => {

            const id = contador.dataset.id;
            const cantidad = contador.querySelector(".cantidad");

            if (!id || !cantidad) return;

            album[id] = 0;
            cantidad.textContent = 0;
        });

        localStorage.setItem("album", JSON.stringify(album));
    });
}

