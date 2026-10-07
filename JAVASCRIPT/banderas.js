// Selecciona los botones de cada etapa del torneo
const botones = document.querySelectorAll(".instancia"); //punto 7

// Selecciona todos los equipos de la grilla
const equipos = document.querySelectorAll(
    ".equipo, .equipo_izquierda"
);

// Asigna un número a cada etapa para poder compararlas
const orden = {
    grupos: 0,
    "16avos": 1,
    "8vos": 2,
    "4tos": 3,
    semifinal: 4,
    final: 5,
    campeon: 6
};

// Agrega un evento de clic a cada botón de etapa
botones.forEach(boton => {

    boton.addEventListener("click", () => {

        // Obtiene el nivel de la etapa seleccionada
        const nivelSeleccionado =
            orden[boton.dataset.etapa];

        // Recorre todos los equipos de la grilla
        equipos.forEach(equipo => {

            // Obtiene la etapa en la que quedó cada equipo
            const nivelEquipo =
                orden[equipo.dataset.etapa];

            // Busca la información desplegable del equipo
            const plegable =
                equipo.querySelector(".plegable");

            // Oculta los equipos eliminados antes de la etapa seleccionada
            if (nivelEquipo < nivelSeleccionado) {

                equipo.classList.add("eliminado");
                plegable?.classList.add("eliminado");

            } else {

                // Muestra los equipos que siguen en esa etapa
                equipo.classList.remove("eliminado");
                plegable?.classList.remove("eliminado");

            }

        });

        // Quita el estado activo de todos los botones
        botones.forEach(b =>
            b.classList.remove("activo")
        );

        // Marca como activo el botón seleccionado
        boton.classList.add("activo");

    });

}); //Y todo esto dentro de un forEach (punto 7)