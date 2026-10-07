let paginaActual = window.location.pathname.split("/").pop();

// Todos los botones principales
let enlaces = document.querySelectorAll(".botonencabezado");

// Buscar la página actual entre los botones principales
enlaces.forEach(enlace => {

    let paginaEnlace = enlace.getAttribute("href");

    if (paginaEnlace) {

        paginaEnlace = paginaEnlace.split("/").pop();

        if (paginaEnlace === paginaActual) {
            enlace.classList.add("pagina-actual");
        }
    }

});


// ========================================
// MARCAR "ALBUM" EN LAS PÁGINAS DEL ÁLBUM
// ========================================

let rutaActual = window.location.pathname;

// Comprobar si estamos dentro de la carpeta paginas_del_album
if (rutaActual.includes("/paginas_del_album/")) {

    let album = document.querySelector(".album > .botonencabezado");

    if (album) {
        album.classList.add("pagina-actual");
    }
<<<<<<< HEAD
}

const btnVolverArriba = document.getElementById('btnVolverArriba');

// Función que controla la visibilidad del botón según el scroll
window.addEventListener('scroll', () => {
    // Si la página bajó más de 300 píxeles, mostramos el botón
    if (window.scrollY > 300) {
        btnVolverArriba.classList.add('mostrar');
    } else {
        btnVolverArriba.classList.remove('mostrar');
    }
});

// Evento al hacer clic en el botón para volver arriba con animación suave
btnVolverArriba.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});



=======
}
>>>>>>> c052072d1616993420ee06891d81a8ec57a79aa4
