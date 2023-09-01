const btnCarrito = document.getElementById('btnCarrito');

const mostrarModal = document.getElementById('mostrarModal');

btnCarrito.addEventListener('click', () => {
    mostrarModal.classList.toggle('modal')
});

// const productos = [
//     { nombre: 'Sillon Gamer Negro/Blanco', precio: 82.990, img: '../IMG/silla01.jpg'},
//     { nombre: 'Sillon Gamer Negro', precio: 80.990, img: '../IMG/silla03.jpg' },
//     { nombre: 'Sillon Gamer Negro/Azul', precio: 76.990, img: '../IMG/silla04.jpg' },
//     { nombre: 'Sillon Gamer Negro/Rojo', precio: 75.990, img: '../IMG/silla05.jpg' }
//   ];

