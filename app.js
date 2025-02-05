// Array para armazenar os nomes
const listaDeAmigos = [];

// Função para adicionar um nome à lista
function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    if (nome === '') {
        alert('Por favor, insira um nome válido.');
        return;
    }

    // Adiciona o nome à lista e limpa o campo de entrada
    listaDeAmigos.push(nome);
    input.value = '';

    // Atualiza a lista visível na página
    atualizarLista();
}

// Função para atualizar a exibição da lista de amigos
function atualizarLista() {
    const ul = document.getElementById('listaAmigos');
    ul.innerHTML = '';

    listaDeAmigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        ul.appendChild(li);
    });
}

// Função para realizar o sorteio
function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert('Adicione ao menos um nome antes de realizar o sorteio.');
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * listaDeAmigos.length);
    const amigoSorteado = listaDeAmigos[indiceSorteado];

    // Exibe o resultado do sorteio
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<p>O amigo sorteado é: <strong>${amigoSorteado}</strong></p>`;
}