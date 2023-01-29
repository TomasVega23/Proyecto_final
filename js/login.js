const forms = document.querySelector(".forms"),
    pwShowHide = document.querySelectorAll(".eye-icon"),
    links = document.querySelectorAll(".link");

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
        
        pwFields.forEach(password => {
            if(password.type === "password"){
                password.type = "text";
                eyeIcon.classList.replace("bx-hide", "bx-show");
                return;
            }
            password.type = "password";
            eyeIcon.classList.replace("bx-show", "bx-hide");
        })
        
    })
})      

links.forEach(link => {
    link.addEventListener("click", e => {
       e.preventDefault(); //preventing form submit
    forms.classList.toggle("show-signup");
    })
})
 



const btnIngresar= document.querySelector("#ingresar"),
user= document.querySelector("#user"),
pass= document.querySelector("#pass");

function inicioSesion(usuarios){
    let userFound = usuarios.find(usuario=>{
        return usuario.usuario == user.value && usuario.pass == pass.value;
    });
        if(userFound){
            window.location.href="./index.html"
        }else{
            btnIngresar.addEventListener("click", ()=>{
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'hubo un error',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
        }
    
}

function recuperarLS(){
    let datos = JSON.parse(localStorage.getItem("usuarios"));
    return datos;
}

btnIngresar.addEventListener("click", (e) => {
    e.preventDefault();
    inicioSesion(usuariosLs)
})

const usuariosLs = recuperarLS();