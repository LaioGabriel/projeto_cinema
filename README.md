# 🎬 Cineminha

Uma plataforma moderna e performática para exploração de filmes, desenvolvida com **Next.js** e integrada à API do **TMDB**. O projeto foca em uma experiência de usuário premium, com design cinematográfico e recursos de segurança de conteúdo.

---

## 🚀 Tecnologias

- **Next.js** (App Router)
- **TypeScript** (Tipagem estática segura)
- **Tailwind CSS** (Estilização moderna e responsiva)
- **Axios** (Consumo de API)
- **Tabler Icons** (Ícones vetoriais)

---

## ✨ Funcionalidades

- **Exploração Dinâmica**: Filtre filmes por categorias como "Em Cartaz", "Populares" ou "Bem Avaliados".
- **Busca em Tempo Real**: Encontre filmes específicos através da barra de pesquisa integrada.
- **Tema Dark Premium**: Interface imersiva com tons de Midnight Blue e efeitos de Glassmorphism.
- **Proteção de Conteúdo (+18)**: Sistema de detecção de conteúdo maduro com efeito de _blur-to-reveal_ (desfoque que sai ao clicar).
- **Performance Otimizada**: Uso do componente `next/image` para carregamento inteligente e responsivo de pôsteres.
- **Arquitetura Escalável**: Lógica de negócio separada da interface através de Custom Hooks.

---

## 🏗️ Estrutura do Projeto

A aplicação foi organizada seguindo o princípio de responsabilidade única:

```bash
📦 projeto_cinema
 ┣ 📂 app
 ┃ ┣ 📂 .components   # Componentes modulares (UI)
 ┃ ┣ 📂 .hooks         # Hooks personalizados (Lógica/API)
 ┃ ┣ 📂 .types         # Definições de tipos TypeScript
 ┃ ┣ 📜 layout.tsx     # Estrutura global
 ┃ ┗ 📜 page.tsx       # Página principal (Orquestradora)
 ┣ � public           # Ativos estáticos
 ┣ 📜 .env.local       # Variáveis de ambiente (Chave API)
 ┗ 📜 next.config.ts   # Configurações do Next.js
```

---

## ⚙️ Instalação e Uso

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/LaioGabriel/projeto_cinema.git
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Configure as Variáveis de Ambiente:**
   Crie um arquivo `.env.local` na raiz e adicione sua chave do TMDB:

   ```env
   NEXT_PUBLIC_TMDB_API_KEY=sua_chave_aqui
   ```

4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

---

## 🧑‍💻 Autor

Desenvolvido com carinho por **Laio Gabriel**.

---

## 📝 Licença

Este projeto está sob a licença **MIT**.
