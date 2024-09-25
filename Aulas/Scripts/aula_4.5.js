contd = localStorage.getItem("contd");


//get dados para visualização
const getPessoa = () => {
    for (let i = 0; i < contd; i++) {
        let pessoa_atual = localStorage.getItem("obj"+contd);
        alert(pessoa_atual);
    }
}

addEventListener('load', getPessoa);
/* var firstname = document.getElementById('firstname').value;
var entry = document.createElement('li');
entry.appendChild(document.createTextNode(firstname));
list.appendChild(entry); */