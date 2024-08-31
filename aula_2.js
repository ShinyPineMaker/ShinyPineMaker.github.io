const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
const diasSemana = ["Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado", "Domingo"];
const dataAtual = new Date();
const data = document.querySelector("#data");
const relogio = document.querySelector("#relogio");

const update = () => {  
    data.innerHTML = diasSemana[dataAtual.getDay() - 1] + ", " + dataAtual.getDate() + " de " + meses[dataAtual.getMonth() - 1] + " de " + dataAtual.getFullYear();
    relogio.innerHTML = dataAtual.getHours() + ":" + dataAtual.getMinutes() + ":" + dataAtual.getSeconds();    
}

let teste = setInterval( update(), 1000);


const palindromoEntrada = document.querySelector("#palindromo_entrada");
const palindromoEnvio = document.querySelector('#palindromo_envio');
const palindromo = (event) => {
    event.preventDefault();
    palavra = palindromoEntrada.value;
    if (palavra.toLowerCase() == palavra.toLowerCase().split('').reverse().join('')){
        alert('é palíndromo');
        return true;
    }
    alert('não é palíndromo');
    return false;
}

palindromoEnvio.addEventListener('click', palindromo);