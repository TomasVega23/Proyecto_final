const joyeria= [
    {id: 1, nombre: "anillos", precio: 5000},
    {id: 2, nombre: "cadenas", precio: 7500},
    {id: 3, nombre: "relojes", precio: 10000},
    {id: 4, nombre: "pulseras", precio: 8000},
    {id: 5, nombre: "aros", precio: 3500},
]

joyeria.forEach( (num)=> {
    console.log(num)
} )

//funcion del filtrado

function find (arr, fil) {
    const encontrar = arr.find((servicio) => {
    return servicio.nombre.includes(fil.toLowerCase());
    });
return encontrar;
}

let buscar= prompt("Ingresa el nombre de la joya")

const joyaEncontrada = find (joyeria,buscar)

console.log(joyaEncontrada);

let presupuesto = parseFloat(prompt("ingrese su presupuesto y recibira  los productos accesibles "))
const resultado = joyeria.filter((el)=> el.precio <= presupuesto)

console.log(resultado);

alert("lo siguiente son las sedes donde puedes encontrar las joyas")

function Tienda(nombre, direccion, propietario){
    this.nombre = nombre;
    this.direccion = direccion;
    this.propietario = propietario;
}

const tienda1 = new Tienda("Moon Oficial", "Rivadavia 123", "Walter");
const tienda2 = new Tienda("Joyas Moon", "9 De Julio", "Delfina");
const tienda3 = new Tienda("Moon", "San Martin", "Fabiana");
console.log(tienda1);
console.log(tienda2);
console.log(tienda3);


