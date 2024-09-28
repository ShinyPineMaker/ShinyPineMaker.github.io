//get dados para visualização
const addPessoas = (lista) => {
    lista.forEach(pessoa => {
        if (pessoa.lattes){
            //professor
            let entry = document.createElement('tr');
            pessoa.forEach(item =>{
                let dado = document.createElement('th');
                dado.appendChild(document.createTextNode(dado));
                entry.appendChild(dado);
            })
            document.querySelector("#array-professores").appendChild(entry);
            
        }
        else{
            //aluno
            let entry = document.createElement('tr');
            entry.appendChild(document.createTextNode([pessoa.nome, pessoa.email, pessoa.data_nasc, pessoa.fixo, pessoa.celular, pessoa.matricula]))
            document.querySelector("#array-alunos").appendChild(entry);
        }
    });
}

const getPessoas = () => {
    let contd = localStorage.getItem("contd");
    let pessoa_lista = new Array();
    for (let i = 0; i < contd; i++) {
        let pessoa_atual = "obj"+i;
        let pessoa = JSON.parse(localStorage.getItem(pessoa_atual));
        pessoa_lista.push(pessoa);
    }
    addPessoas(pessoa_lista);
}

window.addEventListener("load", getPessoas);

/* 
var entry = document.createElement('li');
entry.appendChild(document.createTextNode(value));
list.appendChild(entry); 
*/