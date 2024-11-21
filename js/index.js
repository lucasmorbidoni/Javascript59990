/* PRIMER ENTREGA ( MODIFICADA PORQUE NO PODIA USAR MUCHO DE LO VISTO EN LAS SIGUIENTES CLASES DE JAVASCRIPT)
SEGUNDA ENTREGA A PARTIR DE LA FILA 75

let usuario = prompt("Ingrese su usuario:");                        //Admin
while (usuario !== "Admin") {                                       //Si el usuario esta mal
alert("Usuario inválido");
usuario = prompt("Ingrese su usuario:");}
let contraseña = prompt("Ingrese su contraseña:");                  //1234
while (contraseña !== "1234") {                                     // SI la contraseña esta mal
alert("Contraseña incorrecta");
contraseña = prompt("Ingrese su contraseña:");
}
alert("Bienvenido!");
    
const nombre= prompt("Ingrese su nombre:")                          //nombre
const apellido= prompt( "Ingrese su apellido")                      //apellido
console.log (nombre + " " + apellido);
alert("Hola" + " " + nombre + " " + apellido );




const vehiculo= prompt ( "Indique si su vehículo es auto o moto")
console.log(vehiculo);
const patente = prompt("Ingrese su dominio:");
console.log(patente);
if(vehiculo === "auto"){
alert("EL MONTO ANUAL DE PATENTE ES EQUIVALENTE A $12000 = $1200 mensual"); //precio auto
let deudaAuto = 0;
let precioMesAuto = 1200;                                                  // Precio de cada mes
let mesesAuto = parseInt(prompt("Ingrese la cantidad de meses que desea abonar:")); 
for (let i = 0; i < mesesAuto; i++) {
    deudaAuto += precioMesAuto;                                            // Sumar 1200 por cada mes
}
alert("La deuda total es:" + deudaAuto);
console.log("La deuda total es: $" + deudaAuto);
alert("En 1 pago 10% descuento / 3 o 6 cuotas sin interes / 12 cuotas 50% de interes");
const cuotas= parseInt(prompt("¿En cuantas cuotas desea abonar?"))
const cuota1= deudaAuto * 10/100;
const cuota3= deudaAuto;
const cuota6 = deudaAuto;
const cuota12= deudaAuto / 2;

if (cuotas === 1) {
    alert("El monto a pagar es de : $" + (deudaAuto - cuota1));
    }
else if (cuotas === 3 || cuotas === 6) {
    alert("El monto a pagar es de : $" + deudaAuto);
    }
else if (cuotas === 12) {
    alert("El monto a pagar es de : $" + (deudaAuto + cuota12));
    }
else {
    while (cuotas !== "1" && cuotas !== "3" && cuotas !== "6" && cuotas !== "12") {
        alert("Numero de cuotas invalidas");
        cuotas= parseInt(prompt("¿En cuantas cuotas desea abonar?"));}
}
}

else {(vehiculo === "moto")
alert("EL MONTO ANUAL DE PATENTE ES EQUIVALENTE A $6000 = $500 mensual");              //precio moto
let deudaMoto=0;
let precioMesMoto= 500;  //Precio de cada mes
let mesesMoto = parseInt(prompt("Ingrese la cantidad de meses que desea abonar"));
for( let i=0 ; i < mesesMoto; i++) {
    deudaMoto += precioMesMoto;  // sumar 500 por cada mes
}
alert("La deuda total es:" + deudaMoto);
console.log("La deuda total es : $" + deudaMoto);
}*/





//              SEGUNDA ENTREGA                   SEGUNDA ENTREGA                  SEGUNDA ENTREGA

//CLASES

class Modelo {
    constructor( nombre , año , km , precio ) {
        this.nombre = nombre ; 
        this.año = año ;
        this.km = km ; 
        this.precio = precio; 
    }
}


//FUNCIONES
function modificarModelo(){
    const modificarAuto = prompt ( " Ingrese el modelo que quiere modificar") ;
    const autoModificado = modelos.find ( ( el) =>{
        return el.nombre.toLowerCase() === modificarAuto.toLowerCase;
    })
};

function mostrarTotal(){
    const total = modelos.reduce((acc, el) => {
        return acc + el.precio;
    }, 0);
   // alert("El total es $" + " " + mostrarTotal)
    alert("El total es $" + " " + total);
    console.log ( mostrarTotal);
}


//añadir formas de pago

/*function aplicarDescuento(porcentaje){
    return (total) => total * porcentaje;
    const descuentoDel10= aplicarDescuento(0.10);
    const descuentoDel20= aplicarDescuento(0.20);
}*/

function opcioValida ( opcionIngresada ) {
    while ( opcionIngresada <1 || opcionIngresada > 4) {  // si ingresa un numero erroneo
        alert (" Opcion invalida ");
        opcionIngresada = parseInt ( prompt (seleccionarModelo));
    }
    if (opcionIngresada === 4 ) {                                          // si ingresa 4 para salir
        alert ( " Gracias por usar nuestro sistema") ;
        return false;
    }
    return true;
}

function crearModelo() {                    //pedimos los datos del auto
    const nombreModelo = prompt ("Ingrese el nombre del modelo que desea comprar");
    const añoModelo= parseFloat(prompt ("Ingrese el año pretendido"));
    const kmModelo= parseFloat(prompt ("Ingrese un kilometraje aproximado del modelo"));
    const precio= parseInt(prompt ("Ingrese el monto por el que pretende comprar"));


    const modelo = new Modelo (                //creamos el auto
        nombreModelo,
        añoModelo,
        kmModelo,
        precio,
    );


    modelos.push(modelo);                        //agregar auto al array
    alert ("MODELO AGREGADO")
    console.log( modelos);
}

//INICIO DEL PROGRAMA


/*let usuario = prompt("Ingrese su usuario:");         //Admin
while (usuario !== "Admin") {                        //Si el usuario esta mal
alert("Usuario inválido");
usuario = prompt("Ingrese su usuario:");}
let contraseña = prompt("Ingrese su contraseña:");      //1234
while (contraseña !== "1234") {                      // SI la contraseña esta mal
alert("Contraseña incorrecta");
contraseña = prompt("Ingrese su contraseña:");
}
alert("Bienvenido!");
    
const nombre= prompt("Ingrese su nombre:")               //nombre
const apellido= prompt( "Ingrese su apellido")            //apellido
console.log (nombre + " " + apellido);
alert("Hola" + " " + nombre + " " + apellido );        */

//opciones= seleccionarModelo 
//

const modelos = [

];


const seleccionarModelo = (" 1- Agregar modelo. 2- Modificar Modelo. 3- Mostrar total y formas de pago. 4- Salir.");
let opcion= parseInt ( prompt ( seleccionarModelo));

while ( opcioValida (opcion)){
    switch(opcion){
        case 1:
            crearModelo();
            break;
        case 2:
            modificarModelo();
            break;
        case 3:
            mostrarTotal();
            break;
    }

//                           volver a pedir la opcion para no quedarse en un bucle infinito
opcion= parseInt ( prompt ( seleccionarModelo));
}

//const carrito = queModeloComprar
//const deshacer = prompt ( " Para continuar con el medio de pago indique 1, si desea cancelar el producto indique 2");
//if ( deshacer === 2 ) {
//    carrito.pop();
//}*/