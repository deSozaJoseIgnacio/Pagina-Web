const botones = document.querySelectorAll(".instancia");

const equipos = document.querySelectorAll(
    ".equipo, .equipo_izquierda"
);

const orden = {
    grupos: 0,
    "16avos": 1,
    "8vos": 2,
    "4tos": 3,
    semifinal: 4,
    final: 5,
    campeon: 6
};

botones.forEach(boton => {

    boton.addEventListener("click", () => {

        const nivelSeleccionado =
            orden[boton.dataset.etapa];

        equipos.forEach(equipo => {

            const nivelEquipo =
                orden[equipo.dataset.etapa];

            const plegable =
                equipo.querySelector(".plegable");

            if (nivelEquipo < nivelSeleccionado) {

                equipo.classList.add("eliminado");
                plegable?.classList.add("eliminado");

            } else {

                equipo.classList.remove("eliminado");
                plegable?.classList.remove("eliminado");

            }

        });

        botones.forEach(b =>
            b.classList.remove("activo")
        );

        boton.classList.add("activo");

    });

});