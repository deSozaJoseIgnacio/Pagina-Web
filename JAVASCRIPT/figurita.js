const contadores = document.querySelectorAll(".contador_java");

// Recuperar datos guardados
let valores = JSON.parse(localStorage.getItem("contadores")) || [];

contadores.forEach((contador_java, indice) => {
    const cantidad = contador_java.querySelector(".cantidad");
    const sumar = contador_java.querySelector(".sumar");
    const restar = contador_java.querySelector(".restar");

    // Ignorar contadores vacíos
    if (!cantidad || !sumar || !restar) return;

    if (valores[indice] === undefined) {
        valores[indice] = 0;
    }

    cantidad.textContent = valores[indice];

    sumar.addEventListener("click", () => {
        valores[indice]++;
        cantidad.textContent = valores[indice];

        localStorage.setItem("contadores", JSON.stringify(valores));
    });

    restar.addEventListener("click", () => {
        if (valores[indice] > 0) {
            valores[indice]--;
            cantidad.textContent = valores[indice];

            localStorage.setItem("contadores", JSON.stringify(valores));
        }
    });
});


// Botones del álbum
const botonCompletar = document.querySelector(".completar");
const botonVaciar = document.querySelector(".vaciar");

// Completar álbum
botonCompletar.addEventListener("click", () => {
    contadores.forEach((contador_java, indice) => {
        const cantidad = contador_java.querySelector(".cantidad");

        // Ignorar elementos que no sean figuritas
        if (!cantidad) return;

        if (valores[indice] === 0) {
            valores[indice] = 1;
            cantidad.textContent = 1;
        }
    });

    localStorage.setItem("contadores", JSON.stringify(valores));
});

// Vaciar álbum
botonVaciar.addEventListener("click", () => {
    contadores.forEach((contador_java, indice) => {
        const cantidad = contador_java.querySelector(".cantidad");

        // Ignorar elementos que no sean figuritas
        if (!cantidad) return;

        valores[indice] = 0;
        cantidad.textContent = 0;
    });

    localStorage.setItem("contadores", JSON.stringify(valores));
});