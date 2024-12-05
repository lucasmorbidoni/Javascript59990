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

function guardarEnLS() {
    const modelosJSON = JSON.stringify(modelos);

    localStorage.setItem("modelos", modelosJSON);
}

function obtenerDeLS () {
    const modelosJSON = localStorage.getItem("modelos");

    if(modelosJSON === null) {
        return [
            new Modelo("polo", 2020, 20000, 20000000),
            new Modelo("nivus", 2020, 20000, 25000000),
            new Modelo("virtus", 2020, 20000, 30000000),
            new Modelo("vento", 2024, 20000, 35000000),
        ];
    }
    else {
        const modelos = [];
        const modelosLiterales = JSON.parse(modelosJSON);

        for(const modeloLiteral of modelosLiterales) {
            modelos.push(
                new Modelo(
                    modeloLiteral.nombre, modeloLiteral.año, modeloLiteral.km, modeloLiteral.precio,
                )
            )
        }
    return modelos;
    }
}


//MOSTRAR TOTAL
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

    function crearModelo(e) { //pedimos los datos del auto
        e.preventDefault();  //  Va agregando modelo a la lista
    
    //obterner los inputs
    const inputNombreModelo= document.getElementById ("nombreModelo");
    const inputAñoModelo= document.getElementById ("añoModelo");
    const inputKmModelo= document.getElementById ("kmModelo");
    const inputPrecioModelo= document.getElementById ("precioModelo");
    
    //pedimos los datos del modelo
    const nombreModelo = inputNombreModelo.value;
    const añoModelo= parseFloat(inputAñoModelo.value);
    const kmModelo= parseFloat(inputKmModelo.value);
    const precio= parseFloat(inputPrecioModelo.value);

    // Limpiamos inputs
    inputNombreModelo.value = "";
    inputAñoModelo.value = "";
    inputKmModelo.value = "";
    inputPrecioModelo.value = "";

    //creamos el modelo
    const modelo = new Modelo (nombreModelo, añoModelo, kmModelo, precio,);

    //agregar auto al array
    modelos.push(modelo);                        
    
    // Guardamos en local storage
    guardarEnLS();
    
    alert ("MODELO AGREGADO")
    agregarTabla();
    console.log( modelos);
}

function clickSpanAñoModelo(tdAño, spanAño, modelo) {
    // Crear input
    const inputAño = document.createElement("input");
    inputAño.type = "number";
    inputAño.value = modelo.año;

    inputAño.addEventListener("change", () => {
        // Cambiamos precio de producto
        modelo.año = parseInt(inputAño.value);

        // Guardamos en local storage
        guardarEnLS();

        // Volver a renderizar la tabla de productos
        agregarTabla();
    });

    // Agregar input al td
    tdAño.append(inputAño);

    // Ocultar span
    spanAño.className = "ocultar-elemento";
}

function clickSpanKmModelo(tdKm, spanKm, modelo) {
    // Crear input
    const inputKm = document.createElement("input");
    inputKm.type = "number";
    inputKm.value = modelo.km;

    inputKm.addEventListener("change", () => {
        // Cambiamos cantidad de producto
        modelo.km = parseFloat(inputKm.value);

        // Guardamos en local storage
        guardarEnLS();

        // Volver a renderizar la tabla de productos
        agregarTabla();
    });

    // Agregar input al td
    tdKm.append(inputKm);

    // Ocultar span
    spanKm.className = "ocultar-elemento";
}

function clickSpanPrecioModelo(tdPrecio, spanPrecio, modelo) {
    // Crear input
    const inputPrecio = document.createElement("input");
    inputPrecio.type = "number";
    inputPrecio.value = modelo.precio;

    inputPrecio.addEventListener("change", () => {
        // Cambiamos precio de producto
        modelo.precio = parseFloat(inputPrecio.value);

        // Guardamos en local storage
        guardarEnLS();

        // Volver a renderizar la tabla de productos
        agregarTabla();
    });

    // Agregar input al td
    tdPrecio.append(inputPrecio);

    // Ocultar span
    spanPrecio.className = "ocultar-elemento";
}
function eliminarModelo(modelo) {
    modelos = modelos.filter( (el) => {
    return el.nombre !== modelo.nombre;
    });
    guardarEnLS();                      //guardar en localstorage
    agregarTabla();                    // Volver a cargar la tabla
}

function agregarTabla (){
    tbodyModelos.innerHTML= "";

    for(const modelo of modelos) {
        // Creamos tr
        const tr = document.createElement("tr");

        // Creamos tds
        const tdNombre = document.createElement("td");
        const tdAño = document.createElement("td");
        const tdKm = document.createElement("td");
        const tdPrecio = document.createElement("td");
        const tdEstado = document.createElement("td");
        const tdEliminar = document.createElement("td");

        tdNombre.innerText = `${modelo.nombre}`;

        const spanAño = document.createElement("span");
        spanAño.innerText = `${modelo.año}`;
        spanAño.addEventListener("click", () => {
            clickSpanAñoModelo(tdAño, spanAño, modelo);
        });

        const spanKm = document.createElement("span");
        spanKm.innerText = `${modelo.km}`;
        spanKm.addEventListener("click", () => {
            clickSpanKmModelo(tdKm, spanKm, modelo);
        });

        
        const spanPrecio = document.createElement("span");
        spanPrecio.innerText = `$${modelo.precio}`;
        spanPrecio.addEventListener("click", () => {
            clickSpanPrecioModelo(tdPrecio, spanPrecio, modelo);
        });

    
        tdAño.append(spanAño);
        tdKm.append(spanKm);
        tdPrecio.append(spanPrecio);

        // crear boton estado
        const botonDisponible = document.createElement("button");
        botonDisponible.innerText= "Disponible";
        botonDisponible.style.backgroundColor= "rgba(15, 235, 11, 0.801)";
        botonDisponible.style.borderRadius = "5px";
        botonDisponible.style.padding = "2px 5px";
        // Agregar boton Disponible

        tdEstado.append(botonDisponible) ;

        // crear boton eliminar
        const botonEliminar = document.createElement("button");
        botonEliminar.innerText = "Eliminar";

        botonEliminar.addEventListener("click", () => {
            eliminarModelo(modelo);
        });

        // Agregar boton eliminar
        tdEliminar.append(botonEliminar)

        // Agregar todos 
        tr.append(tdNombre, tdAño, tdKm, tdPrecio, tdEstado, tdEliminar);

        tbodyModelos.append(tr);
    }
}



//INICIO DEL PROGRAMA

let usuario = prompt("Ingrese su usuario:");         //Admin
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
alert("Hola" + " " + nombre + " " + apellido );        


const formAgregarModelo = document.getElementById("formAgregarModelo");
const tbodyModelos= document.getElementById("tbodyModelos");
//const spanTotal = document.getElementById("total");

let modelos =  obtenerDeLS();          

agregarTabla();

formAgregarModelo.addEventListener("submit", crearModelo);