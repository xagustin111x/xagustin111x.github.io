const fotos = document.querySelector('.fotos');
const indicadores = document.querySelectorAll('.indicadores span');
const botones = document.querySelectorAll('.botones button');

let actual = 0;

indicadores.forEach((indicador, index) => {
    indicador.addEventListener('click', () => {
        actual = index;
        actualizar();
    });
});

botones.forEach((boton, index) => {
    if (index === 0) {
        boton.addEventListener('click', () => {
            fotos.style.transform = `translateX(${actual * 100}%)`;
            actualizar();
        });
    } else {
        boton.addEventListener('click', () => {
            fotos.style.transform = `translateX(-${(actual + 1) * 100}%)`;
            actualizar();
        });
    }
});

function actualizar() {
    indicadores.forEach((indicador, index) => {
        indicador.classList.remove('activo');
        if (index === actual) {
            indicador.classList.add('activo');
        }
    });
}