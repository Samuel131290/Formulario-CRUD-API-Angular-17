# Formulario CRUD Angular 18 com API JSON Server

## Descrição:
Este projeto é um sistema CRUD (Create, Read, Update, Delete) desenvolvido em Angular 18. Utiliza o JSON Server como API para gerenciar os dados dos usuários,
permitindo o cadastro, atualização, seleção e remoção de usuários através de um formulário. O objetivo principal é demonstrar como integrar uma aplicação Angular com um backend simulado usando JSON Server.

## Funcionalidades do Sistema:
- Cadastro de usuários: Permite o cadastro do nome, idade e cidade do usuário.
- Atualização de usuários: Consiste em alterar o nome, idade e cidade do usuário.
- Seleção de usuários: Seleção individual de cada usuário.
- Remoção de usuários: Permite a remoção do usuário do sistema.

## Tecnologias Utilizadas:
- Angular CLI version 18.1.0.
- JSON Server version 0.17.4


## COMO EXECUTAR O PROGRAMA?

## Instalar o Node Modules
Ao executar `ng serve` os seguinte erro irá ocorrer: 
- Node packages may not be installed. Try installing with 'npm install'.
- Error: Could not find the '@angular-devkit/build-angular:dev-server' builder's node package.

O erro ocorre porque o projeto está sem módulos do node. Para adicionar os módulos, é necessário o seguinte comando:
`npm install`

## Executar o JSON Server

Esse projeto depende do JSON Server sendo executado em paralelo para que funcione adequadamente. Para isso, o seguinte comando deve ser executado:
- npm i json-server@0.17.4 <!-- Instala as deendencias do JSON-Server-->
- npx json-server produtos.json
