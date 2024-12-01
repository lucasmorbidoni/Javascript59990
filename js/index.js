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

function obtenerModeloPorNombre() {          // modificar modelo sino queda en un loop 
    let modificarAuto = prompt ( " Ingrese el modelo que quiere modificar") ;
    let autoModificado = modelos.find ( ( el) =>{
        return el.nombre.toLowerCase() === modificarAuto.toLowerCase();
    });

    while (autoModificado === undefined) {
        alert ( "Modelo inexistente");
        modificarAuto = prompt ( " Ingrese el modelo que quiere modificar") ;
        autoModificado = modelos.find ( ( el) =>{
            return el.nombre.toLowerCase() === modificarAuto.toLowerCase();
        });
    }
    return autoModificado;
}

function modificarModelo(){                           // modificar modelo
    let autoModificado = obtenerModeloPorNombre();
    const nuevoAño = parseInt ( prompt( "Ingrese nuevo año"));
    const nuevoKm = parseInt ( prompt( "Ingrese nuevo km"));
    const nuevoPrecio = parseInt ( prompt( "Ingrese nuevo precio"));


    autoModificado.precio= nuevoPrecio;
    alert ( "Producto modificado");
    console.log (modelos)
}

function agregarTabla (){
    tbodyModelos.innerHTML= "";

    for( modelo of modelos) {

        const tr = document.createElement("tr");
        tr.innerHTML = `
                <td>${modelo.nombre}</td>
                <td>${modelo.año}</td>
                <td>${modelo.km}</td>
                <td>$ ${modelo.precio}</td>
        `;
        tbodyModelos.append(tr);
    }
}

function mostrarTotal(){                             //funcion sumatoria total
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

function opcionValida ( opcionIngresada ) {
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

function crearModelo(e) {                    //pedimos los datos del auto
    console.log (e);
    e.preventDefault(); //  Va agregando modelo a la lista
    //obterner los inputs
    const inputNombreModelo= document.getElementById ("nombreProducto");
    const inputAñoModelo= document.getElementById ("añoProducto");
    const inputKmModelo= document.getElementById ("kmProducto");
    const inputPrecioModelo= document.getElementById ("precioProducto");
    
    //pedimos los datos del modelo
    const nombreModelo = inputNombreModelo.value;
    const añoModelo= parseFloat(inputAñoModelo.value);
    const kmModelo= parseFloat(inputKmModelo.value);
    const precio= parseFloat(inputPrecioModelo.value);

    //creamos el modelo
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


const formAgregarModelo = document.getElementById("formAgregarModelo");
const tbodyModelos= document.getElementById("tbodyModelos");

const modelos = [               //array modelos
    new Modelo ("polo", 2020, 20000, 20000000),
    new Modelo ("nivus", 2020, 20000, 25000000),
    new Modelo ("virtus", 2020, 20000, 30000000),
    new Modelo ("vento", 2024, 20000, 35000000),
    new Modelo ("amarok", 2024, 20000, 40000000),
];

agregarTabla();

formAgregarModelo.addEventListener("submit", crearModelo);

/*while ( opcionValida (opcion)){
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
}*/