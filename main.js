const form = document.getElementById('form-contatos');
const atividade = [];
const nota = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizarNumber();
});

function adicionaLinha() {
    const inputNomeContatos = document.getElementById('nome-contatos'); 
    const inputNumberContatos = document.getElementById('number-contatos');

    if (atividade.includes(inputNomeContatos.value)) {
        alert(`O contato: ${inputNomeContatos.value} já foi inserido!`);
    } else {
        atividade.push(inputNomeContatos.value); 
        nota.push(parseFloat(inputNumberContatos.value));

        let linha = '<tr>';
        linha += `<td>${inputNomeContatos.value}</td>`; 
        linha += `<td>${inputNumberContatos.value}</td>`;
        linha += '</tr>';
    
        linhas += linha;
    }

    inputNomeContatos.value = ''; 
    inputNumberContatos.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
