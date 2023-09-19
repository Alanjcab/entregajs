const divContainer = document.getElementById("divContainer");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modalContainer");
const contador = document.getElementById("contador")

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const getData =async () =>{
    
    const response = await fetch("../JSON/data.json");
    const data = await response.json();
    
    data.map(producto => {
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
            const repeat = carrito.some((repeatProducto)=> repeatProducto.id === producto.id);

            repeat
            ? (carrito.map((prod) => {
                if (prod.id === producto.id) {
                  prod.cantidad++;
                }
              }),
              Toastify({
                text: "Se agrego un nuevo producto!",
                className: "info",
                duration: "1000",
              }).showToast())
            : (Toastify({
                text: "Se agrego un nuevo producto!",
                className: "info",
                duration: "1000",
              }).showToast(),
              carrito.push({
                id: producto.id,
                img: producto.img,
                title: producto.title,
                precio: producto.precio,
                cantidad: producto.cantidad,
              }));          
          carritoCon();
          guardarLocal();
        });
    });
}
getData();


 
const pintarCarrito = () => {

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

    carrito.map((producto)=>{
        let modalContent = document.createElement("div");
        modalContent.className ="contenidoModal";
        modalContent.innerHTML =`
        <img src="${producto.img}">
        <h3 class="textoCard">${producto.title}</h3>
        <p class="precio">$${producto.precio}</p>
        <p class="cantidad">Cantidad: ${producto.cantidad}</p>
        <p>Total: ${producto.cantidad * producto.precio}</p>
        `;
        modalContainer.append(modalContent);

        let eliminar = document.createElement("span");
        eliminar.innerText ="X";
        eliminar.className ="btnEliminar";
        modalContent.append(eliminar);

        eliminar.addEventListener("click",eliminarProducto);

    });

    const total = carrito.reduce((acc,el) => acc + el.precio * el.cantidad, 0);
    const totalCompra = document.createElement("div");
    totalCompra.className ="total";
    totalCompra.innerHTML =`
    Total a pagar: $${total}
    `;
    modalContainer.append(totalCompra);
}

verCarrito.addEventListener("click", pintarCarrito);

const eliminarProducto = () => {
    const foundId = carrito.find((element)=> element.id);
    carrito = carrito.filter((carritoId)=>{
        return carritoId !== foundId;
    });
    carritoCon();
    guardarLocal();
    pintarCarrito();
}
const carritoCon = () =>{
    contador.style.display= "block";
    const carritolength = carrito.length;
    localStorage.setItem("carritolength", JSON.stringify(carritolength))
    contador.innerText = JSON.parse(localStorage.getItem("carritolength"))
};
carritoCon();

//localStorege//
const guardarLocal = ()=>{
    localStorage.setItem("carrito", JSON.stringify(carrito));
};
