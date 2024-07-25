# Projetos

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Instalar o Node Modules

Ao executar `ng serve` os seguinte erro irá ocorrer: 
-Node packages may not be installed. Try installing with 'npm install'.
-Error: Could not find the '@angular-devkit/build-angular:dev-server' builder's node package.

O erro ocorre porque o projeto está sem módulos do node. Para adicionar os módulos, é necessário o seguinte comando:
`npm install`

## Executar o JSON Server

Esse projeto depende do JSON Server sendo executado em paralelo para que funcione adequadamente. Para isso, o seguinte comando deve ser executado:

npm i json-server@0.17.4 <!-- Instala as deendencias do JSON-Server-->
npx json-server produtos.json