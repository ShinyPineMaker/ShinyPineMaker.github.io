class Pessoa{
    constructor(nome, email, data_nasc, fixo, celular, matricula){
        this.nome = nome;
        this.email = email;
        this.data_nasc = data_nasc;
        this.fixo = fixo;
        this.celular = celular;
        this.matricula = matricula;
    }
}

class Aluno extends Pessoa{
    constructor(nome, email, data_nasc, fixo, celular, matricula, curso){
        super(nome, email, data_nasc, fixo, celular, matricula);
        this.curso = curso;
    }
}

class Professor extends Pessoa{
    constructor(nome, email, data_nasc, fixo, celular, matricula, area, lattes){
        super(nome, email, data_nasc, fixo, celular, matricula);
        this.area = area;
        this.lattes = lattes;
    }
}


//Propriedades coisas
const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const data_n = document.querySelector("#data-nasc");
const tel_f = document.querySelector("#telefone-fixo");
const tel_c = document.querySelector("#telefone-celular");
const area_curso = document.querySelector("#area-curso");
const matricula = document.querySelector("#matricula");
const lattes = document.querySelector("#lattes");

//Elementos HTML coisas
const radio_professor = document.querySelector("#professor");
const radio_aluno = document.querySelector("#aluno");
const area_curso_label = document.querySelector("#area-curso-label");
const row_lattes = document.querySelector("#row-lattes");

// myFunction()
const ViewProfessor = () => { 
    area_curso_label.innerHTML = "Área: ";
    row_lattes.classList.remove("hidden");
}

const ViewAluno = () => {
    area_curso_label.innerHTML = "Curso: ";
    row_lattes.classList.add("hidden");
}

radio_professor.addEventListener('click', ViewProfessor);
radio_aluno.addEventListener('click', ViewAluno);