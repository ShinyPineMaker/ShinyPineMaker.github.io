const envio = document.querySelector("#envio");
const nome = document.querySelector("#nome");
const idade = document.querySelector("#idade");
const retorno = document.querySelector("#retorno");
const array = new Array();

const addToArray = (event) =>{
    event.preventDefault();
    retorno.innerHTML = '';
    array.push([nome.value, idade.value]);
    array.sort();
    array.forEach(element => {
        retorno.innerHTML += "Nome: " + element[0] + " | Idade: " + element[1] + " <br> ";
    });
    nome.value = '';
    idade.value = 0;
}


envio.addEventListener('click', addToArray);