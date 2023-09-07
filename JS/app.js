const divContainer = document.getElementById("divContainer");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modalContainer");

const productosCarrito = [
    {
    precio:82990,
    id: 1,
    title: "Sillon Gamer Negro/Blanco",
    img: "../IMG/silla01.jpg",  
},
    {
    precio:80990,
    id: 2,
    title: "Sillon Gamer Negro",
    img: "../IMG/silla03.jpg",   
},
    {
    precio:76990,
    id: 3,
    title: "Sillon Gamer Negro/Azul",
    img: "../IMG/silla04.jpg",  
},
    {
    precio:75990,
    id: 4,
    title: "Sillon Gamer Negro/Rojo",
    img: "../IMG/silla05.jpg",   
}
];
let carrito =[];


    productosCarrito.forEach(producto => {
        const content = document.createElement("div");
        content.className = "divContent";
        content.innerHTML = `
        <img src="${producto.img}" class="imgSillas">
        <h3 class="textoCard">${producto.title}</h3>
        <p class="precio">$ ${producto.precio}</p>
        `;

        divContainer.append(content);

        let comprar = document.createElement("button");
        comprar.innerText = "Agregar al carrito";
        comprar.className = "btnComprar";
        content.append(comprar);

        comprar.addEventListener("click",()=>{
            Toastify({
                text: "Se un nuevo producto!",
                className: "info",
                duration: "1000",
              }).showToast();

            carrito.push({
                id: producto.id,
                img: producto.img,
                title: producto.title,
                precio: producto.precio
            });
        });
    });
        
verCarrito.addEventListener("click", ()=>{
    modalContainer.innerHTML ="";
    modalContainer.style.display ="flex";
    const modal =document.createElement("div");
    modal.className ="modalHeader";
    modal.innerHTML =`
        <h1 class="tituloModal">TU COMPRA</h1>
    `;
    modalContainer.append(modal);

    const modalbtn =document.createElement("h1");
    modalbtn.innerText ="X";
    modalbtn.className ="btnModal";

    modalbtn.addEventListener("click",()=>{
        modalContainer.style.display = "none";
    })

    modal.append(modalbtn);

    carrito.forEach((producto)=>{
        let modalContent = document.createElement("div");
        modalContent.className ="contenidoModal";
        modalContent.innerHTML =`
        <img src="${producto.img}">
        <h3 class="textoCard">${producto.title}</h3>
        <p class="precio">$${producto.precio}</p>
        `;
        modalContainer.append(modalContent);
    });

    const total = carrito.reduce((acc,el) => acc + el.precio, 0);
    const totalCompra = document.createElement("div");
    totalCompra.className ="total";
    totalCompra.innerHTML =`
    Total a pagar: $${total}
    `;
    modalContainer.append(totalCompra);
});

