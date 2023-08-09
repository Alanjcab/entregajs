let nombre = prompt("Ingrese su nombre por favor.");

let capital =parseInt (prompt("Hola " + nombre + " ¿Cual es el monto que quiere solicitar?"));

let cuota = prompt("Cuotas disponibles: 3, 6, 12 y 24 ¿En cuantas cuotas quiere solicitarlo? ");
switch(cuota){
    case"3":
    function suma(capital){
        let interes1= 0.25;
        let resultado = capital * interes1;
        let resultadoEn3 = resultado + capital;
        alert("El interes en 3 cuotas es de $" + resultadoEn3);
    }
    suma(capital);
    break;
    case"6":
    function suma2(capital){
        let interes2 =0.50;
        let resultado2 = capital * interes2;
        let resultadoEn6 = resultado2 + capital;
        alert("El interes en 6 cuotas es de $" + resultadoEn6);
    }
    suma2(capital);
    break;
    case"12":
    function suma3(capital){
        interes3= 0.75;
        let resultado3 = capital * interes3;
        let resultadoEn12 = resultado3 + capital;
        alert("El interes en 12 cuotas es de $" + resultadoEn12);
    }
    suma3(capital);
    break;
    case"24":
    function suma4(capital){
        interes4= 1.0;
        let resultado4 = capital * interes4;
        let resultadoEn24 = resultado4 + capital;
        alert("El interes en 24 cuotas es de $" + resultadoEn24);
    }
    suma4(capital);
    break;
}
