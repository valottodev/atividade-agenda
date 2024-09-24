const form = document.getElementById('form-contato');
const contatos = [];
const telefones = [];

let linhas = '';

form.addEventListener('submit', (e) => {
    e.preventDefault();
    adicionaLinha();
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-ctt');
    const inputTelefone = document.getElementById('tel-ctt');

    if (contatos.includes(inputNomeContato.value) || telefones.includes(inputTelefone.value)) {
        alert('Este contato ou telefone já existem');
    } else {
        contatos.push(inputNomeContato.value);
        telefones.push(inputTelefone.value);
        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputTelefone.value}</td>`;
        linha += '</tr>'
    
        linhas += linha;
        document.querySelector('tbody').innerHTML = linhas;
    }
    
    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}