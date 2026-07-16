const botones = document.querySelectorAll(".instancia");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        console.log("Click en", boton.dataset.etapa);
    });
});


