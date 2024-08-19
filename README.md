Código JavaScript/HTML/CSS para consultar as informações de CPF do SINTEGRAWS através das API´S pagas.
https://www.sintegraws.com.br

Detalhes:
---------
Token:
------
Substitua 'SEU_TOKEN_DE_ACESSO' pelo seu token real obtido após o cadastro no portal da SintegraWS.
Validação de CPF e Data de Nascimento: O código remove qualquer caractere não numérico do CPF antes de enviá-lo para a API.
Certifique-se de que a data de nascimento seja fornecida no formato DDMMAAAA.

Manipulação de Erros:
---------------------
Se a API retornar um erro (status diferente de "OK"), o código exibirá a mensagem de erro fornecida pela API.

Segurança:
----------
Tenha cuidado ao expor tokens diretamente em JavaScript.
Considere utilizar uma solução de back-end para maior segurança em aplicações reais.
