function check1() {
    try {
        if (localStorage.ativo==1) {
            document.querySelector("#login").innerHTML = localStorage.ativo_login;
            document.querySelector("#login").href = "./login/user_pagina.html";

            document.getElementById("termina").style.visibility="visible";
            muda_li(1);
        }
    }
    catch(err) {
        console.log("erro");
        muda_li(0);
    }
}

function check2() {
    try {
        if (localStorage.ativo==1) {
            document.querySelector("#login").innerHTML = localStorage.ativo_login;
            document.querySelector("#login").href = "../login/user_pagina.html";

            document.getElementById("termina").style.visibility="visible";
            muda_li(1);
        }
    }
    catch(err) {
        console.log("erro");
        muda_li(0);
    }
}


function muda_li(n) {
    try {
        if (screen.width>1014) {
            if (n==1) {
                $("ul li").css("size","90%");
                $( "ul li:nth-last-child(1)").css("float","right");
                $( "ul li:nth-last-child(2)").css("float","right");
            }else{
             $("li").last().css("float","right");
            }
        }else{
            console.log("erro");
        }
        
    }catch{
        console.log("erro!");
    }
}