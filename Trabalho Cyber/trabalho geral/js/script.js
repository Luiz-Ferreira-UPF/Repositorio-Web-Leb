function trocarTema(){
    document.body.classList.toggle("dark");
}

function alterarFonte(){
    document.body.classList.toggle("fonte-grande");
}

function gerarSenha(){

    let caracteres =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*";

    let senha = "";

    for(let i=0;i<12;i++){

        senha += caracteres.charAt(
            Math.floor(Math.random()*caracteres.length)
        );

    }

    document.getElementById("senha").innerHTML = senha;
}

function enviarFormulario(event){

    event.preventDefault();

    alert("Página em construção");

}