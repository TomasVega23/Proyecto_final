

// fetch('https://google-translate1.p.rapidapi.com/language/translate/v2/detect', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));



//     fetch('https://google-translate1.p.rapidapi.com/language/translate/v2/languages', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));


//Array Servicios
const servicios = [
  { id: 1, nombre: "anillos", precio: 5000 },
  { id: 2, nombre: "cadenas", precio: 7500 },
  { id: 3, nombre: "relojes", precio: 10000 },
  { id: 4, nombre: "pulseras", precio: 8000 },
  { id: 5, nombre: "aros", precio: 3500 },
];
//funciones de busqueda
function buscarServicio(arr, filtro) {
  const encontrado = arr.find((el) => {
    return el.nombre.includes(filtro);
  });
  return encontrado;
}
function filtrarServicio(arr, filtro) {
  const filtrado = arr.filter((el) => {
    return el.nombre.includes(filtro);
  });
  return filtrado;
}


// fetch('./data/data.json')
// .then(res=>res.json())
// .then(datos=>{
//     console.log(datos);
// })

async function fetchAPI(){
    const response=await fetch('./data/data.json');
    const datos=await response.json();
    console.log(datos);
}
fetchAPI()