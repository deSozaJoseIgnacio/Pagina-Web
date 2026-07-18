const album = JSON.parse(localStorage.getItem("album")) || {};

const TOTAL_FIGURITAS = 979;

const valores = Object.values(album);

const obtenidas = valores.filter(v => v > 0).length;

const faltantes = TOTAL_FIGURITAS - obtenidas;

const porcentaje = ((obtenidas / TOTAL_FIGURITAS) * 100).toFixed(2);

const tiposRepetidos = valores.filter(v => v > 1).length;

const repetidasTotales = valores.reduce(
    (suma, v) => suma + Math.max(0, v - 1),
    0
);

document.querySelector("#obtenidas").textContent = obtenidas;
document.querySelector("#faltantes").textContent = faltantes;
document.querySelector("#porcentaje").textContent = porcentaje + "%";
document.querySelector("#tiposRepetidos").textContent = tiposRepetidos;
document.querySelector("#repetidasTotales").textContent = repetidasTotales;