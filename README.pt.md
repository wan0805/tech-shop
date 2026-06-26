<h1>TECH-SHOP</h1>
<p align="center">
  <img src="https://raw.githubusercontent.com/lipis/flag-icons/main/flags/4x3/br.svg" width="20" alt="Portugues"> <b>Português</b> | 
  <img src="https://raw.githubusercontent.com/lipis/flag-icons/main/flags/4x3/us.svg" width="20" alt="English"> <a href="/README.md">English</a> | 
  <img src="https://raw.githubusercontent.com/lipis/flag-icons/main/flags/4x3/es.svg" width="20" alt="Español"> <a href="/README.es.md">Español</a>
</p>
<p align="left">
  <em><code>❯ Uma plataforma de e-commerce moderna, rápida e intuitiva para a venda de produtos de tecnologia.</code></em>
</p>

![tech shop banner](src/assets/screenshots/tech-shop-banner.jpg)

<p align="left">Construído com as ferramentas e tecnologias:</p>
<p align="center">
	<img src="https://img.shields.io/badge/npm-CB3837.svg?style=flat&logo=npm&logoColor=white" alt="npm">
	<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=flat&logo=HTML5&logoColor=white" alt="HTML5">
	<img src="https://img.shields.io/badge/Vue.js-4FC08D.svg?style=flat&logo=vuedotjs&logoColor=white" alt="Vue.js">
	<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=flat&logo=TypeScript&logoColor=white" alt="TypeScript">
	<img src="https://img.shields.io/badge/Vite-646CFF.svg?style=flat&logo=Vite&logoColor=white" alt="Vite">
	<img src="https://img.shields.io/badge/GitFlow-F34F29.svg?style=flat&logo=git&logoColor=white" alt="GitFlow">
	
</p>
</div>
<br clear="right">

## 🔗 Links Rápidos

