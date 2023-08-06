let interes

let nombre = prompt("Ingrese su nombre por favor.");

let capital =prompt("Hola " + nombre + " ¿Cual es el monto que quiere solicitar?");

let cuota = prompt("Cuotas disponibles: 3, 6, 12 y 24 ¿En cuantas cuotas quiere solicitarlo? ");
switch(cuota){
    case"3":
    function suma(capital,interes){
        interes= 0.25;
        let resultado = capital * interes;
        alert("El interes en 3 cuotas es de $" + resultado);
    }
    suma(capital,interes);
    break;
    case"6":
    function suma2(capital,interes){
        interes= 0.50;
        let resultado2 = capital * interes;
        alert("El interes en 6 cuotas es de $" + resultado2);
    }
    suma2(capital,interes);
    break;
    case"12":
    function suma3(capital,interes){
        interes= 0.75;
        let resultado3 = capital * interes;
        alert("El interes en 12 cuotas es de $" + resultado3);
    }
    suma3(capital,interes);
    break;
    case"24":
    function suma4(capital,interes){
        interes= 0.100;
        let resultado4 = capital * interes;
        alert("El interes en 24 cuotas es de $" + resultado4);
    }
    suma4(capital,interes);
    break;
}
