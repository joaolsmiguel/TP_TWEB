//Admin Login
admin_u = "admin";
admin_p = "admin";

//Login
function login() {
    user = document.querySelector("#username").value;
    pass = document.querySelector("#password").value;

    registo_user = localStorage.user;
    registo_pass = localStorage.pass;


    if (user=="") {
        alert("Erro");
    }else{
        if (user==admin_u && pass==admin_p) {
            alert("Bem vindo admin!");
            localStorage.ativo_login = user;
            localStorage.ativo = 1;
            location.replace("../");

        }else if (user==registo_user && pass==registo_pass) {
            alert("Bem vindo "+ user +"!");
            localStorage.ativo_login = user;
            localStorage.ativo = 1;
            location.replace("../");

        }else{
            alert("Password ou username inválido!");
        }
    }
}

//Regista
function regista() {
    localStorage.user = document.querySelector("#user").value;
    localStorage.pass = document.querySelector("#pass").value;
    localStorage.email = document.querySelector("#email").value;
    //alert("Utilizador Registado");
    //location.replace("../");
    window.location.replace("../");
    
}

//Esqueceu se da palavra passe
function esqueceu_int() {
    document.querySelector("#pass1").style.visibility = "hidden";
    document.querySelector("#pass2").style.visibility = "hidden";
}

function muda_pass() {
    esqueceu_email = document.querySelector("#email").value;
    regista_email = localStorage.email;

    if (esqueceu_email==regista_email) {
        pass1 = document.querySelector("#pass1").value;
        pass2 = document.querySelector("#pass2").value;

        document.querySelector("#email").disabled = true;
        document.querySelector("#submit").innerHTML = "Mudar Password";

        document.querySelector("#pass1").style.visibility = "visible";
        document.querySelector("#pass2").style.visibility = "visible";

        if (pass1!="" && pass2!="") {
            if (pass1==pass2) {
                localStorage.pass=pass2;
                if (localStorage.pass==pass2) {
                    alert("Passwords alteradas!");
                    //location.replace("../");
                    window.location.replace("../");
                }else{
                    alert("Passwords Diferentes");
                }
            }
        }
    }
}


function termina_sessao() {
    localStorage.removeItem("ativo");
    localStorage.removeItem("ativo_login");
    localStorage.removeItem("email");
    localStorage.removeItem("pass");
    localStorage.removeItem("user");
    location.replace("../");
}