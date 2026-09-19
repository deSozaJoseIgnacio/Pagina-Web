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
}