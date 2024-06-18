document.getElementById('form-contato').addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = document.getElementById('nome-contato').value;
    const telefone = document.getElementById('numero-contato').value;
    const tabela = document.querySelector('.tabela table tbody');

    const novaLinha = tabela.insertRow();
    const celulaNome = novaLinha.insertCell(0);
    const celulaTelefone = novaLinha.insertCell(1);
    const celulaCTA = novaLinha.insertCell(2);

    celulaNome.textContent = nome;
    celulaTelefone.innerHTML = '<a href="tel:' + telefone + '">' + telefone + '</a>';
    celulaCTA.innerHTML = '<a href="tel:' + telefone + '"><img src ="./img/ligar.png" alt="ícone ligar"/></a>';

    document.getElementById('nome-contato').value = '';
    document.getElementById('numero-contato').value = '';
});
