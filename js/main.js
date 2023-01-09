document.title = "Entrega 3";
const titulo = document.querySelector("h1 span"),
tituloSecundario = document.querySelector("h2#secundario");

titulo.innerText = "Entrega 3 ";
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

function crearHtml(el) {
  const contenedor = document.querySelector("#contenedor");
  let html = `<div class="card">
                <img src=" ./img/${el.img}" alt="${el.nombre}">
                <hr>
                <h3>${el.nombre}</h3>
                <p>Precio: $${el.precio} </p>
                  <div class="card-action">
                    <button id="${el.id}">Comprar</button>
                  </div>
              </div>`;
  contenedor.innerHTML = html;
}


const input = document.querySelectorAll('input[type="text"]'),
  btnSearch = document.querySelector("#btnSearch");
btnSearch.addEventListener("click", () => {
  const encontrado = buscarServicio(servicios, input[0].value.toLowerCase());
  crearHtml(encontrado);
});



function guardar(valor) {
  let user = { usuario: email.value, pass: pass.value };
  if (user.usuario == "" || user.pass == "") {
    p.innerText = "Los campos no deben estar vacios";
    return;
    console.log("Hola");
  } else {
    if (valor === "sessionStorage") {
      sessionStorage.setItem("item", JSON.stringify(user));
    }
    if (valor === "localStorage") {
      localStorage.setItem("item", JSON.stringify(user));
    }
  }
  return user;
}


recuperarDatos(JSON.parse(localStorage.getItem("item")));

btnSubmit.addEventListener('click',(e)=>{
  e.preventDefault();
  if(check.checked){
      guardar("localStorage")
  }else{
    guardar("sessionStorage")
  }

})

