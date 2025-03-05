//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];
let lista = document.getElementById('listaAmigos');
lista.innerHTML = '';
for (let i = 0; i < amigos.length; i++){
    let item = document.createElement('li')
}

function adicionarAmigo(){
    let campoNome = document.getElementById('amigo')
    let nome = campoNome.value;
    if (nome === ''){
        alert('Digite um nome.')
        return;
    }
        
    amigos.push(nome)
    limparCampo();
    AtualizarLista();
    console.log(nome);
} 

function AtualizarLista(){
    let lista = document.getElementById('listaAmigos')
    lista.innerHTML = '';
    amigos.forEach(function(nome) {
    lista.innerHTML += `<li>${nome}</li>`
    })
    }

AtualizarLista();

function sortearAmigo(){
    if (amigos.length === 0){
        alert('A lista de amigos esta vazia!')
        return;
    }
    let amigosAleatorios = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[amigosAleatorios];
    document.getElementById("resultado").innerHTML = `O seu amigo secreto é: <strong>${amigoSorteado}</strong>`;
    amigos.splice(amigosAleatorios, 1);
    AtualizarLista();
} 

function limparCampo(){
    nome = document.getElementById('amigo')
    nome.value = '';
}
   