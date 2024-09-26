class Tarefa {
    constructor(nome, descricao, status){
        this.nome = nome;
        this.descricao = descricao;
        this.status = status;
    }

    concluir(){
        this.status = "concluída";
    }

    detalhes(){
        return this.nome, this.descricao, this.status;
    }
}

class GerenciadorTarefas {
    #array_tarefas = new Array();
    
    adicionarTarefa(tarefa){
        this.#array_tarefas.push(tarefa);
    }

    listarTarefas(){
        this.#array_tarefas.forEach(element =>{
            //billions must die
            console.log(element)
        })
    }

    marcarComoConcluida(index){
        this.#array_tarefas[index].concluir();
    }

    removerTarefa(index){
        this.#array_tarefas.splice(index, 1);
    }

    visualizarDetalhes(index){
        this.#array_tarefas[index].detalhes();
    }
}