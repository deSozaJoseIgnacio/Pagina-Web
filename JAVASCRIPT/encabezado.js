async function cargarComponente(selector, ruta) {
    const contenedor = document.querySelector(selector);

    if (!contenedor) return;

    try {
        const respuesta = await fetch(ruta);

        if (!respuesta.ok) {
            throw new Error(`Error HTTP: ${respuesta.status}`);
        }

        contenedor.innerHTML = await respuesta.text();

        // Ejecutar la lógica del header después de cargar
        if (selector === "#header") {
            marcarPaginaActual();
        }

        // Ejecutar la lógica del botón de volver arriba después de cargar
        if (selector === "#btnsub") {
            configurarBtnVolverArriba();
        }
    } catch (error) {
    console.error(`No se pudo cargar ${ruta}:`, error);
    }
}

cargarComponente("#header", "/COMPONENTES/header.html");
cargarComponente("#footer", "/COMPONENTES/footer.html");
cargarComponente("#btnsub", "/COMPONENTES/btnsub.html");

function marcarPaginaActual() {
    let paginaActual = window.location.pathname.split("/").pop();

    // Todos los botones principales
    let enlaces = document.querySelectorAll("#header .botonencabezado");

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
}

function configurarBtnVolverArriba() {
    const btnVolverArriba = document.getElementById('btnVolverArriba');

    if (!btnVolverArriba) return;

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
}