- [📍 Visão Geral](#-visão-geral)
- [📸 Capturas de Tela](#-capturas-de-tela)
- [👾 Recursos](#-recursos)
- [📁 Estrutura do Projeto](#-estrutura-do-projeto)
  - [📂 Índice do Projeto](#-índice-do-projeto)
- [🚀 Primeiros Passos](#-primeiros-passos)
  - [☑️ Pré-requisitos](#-pré-requisitos)
  - [⚙️ Instalação](#-instalação)
  - [🤖 Como Usar](#-como-usar)
- [📈 Próximos Passos](#-próximos-passos)
- [🔗 Links & Contatos](#-links-&-Contatos)
- [🎗 Licença](#-licença)
- [🙌 Agradecimentos](#-agradecimentos)

---

## 📍 Visão Geral

<code>❯ TECH-SHOP é uma plataforma de e-commerce de alta performance para produtos de tecnologia. Construído com Vue.js 3, TypeScript, Tailwind CSS e Vite, e alimentado pela API do <a href="https://dummyjson.com/" target="_blank">DummyJSON</a>, o projeto combina uma interface fluida e reativa com um ecossistema seguro e ultra-rápido, garantindo a melhor experiência de compra para o usuário.</code>

---

## 📸 Screenshots

<details>
  <summary>📸 Clique para ver as Screenshots</summary>
  
  ### Principal
  ![tech-sop-banner](src/assets/screenshots/tech-shop-banner.jpg)

### Detalhes do Produto

![tech-shop-product-detail](src/assets/screenshots/tech-shop-product-detail.jpg)

### Carrinho Lateral

![tech-shop-side-cart](src/assets/screenshots/tech-shop-side-cart.jpg)

### Carrinho Lateral (Vazio)

![tech-shop-side-cart-empty](src/assets/screenshots/tech-shop-side-cart-empty.jpg)

### Página do Carrinho

![tech-shop-cart](src/assets/screenshots/tech-shop-cart-page.jpg)

### Página do Carrinho (Vazia)

![tech-shop-cart-empty](src/assets/screenshots/tech-shop-cart-page-empty.jpg)

</details>

---

## 👾 Funcionalidades

- 🛒 **Carrinho Avançado:** Funcionalidade completa de CRUD (Adicionar, Ler, Atualizar, Deletar) com atualizações em tempo real.
- 📦 **Gerenciamento de Estado:** Estado global centralizado e otimizado alimentado pelo **Pinia**.
- 💾 **Armazenamento Persistente:** Retenção de dados para sessões de usuário e itens do carrinho gerenciada através de **funções utilitárias** customizadas para LocalStorage.
- 🔔 **Notificações Toast Artesanais:** Um sistema de notificações leve e personalizado, construído totalmente do zero usando Vue **Composables** para feedback do usuário em tempo real.
- 🔢 **Totais Reativos:** Cálculo automático de subtotais e impostos diretamente através da store de estado.
- 🎨 **UI Moderna:** Interface limpa e componentizada construída com **Tailwind CSS**.
- 📱 **Totalmente Responsivo:** Design mobile-first que se adapta perfeitamente a qualquer tamanho de tela.
- ⚡ **Performance Otimizada:** Builds de desenvolvimento e produção extremamente rápidos via **Vite**, contando com _lazy loading_ para as rotas principais.
- 🏷️ **Títulos de Página Dinâmicos:** Atualizações automáticas do título do navegador durante a navegação, gerenciadas dinamicamente via meta fields do **Vue Router**.
- 🌿 **Fluxo de Trabalho GitFlow:** Projeto desenvolvido utilizando modelos estritos de branching (`main`, `develop`, `feature/*`), garantindo um histórico limpo e organização de lançamentos.

---

## 📁 Estrutura do Projeto

```sh
└── tech-shop/
    ├── README.md
    ├── env.d.ts
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── public
    │   └── favicon.svg
    ├── src
    │   ├── App.vue
    │   ├── assets
    │   ├── components
    │   ├── composables
    │   ├── main.ts
    │   ├── router
    │   ├── store
    │   ├── types
    │   ├── utils
    │   └── views
    ├── tsconfig.app.json
    ├── tsconfig.json
    ├── tsconfig.node.json
    └── vite.config.ts
```

---

## 🚀 Primeiros Passos

### ☑️ Pré-requisitos

Antes de começar com o tech-shop, certifique-se de que seu ambiente de execução atenda aos seguintes requisitos:

- **Ambiente de Execução:** Node.js (v18.x ou superior)
- **Gerenciador de Pacotes:** npm (v9.x ou superior)

### ⚙️ Instalação

Instale o tech-shop utilizando um dos seguintes métodos:

**Compilar a partir do código-fonte:**

1. Clone o repositório do tech-shop:

```sh
 git clone https://github.com/wan0805/tech-shop
```

2. Navegue até o diretório do projeto:

```sh
 cd tech-shop
```

3. Instale as dependências do projeto:

```sh
 npm install
```

### 🤖 Como Usar

Execute o tech-shop utilizando o seguinte comando:
**Utilizando `npm`** &nbsp;

```sh
npm run dev
```

Para gerar o build de produção do projeto:

```sh
 npm run build
```

---

## 📈 Próximos Passos

- [ ] **`Tarefa 1`**: Implementar testes unitários utilizando Vitest.

---

## 🔗 Links & Contatos

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/wan0805/tech-shop)

[![Live Demo](https://img.shields.io/badge/Live_Demo-4CAF50?style=for-the-badge&logo=google-chrome&logoColor=white)](https://tech-shop-eta-ten.vercel.app/)

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/wanderson-duarte-a9778711b)

---

## 🎗 Licença

![GitHub License](https://img.shields.io/github/license/wan0805/tech-shop?style=flat-square)

Este projeto está licenciado sob a Licença MIT - consulte o arquivo [LICENSE](/LICENSE) para mais detalhes.

---

## 🙌 Agradecimentos

- [DummyJSON API](https://dummyjson.com/) - Pelo fornecimento da API REST gratuita e estável com os dados de produtos tech, categorias e imagens.
- [Vue.js Ecosystem](https://vuejs.org/) - Pela excelente documentação do Vue 3, Pinia e Vue Router.
- [Tailwind CSS Components](https://tailwindcss.com/) - Pelos utilitários de estilização que permitiram a criação de uma interface moderna e responsiva de forma ultra rápida.
- [Shields.io](https://shields.io/) - Pelos badges dinâmicos e estáticos utilizados na estilização deste README.

---
