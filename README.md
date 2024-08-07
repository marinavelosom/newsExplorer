# News Explorer
## Índice

- [Visão Geral](#visão-geral)
- [Instalação](#instalação)
- [Uso](#uso)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Estrutura de Pastas](#estrutura-de-pastas)
  
## Visão Geral

App desenvolvido com React Native, com o objetivo de mostrar notícias da News API: https://newsapi.org/. 

## Instalação

### Pré-requisitos

- Node.js (v14 ou superior)
- npm (v6 ou superior) ou yarn (v1.22 ou superior)
- Expo CLI (opcional, se você estiver usando Expo)

### Passos

1. Clone o repositório:

    ```bash
    git clone https://github.com/seu-usuario/nome-do-repositorio.git
    cd nome-do-repositorio
    ```

2. Instale as dependências:

    Com npm:
    ```bash
    npm install
    ```

3. Se estiver usando Expo, inicie o projeto:

    ```bash
    npx expo start
    ```

## Uso

Com o App rodando, na home leia as principais notícias do dia ou pesquisa uma pesquisa que deseja. 

## Scripts Disponíveis

Na raiz do projeto, você pode executar:

### `npm start` ou `yarn start`

## Estrutura de Pastas

Uma visão geral da estrutura de pastas do projeto:

```plaintext
.
├── assets              # Arquivos estáticos, como imagens e fontes
├── src
│   ├── components      # Componentes reutilizáveis
│   ├── screens         # Telas da aplicação
│   ├── navigation      # Configuração da navegação
│   ├── services        # Serviços e APIs
│   └── App.tsx         # Componente raiz
├── node_modules        # Módulos Node.js instalados
├── package.json        # Dependências e scripts do projeto
├── tsconfig.json       # Configurações do TypeScript
└── README.md           # Este arquivo
