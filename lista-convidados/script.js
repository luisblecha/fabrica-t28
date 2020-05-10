
let convidados = ["João da Silva", "Maria da Silva"]

function adicionar(){
    //pegar o valor
    let nome = document.getElementById("nome").value
    // adicionar no vetor
    convidados.push(nome)
    //atualizar o html
    limparLista()
}

function limparLista(){
    //pegar a section da lista
    let lista = document.getElementById("lista")
    //limpar a lista
    lista.innerHTML=""
    //adiciona os elementos
    for(i=0; i<convidados.length; i++){
lista.innerHTML +=
`<div>
        <span>${convidados[i]}</span>
</div>
`
    }
} 