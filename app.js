// Obtener el elemento del icono de inicio y las secciones
const homeLink = document.getElementById('En_menuHome');
const sections = document.querySelectorAll('.other-section');

// Función para verificar la posición del usuario al desplazarse
function checkScroll() {
    const scrollPosition = window.scrollY;

    // Verificar si el usuario está en la sección principal
    if (scrollPosition < sections[0].offsetTop) {
        homeLink.style.display = 'none'; // Ocultar el icono de inicio
    } else {
        homeLink.style.display = 'inline'; // Mostrar el icono de inicio
        // Agrega la lógica específica para la sección principal aquí
    }

    // Verificar la posición de otras secciones si es necesario
    // if (scrollPosition >= sections[1].offsetTop) {
    //     // Agrega la lógica específica para la segunda sección aquí
    // }

    // var element = document.getElementById('miElemento');
    // if (element) {
    //     var offsetTop = element.offsetTop;
    //     // Resto de tu lógica aquí
    // }
}

document.addEventListener('DOMContentLoaded', function() {
    // Tu código aquí, si es necesario
});

// Escuchar eventos de desplazamiento
window.addEventListener('scroll', checkScroll);

// Verificar la posición inicial
checkScroll();

console.log("Hola");