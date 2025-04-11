# Authify Frontend

Authify é um gerenciador de usuários que fornece uma interface intuitiva para administração de contas e permissões. Este repositório contém o frontend do projeto, desenvolvido com React, TypeScript, Next.js, GraphQL e Tailwind CSS.

## Índice

- [Começando](#começando)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Contribuindo](#contribuindo)
- [Licença](#licença)

## Começando

Para configurar o ambiente de desenvolvimento localmente, siga os passos abaixo:

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/Eduardo-Paixao/Authify-Front.git
   ```

2. **Navegue até o diretório do projeto:**

   ```bash
   cd Authify-Front
   ```

3. **Instale as dependências:**

   ```bash
   npm install
   # ou
   yarn install
   ```

4. **Inicie o servidor de desenvolvimento:**

   ```bash
   npm run dev
   # ou
   yarn dev
   ```

5. **Abra o aplicativo no navegador:**

   Acesse [http://localhost:3000](http://localhost:3000) para visualizar o projeto em execução.

## Scripts Disponíveis

No diretório do projeto, você pode executar:

- ``: Inicia o servidor de desenvolvimento.
- ``: Compila o projeto para produção.
- ``: Inicia o servidor de produção após a compilação.
- ``: Executa o linter para verificar problemas no código.

## Estrutura do Projeto

A estrutura básica do projeto é a seguinte:

```
Authify-Front/
├── public/              # Arquivos públicos (imagens, ícones, etc.)
├── src/
│   ├── app/             # Páginas e componentes principais
│   ├── components/      # Componentes reutilizáveis
│   ├── lib/             # Helpers, funções utilitárias, etc.
│   ├── styles/          # Arquivos de estilo
│   └── graphql/         # Mutations, queries e client do Apollo
├── .gitignore
├── next.config.ts
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## Tecnologias Utilizadas

As principais tecnologias e bibliotecas utilizadas neste projeto estão organizadas abaixo:

### 🧱 Framework & Linguagem

- **Next.js** – Framework React com suporte a SSR, SSG e rotas baseadas em arquivos.
- **React** – Biblioteca para construção de interfaces de usuário.
- **TypeScript** – Superset de JavaScript com tipagem estática.

### 🎨 Estilização e UI

- **Tailwind CSS** – Utilitário CSS para estilização rápida e responsiva.
- **class-variance-authority** – Geração condicional de classes (especialmente com Tailwind).
- **clsx** – Combinação de classes CSS condicionalmente.
- **lucide-react** – Ícones SVG modernos e personalizáveis para React.

### 🔗 Comunicação com API

- **GraphQL** – Linguagem de consulta para APIs.
- **@apollo/client** – Cliente GraphQL completo para React, com gerenciamento de estado e cache.

### ✅ Validação e Formulários

- **zod** – Validação de dados baseada em esquemas.
- **react-hook-form** – Biblioteca performática para controle de formulários.

### 🍜 Autenticação e Armazenamento

- **js-cookie** – Manipulação de cookies no navegador.
- **jwt-decode** – Decodificação de tokens JWT para autenticação.

### ⚙️ Utilitários e Ferramentas

- **react-hot-toast** – Sistema de toasts e notificações modernas.
- **eslint**, **prettier** – Linter e formatador de código.
- **tailwind-variants** – Definição de variantes reutilizáveis com Tailwind.

## Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork deste repositório.
2. Crie uma branch para sua feature: `git checkout -b feature/nova-feature`
3. Commit suas alterações: `git commit -m 'feat: adiciona nova feature'`
4. Envie para o repositório remoto: `git push origin feature/nova-feature`
5. Abra um Pull Request

## Melhrias

1. Considerar lazy loading em componentes maiores ou menos acessados.

2. Utilizar o recurso de Image Optimization do Next.js para otimizar imagens automaticamente.

3. Adicionar cabeçalhos de segurança como CSP (Content Security Policy).

4. Incluir sanitização explícita de inputs do usuário para mitigar riscos de XSS.

5. Se o projeto crescer, considerar o uso de autenticação com refresh tokens e expirations controladas.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
