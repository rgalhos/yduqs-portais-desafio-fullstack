# Yduqs Portal Fullstack

# Manual do desenvolvedor

## Back-end

O back-end deste projeto foi desenvolvido utilizando o framework _Nest.js_ (versão 11.0) com _Typescript_ (versão 5.7). Foi escolhido o _PostgreSQL_ como banco de dados e _Sequelize_ (versão 6.37) como ORM. Recomenda-se utilizar a versão **22.14.0 (LTS)** do _Node.js_ tanto para desenvolvimento quanto para produção.

### Executando a aplicação

As variáveis de ambientes são definidas através de um aquivo `.env` na raíz do back-end (`/api`).

- `PORT` - Porta do back-end (Porta padrão: `3050`)
- `DATABASE_HOST` - Host do banco de dados
- `DATABASE_PORT` - Porta do banco de dados
- `DATABASE_USER` - Usuário do banco de dados
- `DATABASE_PASSWORD` - Senha do banco de dados
- `DATABASE_DB` - Tabela do banco de dados
- `EXPOSE_SWAGGER` - Variável para ativar o Swagger (valor de ativação: `true`)

### Ambiente de desenvolvimento

Primeiramente é necessário instalar as dependências com o seguinte comando:

```shell
npm ci
```

Feito isso, pode-se iniciar o servidor de desenvolvimento com o seguinte comando:

```shell
npm run start:dev
```

O serviço estará disponível em `localhost:3500`.

#### Estrutura dos diretórios

- `/src` - Código-fonte
  - `/src/core` - Arquivos principais de configuração
  - `/src/core/database/migrations` - Migrações do banco de dados
  - `/src/core/database/seeders` - Migrações do banco de dados
  - `/src/modules` - Módulos da API
    - `/src/modules/{módulo}` - Controllers, services, repositories, models e DTOs dos módulos
    - `/src/core/{página}/{subpáginas}` - Subpáginas
    - `/src/core/{página}/shared` - Resolvers, DTOs, Models e Services relacionados à `{pagina}`
  - `/src/tests` - Testes da API

### Ambiente de produção

#### Docker

A pasta raíz do projeto (`/`) contém um arquivo `docker-compose.yml` e pasta raíz do back-end (`/api`) contém um `Dockerfile` para facilitar o deploy dos serviços.

#### Node

Instale as dependências com `npm ci` e compile o projeto executando `npm run build`.

A versão compilada do projeto será gerada na pasta `/dist`. Basta executar o comando `npm run start:prod`. O proxy reverso (por exemplo, NGINX) deve ser configurado para encaminhar as requisições ao serviço back-end.

## Front-end

Este projeto foi desenvolvido utilizando o framework _Next.js_ (versão 15) com _Typescript_ (versão 5.7) e a biblioteca de componentes _MUI_ (versão 7.3). Recomenda-se utilizar a versão **22.14.0 (LTS)** do _Node.js_ tanto para desenvolvimento quanto para produção.

### Executando a aplicação

As variáveis de ambientes são definidas através de um aquivo `.env` na raíz do front-end (`/web`).

- `NEXT_PUBLIC_API_BASE_URL` - URL base para a API

### Ambiente de desenvolvimento

Primeiramente é necessário instalar as dependências com o seguinte comando:

```shell
npm ci
```

Feito isso, pode-se iniciar o servidor de desenvolvimento com o seguinte comando:

```shell
npm run dev
```

O serviço estará disponível em `localhost:3000`.

#### Estrutura dos diretórios

- `/public` - Arquivos estáticos
- `/src` - Código-fonte
  - `/src/app` - Arquivos globais das rotas (Estilos)
  - `/src/components` - Componentes compartilhados
  - `/src/lib` - Árquivos úteis (hooks, utils)
  - `/src/pages` - Páginas
    - `/src/pages/{page}` - Página
    - `/src/pages/{page}/_components` - Componentes específicos da página
    - `/src/pages/{page}/_schemas` - Schemas de formulários (caso haja)
    - `/src/pages/{page}/_actions` - Ações da API
  - `/src/shared` - Arquivos que podem ser compartilhados entre server components e client components

#### Docker

A pasta raíz do projeto (`/`) contém um arquivo `docker-compose.yml` e pasta raíz do front-end (`/web`) contém um `Dockerfile` para facilitar o deploy dos serviços.

#### Node

Instale as dependências com `npm ci`, compile o projeto executando `npm run build` e inicie o servidor de produção com `npm run start`.
