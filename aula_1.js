// 1. Par ou Impar
const entradaParImpar = document.querySelector('#entrada_parimpar');
const respostaParImpar = document.querySelector('#resposta_parimpar');

const handleInputValue = (event) => {
    event.preventDefault();
    if (entradaParImpar.value % 2 == 0){
        respostaParImpar.innerHTML = 'par';
        respostaParImpar.classList.add('green');
        respostaParImpar.classList.remove('red');    
    }
    else{
        respostaParImpar.innerHTML = 'impar';
        respostaParImpar.classList.add('red');
        respostaParImpar.classList.remove('green');
    }
}
 
entradaParImpar.addEventListener('change', handleInputValue);


// 2. Número Primo
const entradaPrimo = document.querySelector('#entrada_primo');
const respostaPrimo = document.querySelector('#resposta_primo');
const envioPrimo = document.querySelector('#envio_primo');

const numeroPrimo = (event) => {
    event.preventDefault();
    num = entradaPrimo.value
    if (isPrime(num)){
        respostaPrimo.innerHTML = "é primo";
        respostaPrimo.classList.add('green');
        respostaPrimo.classList.remove('red');   
    }
    else{
        respostaPrimo.innerHTML = "não é primo";
        respostaPrimo.classList.add('red');
        respostaPrimo.classList.remove('green');   
    }
}

const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if(num % i === 0) return false;
    }
    return num > 1;
}

envioPrimo.addEventListener('click', numeroPrimo);

//3. alert Fatorial
const entradaFatorial = document.querySelector('#entrada_fatorial');
const envioFatorial = document.querySelector('#envio_fatorial');

const alertFatorial = (event) => {
    let num = 1;
    if (entradaFatorial.value  == 0 || entradaFatorial.value  == 1){
        alert('1');
        return 1;
    }
    for (i = 1; i <= entradaFatorial.value; i++){
        num *= i;
    }
    alert(num);
    return num;
}

envioFatorial.addEventListener('click', alertFatorial);

//4. Retornar Tipo
const entradaTipo = document.querySelector('#entrada_tipo');
const envioTipo = document.querySelector('#envio_tipo');
const respostaTipo = document.querySelector('#resposta_tipo');

const verificarTipo = (event) => {
    event.preventDefault();
    respostaTipo.innerHTML = checarTipo(entradaTipo.value);
    console.log('teste');
}

function checarTipo(dado){
    if (dado == ''){
        return "null";
    }
    if (!isNaN(dado)){
        if (dado.includes('.')){
            return "float";
        }
        return "integer";
    }
    return "string";
}

envioTipo.addEventListener('click', verificarTipo);