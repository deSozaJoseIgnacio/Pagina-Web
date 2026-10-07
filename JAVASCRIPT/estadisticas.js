const album = JSON.parse(localStorage.getItem("album")) || {};

<<<<<<< HEAD
const TOTAL_FIGURITAS = 980;  //Se define en TOTAL_FIGURITAS la cantidad de figuritas totales que tiene el album (979)
=======
const TOTAL_FIGURITAS = 979;  //Se define en TOTAL_FIGURITAS la cantidad de figuritas totales que tiene el album (979)
>>>>>>> c052072d1616993420ee06891d81a8ec57a79aa4

const valores = Object.values(album); 

const obtenidas = valores.filter(v => v > 0).length; //Almacena la cantidad de figuritas obtenidas en obtenidas

const faltantes = TOTAL_FIGURITAS - obtenidas; //Calcula las figuritas que faltan en faltantes

const porcentaje = ((obtenidas / TOTAL_FIGURITAS) * 100).toFixed(2); //Hace regla de 3 simples para calcular el porcentaje de completado del album y las almacena en porcentaje

const tiposRepetidos = valores.filter(v => v > 1).length; //Calcula el tipo de figuritas que tiene repetida y las almacena en tiposRepetidos

const repetidasTotales = valores.reduce(
    (suma, v) => suma + Math.max(0, v - 1), 
    0 //Calcula todas las figuritas que tiene repetidas y las almacena en repetidasTotales
);

document.querySelector("#obtenidas").textContent = obtenidas; //Muestra la variable obtenidas en el <span id="obtenidas">
document.querySelector("#faltantes").textContent = faltantes; //Muestra la variable faltantes en el <span id="faltantes">
document.querySelector("#porcentaje").textContent = porcentaje + "%"; //Muestra la variable porcentaje en el <span id="porcentaje">
document.querySelector("#tiposRepetidos").textContent = tiposRepetidos; //Muestra la variable tiposRepetidos en el <span id="tiposRepetidos">
document.querySelector("#repetidasTotales").textContent = repetidasTotales; //Muestra la variable repetidasTotales en el <span id="repetidasTotales">