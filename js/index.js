usuario= Admin
contraseña= 1234

let usuario = prompt("Ingrese su usuario:");
while (usuario !== "Admin") {                        //Si el usuario esta mal
alert("Usuario inválido");
usuario = prompt("Ingrese su usuario:");}
let contraseña = prompt("Ingrese su contraseña:");
while (contraseña !== "1234") {                      // SI la contraseña esta mal
alert("Contraseña incorrecta");
contraseña = prompt("Ingrese su contraseña:");
}
alert("Bienvenido!");
    
const nombre= prompt("Ingrese su nombre:")               //nombre
const apellido= prompt( "Ingrese su apellido")            //apellido
console.log (nombre + " " + apellido);
alert("Hola" + nombre + " " + apellido + ".");


const vehiculo= prompt ( "Indique si su vehículo es auto o moto")
console.log(vehiculo);
const patente = prompt("Ingrese su dominio:");
console.log(patente);
if(vehiculo === "auto"){
alert("EL MONTO ANUAL DE PATENTE ES EQUIVALENTE A $12000 = $1200 mensual"); //precio auto
let deudaAuto = 0;
let precioMesAuto = 1200; // Precio de cada mes
let mesesAuto = parseInt(prompt("Ingrese la cantidad de meses que desea abonar:")); 
for (let i = 0; i < mesesAuto; i++) {
    deudaAuto += precioMesAuto;  // Sumar 1200 por cada mes
}
alert("La deuda total es:" + deudaAuto);
console.log("La deuda total es: $" + deudaAuto);
}


else {(vehiculo === "moto")
alert("EL MONTO ANUAL DE PATENTE ES EQUIVALENTE A $6000 = $500 mensual");  //precio moto
let deudaMoto=0;
let precioMesMoto= 500;  //Precio de cada mes
let mesesMoto = parseInt(prompt("Ingrese la cantidad de meses que desea abonar"));
for( let i=0 ; i < mesesMoto; i++) {
    deudaMoto += precioMesMoto;  // sumar 500 por cada mes
}
alert("La deuda total es:" + deudaMoto);
console.log("La deuda total es : $" + deudaMoto);
}
















// si qiere pagar en 1 50% desc
// si qiere pagar en 3 o 6 total
// si qiere pagar en 12 50% Interes

// hacer for para sumar los 3 años
