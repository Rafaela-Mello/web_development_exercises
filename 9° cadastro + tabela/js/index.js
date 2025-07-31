document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('formulario');
    formulario.addEventListener('submit', handleFormSubmit);
});

function handleFormSubmit(event) {
    event.preventDefault();

    const paciente = obterDadosFormulario();
    paciente.imc = calcularImc(paciente.peso, paciente.altura);

    adicionarPacienteNaTabela(paciente);
    limparFormulario();
}

function obterDadosFormulario() {
    const nome = document.getElementById('nome').value;
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);
    const gordura = parseFloat(document.getElementById('gordura').value);

    return { nome, altura, peso, gordura };
}

function calcularImc(peso, altura) {
    return peso / (altura * altura);
}

function adicionarPacienteNaTabela({ nome, peso, altura, gordura, imc }) {
    const tabela = document.querySelector('#tabela tbody');
    const linha = tabela.insertRow();

    inserirCelula(linha, nome);
    inserirCelula(linha, peso.toFixed(2));
    inserirCelula(linha, altura.toFixed(2));
    inserirCelula(linha, gordura.toFixed(2));
    inserirCelula(linha, imc.toFixed(2));
}

function inserirCelula(linha, valor) {
    const celula = linha.insertCell();
    celula.textContent = valor;
}

function limparFormulario() {
    document.getElementById('formulario').reset();
}

function resetarTabela() {
    const tbody = document.querySelector('#tabela tbody');
    tbody.innerHTML = '';
}

function resetarFormularioETabela() {
    limparFormulario();
    resetarTabela();
}