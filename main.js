function validarFormulario() {
    const valorA = parseFloat(document.getElementById('numero-a').value);
    const valorB = parseFloat(document.getElementById('numero-b').value);

    if (valorB > valorA) {
        alert('Formulário válido!');
        return true;
    } else {
        alert('O valor de B deve ser maior que o valor de A.');
        return false; }
}

document.getElementById('meuFormulario').onsubmit = validarFormulario;