let tamanhoFonte = 16;

function modoEscuro() {

    document.body.classList.toggle("dark");

}

function aumentarFonte() {

    tamanhoFonte += 2;

    document.body.style.fontSize =
        tamanhoFonte + "px";

}

function diminuirFonte() {

    tamanhoFonte -= 2;

    document.body.style.fontSize =
        tamanhoFonte + "px";

}

document.addEventListener("DOMContentLoaded", () => {

    const form =
        document.getElementById("formContato");

    form.addEventListener("submit", function(e){

        let nome =
            document.getElementById("nome").value;

        let email =
            document.getElementById("email").value;

        let mensagem =
            document.getElementById("mensagem").value;

        if(
            nome === "" ||
            email === "" ||
            mensagem === ""
        ){

            alert("Preencha todos os campos!");

            e.preventDefault();

        }else{

            alert("Mensagem enviada com sucesso!");

        }

    });

});