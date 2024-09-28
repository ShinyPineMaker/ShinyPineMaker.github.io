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
    getArray(){
        let listaPropriedades = new Array;
        listaPropriedades.push(this.nome);
        listaPropriedades.push(this.email);
        listaPropriedades.push(this.data_nasc);
        listaPropriedades.push(this.fixo);
        listaPropriedades.push(this.celular);
        listaPropriedades.push(this.curso);
        listaPropriedades.push(this.matricula);
        return listaPropriedades;
    }
}

class Professor extends Pessoa{
    constructor(nome, email, data_nasc, fixo, celular, matricula, area, lattes){
        super(nome, email, data_nasc, fixo, celular, matricula);
        this.area = area;
        this.lattes = lattes;
    }
    getArray(){
        let listaPropriedades = new Array;
        listaPropriedades.push(this.nome);
        listaPropriedades.push(this.email);
        listaPropriedades.push(this.data_nasc);
        listaPropriedades.push(this.fixo);
        listaPropriedades.push(this.celular);
        listaPropriedades.push(this.matricula);
        listaPropriedades.push(this.area);
        listaPropriedades.push(this.lattes);
        return listaPropriedades;
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

//campo de validacao coisas
const v_nome = document.querySelector("#validacao-nome");
const v_email = document.querySelector("#validacao-email");
const v_data_n = document.querySelector("#validacao-data-nasc");
const v_tel_f = document.querySelector("#validacao-fixo");
const v_tel_c = document.querySelector("#validacao-celular");
const v_area_curso = document.querySelector("#validacao-area-curso");
const v_matricula = document.querySelector("#validacao-matricula");
const v_lattes = document.querySelector("#validacao-lattes");


//Elementos HTML coisas
const form = document.querySelector("#form");
const radio_professor = document.querySelector("#professor");
const radio_aluno = document.querySelector("#aluno");
const area_curso_label = document.querySelector("#area-curso-label");
const row_lattes = document.querySelector("#row-lattes");

let registro = "Professor";
let conforme = false;

// views
const viewProfessor = () => { 
    area_curso_label.innerHTML = "Área: ";
    row_lattes.classList.remove("hidden");
    registro = "Professor";
}

const viewAluno = () => {
    area_curso_label.innerHTML = "Curso: ";
    row_lattes.classList.add("hidden");
    registro = "Aluno";
}

radio_professor.addEventListener('click', viewProfessor);
radio_aluno.addEventListener('click', viewAluno);


// validações
/* 
    Nome: xxx xxx
    Email: xxx@xxx.xxx
    DataNasc: dd/mm/aaaa
    Telefone-fixo: (xx)xxxx-xxxx > preencher automático traço e parentesis
    Telefone-celular: (xx)xxxx-xxxx > preencher automático traço e parentesis
    curso/area: obrigatório
    
    matrícula   > professor : 5 digitos
                > aluno : 10 digitos
*/

const validarNome = () => {
    let str = nome.value;
    let regex = /[!@#$%^&*(),.?":{}|<>]/;
    if (!regex.test(str)){
        v_nome.innerHTML = "";
        return true;
    }
    else{
        v_nome.innerHTML = "Insira nome e sobrenome válidos";
        nome.value = "";
        return false;
    }
    
}
nome.addEventListener('blur', conforme = validarNome);

const validarEmail = () => {
    let str=email.value;
    if (str.includes("@") && str.includes(".")){
        v_email.innerHTML = "";
        return true;
    }
    else{
        v_email.innerHTML = "Insira um email válido";
        email.value = "";
        return false;
    }
}
email.addEventListener('blur', validarEmail);

const verificarTelefone = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 10) {
        value = value.slice(0, 10);
    }
    const formattedValue = formatarTelefone(value);
    e.target.value = formattedValue;
}

const formatarTelefone = (value) => {
    if (value.length < 3) return value;
    const ddd = value.slice(0, 2);
    const prefix = value.slice(2, 6);
    const suffix = value.slice(6, 10);
    if (suffix) {
        return `(${ddd})${prefix}-${suffix}`;
    } else if (prefix) {
        return `(${ddd})${prefix}`;
    } else {
        return `(${ddd})`;
    }
}

const validarTelefone = (e) => {
    if (e.target == tel_f){
        target = v_tel_f;
    }
    else if (e.target == tel_c){
        target = v_tel_c;
    }

    if (e.target.value.length <= 12){
        target.innerHTML = "Insira um telefone válido";
    }
    else {
        target.innerHTML = "";
    }
}

tel_f.addEventListener('input', verificarTelefone);
tel_c.addEventListener('input', verificarTelefone);
tel_f.addEventListener('blur', validarTelefone);
tel_c.addEventListener('blur', validarTelefone);



const limitarMatricula = () => {
    if (registro == "Aluno") {
        if (matricula.value.length > 10){
            matricula.value = matricula.value.slice(0,10);
        }
    }

    else if (registro == "Professor"){
        if (matricula.value.length > 5){
            matricula.value = matricula.value.slice(0,5);
        }
    }
}

const validarMatricula = () => {
    if (registro == "Aluno") {
        if (matricula.value.length < 10){
            v_matricula.innerHTML = "Insira uma matrícula válida"
            return false;
        }
        else{
            v_matricula.innerHTML = "";
            return true;
        }
    }
    else if (registro == "Professor"){
        if (matricula.value.length < 5){
            v_matricula.innerHTML = "Insira uma matrícula válida"
            return false;
        }
        else{
            v_matricula.innerHTML = "";
            return true;
        }
    }
}

matricula.addEventListener('input', limitarMatricula);
matricula.addEventListener('blur', validarMatricula)

validarAreaCurso = () => {
    if (area_curso.value.length == 0){
        v_area_curso.innerHTML = "Preencha esse campo";
        return false;
    }
    v_area_curso.innerHTML = "";
    return true;
}

area_curso.addEventListener('blur', validarAreaCurso);

validarLattes = () => {
    if (lattes.value.length == 0){
        v_lattes.innerHTML = "Preencha esse campo";
        return false;
    }
    v_lattes.innerHTML = "";
    return true;
}

lattes.addEventListener('blur', validarLattes);

let contd = localStorage.getItem("contd");
if (contd == null){
    contd = 0;
    localStorage.setItem("contd", contd);
}
contd = parseInt(contd);


validarDados = (event) => {
    event.preventDefault();
    if (registro == "Professor"){
        let dados = [
            nome.value, 
            email.value, 
            data_n.value, 
            tel_f.value, 
            tel_c.value, 
            matricula.value, 
            area_curso.value, 
            lattes.value
        ]

        let camposVazios = dados.filter(element => element.length == 0);
        console.log(camposVazios)
        if (camposVazios.length == 0) {
            form.reset();
            camposVazios = [];
            return false;
        }
        return salvarDados();
    }
    if (registro == "Aluno"){
        let dados = [
            nome.value,
            email.value,
            data_n.value,
            tel_f.value,
            tel_c.value,
            matricula.value,
            area_curso.value
        ]

        let camposVazios = dados.filter(element => element.length == 0);
        console.log(camposVazios)
        if (camposVazios.length == 0) {
            form.reset();
            camposVazios = [];
            return false;
        }
        return salvarDados();
    }
}

salvarDados = () => {
    if (registro == "Professor"){
        p = new Professor(
            nome.value, 
            email.value, 
            data_n.value, 
            tel_f.value, 
            tel_c.value, 
            matricula.value, 
            area_curso.value, 
            lattes.value
        );
        localStorage.setItem("obj"+contd, JSON.stringify(p));
    }

    if (registro == "Aluno"){
        a = new Aluno(
            nome.value,
            email.value,
            data_n.value,
            tel_f.value,
            tel_c.value,
            matricula.value,
            area_curso.value
        );
        localStorage.setItem("obj"+contd, JSON.stringify(a));
    }
    contd += 1;
    localStorage.setItem("contd", contd);
    form.reset();
}

enviar.addEventListener('click', validarDados);