
const regiter = document.querySelector("#register")
email= document.querySelector("#email"),
nombre= document.querySelector("#nombre"),
userReg= document.querySelector("#userReg"),
passReg= document.querySelector("#passReg"),
btnRegistrar= document.querySelector("#registrar");
btnSubmit= document.querySelector("#btnSubmit");


let usuarios;

if(localStorage.getItem("usuarios")){
    usuarios= JSON.parse(localStorage.getItem("usuarios"));
}else{
    usuarios=[];
}


class Usuario{
    constructor(nombre, usuario, email, password) {
    this.nombre = nombre;
    this.usuario = usuario;
    this.email = email;
    this.pass = password;
    }
}


function limpiar(){
    nombre.value="";
    userReg.value="";
    passReg.value="";
    email.value="";
}



function guardarUsuario(usuario){
    return usuarios.push(usuario)
}

function guadarEnStorage(elemento){
    return localStorage.setItem("usuarios",JSON.stringify(elemento))
}

btnRegistrar.addEventListener("click",(e)=>{
    e.preventDefault()

    let newUser= new Usuario(nombre.value, userReg.value, email.value, passReg.value)
    console.log(newUser);
    limpiar()
    guardarUsuario(newUser)
    guadarEnStorage(usuarios)
})


