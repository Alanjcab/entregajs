let opcion =1;

const productos =[
    {nombre:" Sillon gamer TX ", color:" Rojo ", precio:30000},
    {nombre:" Sillon gamer SX ", color:" Azul ", precio:42000},
    {nombre:" Sillon gamer FX ", color:" Negra ", precio:65500},
    {nombre:" Sillon gamer HX ", color:" Blanca ", precio:70800}
]
alert("Bienvenido a nuestra tienda de sillas para pc. A continuacion le mostramos los productos disponibles para ofrecerles.");

productos.forEach(sillon => {
    const mostrarProductos=  `nombre: ${sillon.nombre} color: ${sillon.color} precio: ${sillon.precio}`;
    alert("Opcion " + opcion + " " + mostrarProductos);
    opcion++
});

let opcionElegida;
let opcionValida = false;

do {
  opcionElegida = prompt("Si le gustó y quiere comprar uno de nuestros productos, ingrese la opción correspondiente.");
  switch (opcionElegida) {
    case "1":
      alert("Excelente, usted ingresó la opción número 1: " + productos[0].nombre);
      opcionValida = true;  
      break;
    case "2":
      alert("Excelente, usted ingresó la opción número 2: " + productos[1].nombre);
      opcionValida = true; 
      break;
    case "3":
      alert("Excelente, usted ingresó la opción número 3: " + productos[2].nombre);
      opcionValida = true; 
      break;
    case "4":
      alert("Excelente, usted ingresó la opción número 4: " + productos[3].nombre);
      opcionValida = true; 
      break;
    default:
      alert("La opción ingresada no es correcta, vuelva a intentar.");
      break;
  }
} while (!opcionValida);

let a =prompt("El producto se agrego exitosamente al carrito. ¿Desea continuar con la compra? SI para continuar, NO para cerrar.").toLowerCase();

if(a==si){
let b=prompt("desea abonar en un pago o en cuotas? ingrese 1 para abonar en un pago. Ingrese 2 para abonar en cuotas.");
    if (b==1){
    }
}else{
    alert("Muchas gracias!")
}


