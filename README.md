# Sistema de Acompanhamento de Bolsistas

<p align="center"> 
    <img alt = "Languages" src="https://img.shields.io/github/languages/count/boliveira12/MATE85-Acompanhamento-Bolsistas">
    <img alt = "Tamanho" src="https://img.shields.io/github/repo-size/boliveira12/MATE85-Acompanhamento-Bolsistas">
    <img alt = "Commit" src="https://img.shields.io/github/last-commit/boliveira12/MATE85-Acompanhamento-Bolsistas">
    <img alt = "Issues" src="https://img.shields.io/github/issues/moniquedsilva/moviebox">
</p>

### Links
[Proposta](https://docs.google.com/presentation/d/1ZFmNTl_J1z1zFfDj0APUG5PGdL459QwKcUtnf4H48xU/edit#slide=id.ge7debf7083_0_0) | 
[Requisitos](https://docs.google.com/spreadsheets/d/1mP9sHRCpoDyPzAqeXPOXbrTp8NNgGUztj0FgI-nQb7k/edit?usp=sharing) |
[Trello](https://trello.com/b/7WXXkO3h/gest%C3%A3o-de-projeto) |
[Protótipo](https://www.figma.com/file/c2RJlrC3kbbUfr1EI1tzdL/MATE85-Equipe2?node-id=0%3A1) | 
[Versão de desenvolvimento](#) |
[Documentação Back-End](https://documenter.getpostman.com/view/20042731/VUxUN5M3) |
[Protótipo Web](https://aux-bolsitas.netlify.app/) |
[API](https://aux-bolsistas.herokuapp.com/v1/students/list/all)

### Sumário

- [Sistema de Acompanhamento de Bolsistas](#sistema-de-acompanhamento-de-bolsistas)
    - [Links](#links)
    - [Sumário](#sumário)
  - [Informações Gerais](#informações-gerais)
    - [Orientador](#orientador)
    - [Datas](#datas)
  - [Equipe](#equipe)
  - [Especificações técnicas](#especificações-técnicas)
    - [Tecnologias utilizadas](#tecnologias-utilizadas)
    - [Instruções de instalação](#instruções-de-instalação)
    - [Executando o projeto localmente](#executando-o-projeto-localmente)
    - [Requerimentos](#requerimentos)
    - [Estrutura dos diretórios](#estrutura-dos-diretórios)
    - [Scripts](#scripts)

## Informações Gerais

### Orientador

-   **Nome:** Fred Durão

### Datas

-   **Início do desenvolvimento:** 15/08/2022
-   **Prazo de entrega:** 05/12/2022

## Equipe

-   **Líder**: Lucas de Andrade Lima
-   **Vice-líder:** Bruno Oliveira
-   **Front-end:** Beatriz Machado da Cruz, Bruno de Lucas Santos Barbosa, Danilo Chaimsohn Gonçalves, Monique Santos da Silva
-   **Back-end:** Breno Henrique Rosas do Nascimento, Bruno de Lucas Santos Barbosa, Gabriel Macedo, Gustavo Oliveira Quinteiro
-   **UX/UI design:** Monique Santos da Silva

## Especificações técnicas

### Tecnologias utilizadas

**Front-end:**
-   ⚛️ React 18.
-   ⛑ Javascript.
-   🎨 TailwindCSS 3.
-   📏 ESLint — Encontre e corrija problemas em seu código.
-   💖 Prettier — Formatador de código para estilo consistente.
-   ⚙️ EditorConfig - Manter estilos de codificação consistentes entre editores e IDEs.
-   🗂 Path Mapping — Importar componentes ou imagens pelo caminho absoluto.
  
**Back-end:**
-   📗 NodeJS.
-   🧵 Typescript.
-   🦁 NestJS.
-   📏 ESLint — Encontre e corrija problemas em seu código.
-   💖 Prettier — Formatador de código para estilo consistente.
-   ⚙ DotEnv — Variáveis de ambiente para maior segurança no código.

### Instruções de instalação

**Front-end**
```bash
# Você precisa ter node e yarn em sua máquina para executar o projeto
$ node -v
$ yarn -v

# Clone este repositório na sua máquina:
$ git clone https://github.com/boliveira12/MATE85-Acompanhamento-Bolsistas.git

# Abra a pasta do projeto
$ cd /MATE85-Acompanhamento-Bolsistas/frontend

# Execute o yarn install para instalar as dependências
$ yarn install
```

**Back-end**
```bash
# Você precisa ter node e yarn em sua máquina para executar o projeto
$ node -v
$ yarn -v

# Clone este repositório na sua máquina:
$ git clone https://github.com/boliveira12/MATE85-Acompanhamento-Bolsistas.git

# Abra a pasta do projeto
$ cd /MATE85-Acompanhamento-Bolsistas/backend

# Execute o npm install para instalar as dependências
$ npm install
```

### Executando o projeto localmente

**Front-end**
```bash
# Abra a pasta do projeto
$ cd /MATE85-Acompanhamento-Bolsistas/frontend

# Execute yarn run dev para iniciar
$ yarn run dev

# A página será aberta em http://localhost:3000 ou outro número de porta designado
```

**Back-end**
```bash
# Abra a pasta do projeto
$ cd /MATE85-Acompanhamento-Bolsistas/backend

# Execute yarn start para iniciar
$ npm start

# A API funcionará em http://localhost:3000 ou outro número de porta designado
```

### Requerimentos

**Front-end**
-   Node.js >= 12.22.0 
-   Yarn 1

**Back-end**
-   Node.js >= 16.22.0
-   NPM 8

### Estrutura dos diretórios

**Front-end**
-   `.vscode` — Manter estilos de codificação consistentes.
-   `public` — Aquivos estáticos, como imagens e favicon.
-   `src` — Código-fonte do aplicativo, incluindo páginas, componentes, estilos.
  
**Back-end**
-   `/dist` — Arquivos compilados do Typescript.
-   `/node_modules` — Dependências do projeto.
-   `/test` — Testes unitários.
-   `/src` — Código-fonte da aplicação.

### Scripts

**Front-end**
-   `yarn dev` — Inicia o aplicativo no modo de desenvolvimento em http://localhost:3000.
-   `yarn build` — Cria uma compilação de produção otimizada do seu aplicativo.
-   `yarn eject` — Remove a dependência build do projeto.
-   `yarn lint` — Executa o ESLint para todos os arquivos no diretório src.
-   `yarn lint:fix` — Executa o ESLint e corrige erros de formatação para todos os arquivos no diretório src.
-   `yarn format` — Executa o Prettier para todos os arquivos no diretório src.

**Back-end**
-   `npm start` — Inicia a aplicação escutando na porta http://localhost:3000 caso outra não seja configurada manualmente.
-   `npm build` — Cria uma compilação de produção otimizada da aplicação.
-   `npm run lint` — Executa o ESLint para todos os arquivos no diretório src.
-   `npm format` — Executa o Prettier para todos os arquivos no diretório src.
