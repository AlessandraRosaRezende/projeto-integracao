# Projeto de Integração Front-end e Back-end

Este projeto foi desenvolvido como uma resposta ao Desafio de Integração Front-end e Back-end, apresentado para as Turmas 32, 33 e 34. O documento do desafio pode ser acessado [aqui](https://docs.google.com/document/d/1wFEarBZaNtNSZKXgwuas8IReCnw292tZ1Ub6r_CK5k4/edit?usp=sharing).

## Objetivo do Projeto

O objetivo principal deste projeto é fornecer um template básico com a rota `/get` já implementada, incluindo a verificação da role da pessoa que fez o login. Este repositório está sendo disponibilizado para auxiliar aqueles que tiveram dificuldades em iniciar o desafio, permitindo que tentem completar os requisitos solicitados a partir deste ponto de partida.

## Funcionalidades Implementadas

- Rota `/get` com verificação da role do cliente após o login. Caso seja a pessoa administradora, conseguirá acessar os dados de todos os clientes cadastrados, e caso seja um usuário, consegue acessar apenas seus próprios dados.

## Instruções para Contribuição

Se você deseja contribuir para este projeto, siga as etapas abaixo:

1. Clone o repositório
2. Instale as dependências
3. Faça as alterações necessárias no código.
4. Envie um pull request com uma descrição clara das alterações realizadas.

## Execução

Para executar o projeto em seu ambiente local, siga os passos abaixo:

1. Suba o docker-compose. A aplicação já vai iniciar.
2. A aplicação estará disponível na porta 3000.

Certifique-se de consultar a documentação do Desafio para obter detalhes sobre os requisitos e possíveis melhorias.

## Tecnologias Utilizadas

- Node.js
- Express
- Outras dependências (listadas no arquivo `package.json`)
