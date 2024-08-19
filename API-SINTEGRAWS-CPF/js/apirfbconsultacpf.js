document.getElementById('cpfForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const token = 'SEU_TOKEN_DE_ACESSO';
    const cpf = document.getElementById('cpf').value.replace(/\D/g, ''); // Remove qualquer caractere não numérico
    const nascimento = document.getElementById('nascimento').value;

    const url = `https://www.sintegraws.com.br/api/v1/execute-api.php?token=${token}&cpf=${cpf}&data-nascimento=${nascimento}&plugin=CPF`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if(data.status === "OK") {
                document.getElementById('result').innerHTML = `
                    <h3>Resultado da Consulta</h3>
                    <p>CPF: ${data.cpf}</p>
                    <p>Nome: ${data.nome}</p>
                    <p>Gênero: ${data.genero}</p>
                    <p>Data de Nascimento: ${data.data_nascimento}</p>
                    <p>Situação Cadastral: ${data.situacao_cadastral}</p>
                    <p>Data de Inscrição: ${data.data_inscricao}</p>
                    <p>Dígito Verificador: ${data.digito_verificador}</p>
                    <p>Comprovante: ${data.comprovante}</p>
                `;
            } else {
                document.getElementById('result').innerHTML = `<p>${data.message}</p>`;
            }
        })
        .catch(error => {
            console.error('Erro:', error);
            document.getElementById('result').innerHTML = '<p>Ocorreu um erro ao realizar a consulta.</p>';
        });
});
