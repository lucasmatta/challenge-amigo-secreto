//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    let quantidadeAmigos = 0;
    while (quantidadeAmigos < amigos.length) {
        let listaAtual = document.getElementById('listaAmigos');
        let valorLista = listaAtual.innerHTML;
        lista.innerHTML = valorLista + '<li>' + amigos[quantidadeAmigos] + '</li>';
        quantidadeAmigos++;
    }
}

function adicionarAmigo() {
    let textoInput = document.getElementById('amigo');
    let nomeAmigo = textoInput.value;
    if (textoInput.value == "") {
        alert("Por favor, insira um nome.");
    } else {
        amigos.push(nomeAmigo);
        textoInput.value = '';
    }
    atualizarLista();
}

function sortearAmigo() {
    let numeroDeAmigos = amigos.length;
    if (numeroDeAmigos == 0) {
        alert('A lista está vazia!');
    } else {
        let numeroSorteado = parseInt(Math.random() * numeroDeAmigos);
        let campoSorteado = document.getElementById('resultado');
        campoSorteado.innerHTML = amigos[numeroSorteado];
    }
}