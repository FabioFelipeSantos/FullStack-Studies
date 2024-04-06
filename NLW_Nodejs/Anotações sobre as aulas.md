# 1 Inicializando o projeto

Inicializando um projeto em Node.js usando TypeScript, integrando o Fastify como framework para o servidor HTTP, o Zod para validação de modelos de dados, e o Prisma como ORM para interagir com seu banco de dados. Vamos dividir este processo em várias etapas detalhadas:

## 1.1 Inicialização do Projeto

Primeiro, você precisa ter o Node.js e o npm (Node Package Manager) instalados em sua máquina. Você pode verificar se eles estão instalados executando `node -v` e `npm -v` no terminal. Caso não estejam, você deve instalá-los a partir do site oficial do [Node.js](https://nodejs.org/).

Abra seu terminal, navegue até a pasta onde deseja criar seu projeto e execute:
```sh
mkdir meuProjetoNode
cd meuProjetoNode
npm init -y
```

^315d1c

Este comando cria um novo diretório para o seu projeto, entra nele e inicializa um novo projeto Node.js com um arquivo `package.json` padrão.

## 1.2 Configurando TypeScript

Instale o TypeScript globalmente (se ainda não tiver instalado) e como dependência de desenvolvimento do seu projeto, junto com os tipos do Node.js:

```sh
npm install -g typescript
npm install --save-dev typescript @types/node
```

^2fa5e6

Inicialize um arquivo de configuração TypeScript (`tsconfig.json`) executando:
```sh
tsc --init
```
Abra o `tsconfig.json` gerado e ajuste-o conforme necessário para o seu projeto. Para uso com Fastify e o restante das tecnologias mencionadas, você pode começar com uma configuração básica como:

```json
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "rootDir": "./src",
    "outDir": "./dist",
    "esModuleInterop": true,
    "strict": true,
    "moduleResolution": "node",
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"]
}
```

## 1.3 Compilador TS para `Node.js` - TSX: TypeScript Execute

[TypeScript Execute (tsx)](https://www.npmjs.com/package/tsx) é uma forma rápida e prática de rodar TypeScript com o Node.js. Suas principais características são
- Muito rápido
- TypeScript REPL (Read-Eval-Print Loop, trata-se de um ambiente interativo que permite escrever e executar código TypeScript diretamente no navegador ou em um ambiente de terminal, sem a necessidade de configuração prévia de um projeto ou transpilação explícita para JavaScript.)
- Supports `tsconfig.json` [`paths`](https://www.typescriptlang.org/tsconfig#paths)
- Works in both [CommonJS and ESM packages](https://nodejs.org/api/packages.html#type)

### 1.3.1 Installation

#### 1.3.1.1 Local installation

To add tsx to an `npm` project as a development dependency:

```shell
npm install --save-dev tsx
```

^d5b1af

You can reference it directly in the `package.json#scripts` object (you don't need `npx` here):

```js
{
    "scripts": {
        "dev": "tsx ./file.ts"
    }
}
```

To use the binary, you can call it with [`npx`](https://docs.npmjs.com/cli/v8/commands/npx) while in the project directory:

```shell
npx tsx ...
```

#### 1.3.1.2 Global installation

If you want to use tsx anywhere on your computer without [`npx`](https://docs.npmjs.com/cli/v8/commands/npx), install it globally:

```shell
npm install --global tsx
```

Then, you can call `tsx` directly:

```shell
tsx file.ts
```

Now you can replace `node ...` with `tsx ...` in all your commands!

### 1.3.2 Usage

#### 1.3.2.1 Swap `node` out for `tsx`

_tsx_ is an enhanced version of Node.js. If you have a `node ...` command, you can replace the `node` with `tsx` and it will just work.

Because it's a drop-in replacement for `node`, it supports all [Node.js command-line flags](https://nodejs.org/docs/latest-v20.x/api/cli.html).

```shell
# Old command
node --no-warnings --env-file=.env ./file.js

# New command
tsx --no-warnings --env-file=.env ./file.js
```

##### 1.3.2.1.1 Custom `tsconfig.json` path

By default, `tsconfig.json` will be detected from the current working directory.

To set a custom path, use the `--tsconfig` flag:

```shell
tsx --tsconfig ./path/to/tsconfig.custom.json ./file.ts
```

Alternatively, use the `TSX_TSCONFIG_PATH` environment variable:

```shell
TSX_TSCONFIG_PATH=./path/to/tsconfig.custom.json tsx ./file.ts
```

#### 1.3.2.2 Watch mode

Run file and automatically rerun on changes:

```shell
tsx watch ./file.ts
```


## 1.4 Web Framework - Fastify

O Fastify é um framework web de alto desempenho para Node.js, focado na eficiência e velocidade. Projetado como uma alternativa mais leve e mais rápida a outros frameworks como Express e Koa, o Fastify oferece uma fundação robusta para construir aplicações web, APIs REST, e serviços HTTP com um overhead mínimo. Graças ao seu sistema de plugins, arquitetura altamente otimizada, e suporte a funcionalidades modernas do JavaScript, como async/await, ele permite que desenvolvedores criem aplicações escaláveis e de alto desempenho com relativa facilidade.

### 1.4.1 Características Principais do Fastify

- **Alto Desempenho**: Fastify é conhecido por sua eficiência e velocidade, superando muitos outros frameworks web em benchmarks de desempenho.
- **Baixo Overhead**: Tem um overhead mínimo, o que significa que mais recursos do servidor podem ser dedicados à lógica da aplicação, melhorando o desempenho geral.
- **Suporte a Async/Await**: Facilita a escrita de código assíncrono claro e conciso, melhorando a legibilidade e a manutenção do código.
- **Sistema de Plugins**: Permite a extensão do framework de maneira flexível, facilitando a reutilização de código e a construção de ecossistemas robustos.
- **Serialização Rápida**: Vem com um serializador JSON altamente otimizado, que pode melhorar o desempenho ao servir respostas JSON.
- **Suporte para Schema**: Oferece suporte integrado para a validação de schema usando JSON Schema, permitindo a validação de entrada e saída de dados de forma eficiente e fácil.
- **Logging Integrado**: Possui um sistema de logging poderoso e flexível, integrado ao framework, facilitando o diagnóstico e a depuração de aplicações.
- **Segurança**: Vem com várias características de segurança incorporadas, como proteções contra ataques de injeção de SQL, XSS (Cross-Site Scripting), e CSRF (Cross-Site Request Forgery).

### 1.4.2 Exemplo Básico

Aqui está um exemplo simples de como iniciar um servidor HTTP com Fastify:

```js title="Fastify Web Framework"
const fastify = require('fastify')({ logger: true });

fastify.get('/', async (request, reply) => {
  return { hello: 'world' };
});

const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
    fastify.log.info(`server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();

```
- Esse código cria um servidor HTTP que escuta na porta 3000 e responde com um objeto JSON `{ hello: 'world' }` quando a rota raiz (`/`) é acessada.

### 1.4.3 3 Instalação e Uso Rápido

Primeiro instale usando o `npm`

```sh
npm install fastify
```

Após, crie um arquivo `server.js` com o seguinte conteúdo:
```js title="Criando um arquivo server.js para iniciar o Fastify"
// Import the framework and instantiate it
import Fastify from 'fastify'
const fastify = Fastify({
  logger: true
})

// Declare a route
fastify.get('/', async function handler (request, reply) {
  return { hello: 'world' }
})

// Run the server!
try {
  await fastify.listen({ port: 3000 })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}
```

Após, inicie o server

```sh
node server
```


```sh
npm install fastify
npm install --save-dev @types/fastify
```

## 1.5 Configurando o Prisma

Instale o Prisma CLI como uma dependência de desenvolvimento e inicialize o Prisma no seu projeto:

```sh
npm install --save-dev prisma
npx prisma init
```

Isso criará uma nova pasta chamada `prisma` com um arquivo `schema.prisma` dentro, onde você pode definir seus modelos de banco de dados, e um arquivo `.env` na raiz do seu projeto, onde você pode definir variáveis de ambiente (como a string de conexão do banco de dados).

## 1.6 Configurando o Zod

Instale o Zod para ajudar na validação de modelos de dados:

```sh
npm install zod
```

## 1.7 Estruturando o Projeto

Crie uma estrutura básica de pastas para o seu projeto. No terminal, dentro do diretório do seu projeto, execute:

```sh
mkdir src && cd src && mkdir models routes services && cd ..
```

Isso cria uma pasta `src` com subpastas para modelos (`models`), rotas (`routes`) e serviços (`services`).

## 1.8 Escrevendo o Servidor Fastify

Dentro da pasta `src`, crie um arquivo `server.ts`:

```typescript
import fastify from 'fastify';

const server = fastify({ logger: true });

server.get('/', async (request, reply) => {
  return { hello: 'world' };
});

const start = async () => {
  try {
    await server.listen({ port: 3000 });
    console.log(`Server is running at http://localhost:3000`);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
```

Esse código inicializa um servidor Fastify que responde com `{ hello: 'world' }` ao acessar a rota raiz (`/`).

## 1.9 Executando o Projeto

Para compilar seu TypeScript em JavaScript, você pode adicionar um script no seu `package.json`:

```json
"scripts": {
  "build": "tsc",
  "start": "node dist/server.js"
}
```

Execute `npm run build` para compilar seu projeto e `npm run start` para iniciar seu servidor.

## 1.10 Adicionando Mais Rotas ao Fastify

Para organizar melhor as rotas, você pode criar arquivos específicos para elas dentro da pasta `src/routes`. Por exemplo, vamos criar um arquivo `userRoutes.ts` para lidar com rotas relacionadas a usuários.

1. **Criar o arquivo `src/routes/userRoutes.ts`:**

```typescript
import { FastifyInstance } from 'fastify';
import { z } from 'zod';

const userSchema = z.object({
  name: z.string(),
  email: z.string().email(),
});

export default async function (fastify: FastifyInstance) {
  fastify.get('/users', async (request, reply) => {
    // Aqui você buscaria os usuários no banco de dados
    return { users: [] };
  });

  fastify.post('/users', {
    schema: {
      body: userSchema,
    },
    handler: async (request, reply) => {
      // Validação do corpo da requisição já é feita pelo Fastify com base no esquema Zod
      // Aqui você criaria o usuário no banco de dados
      return { message: 'Usuário criado com sucesso', user: request.body };
    }
  });
}
```

Este arquivo define duas rotas: uma para buscar todos os usuários (`GET /users`) e outra para criar um novo usuário (`POST /users`), usando Zod para validar os dados de entrada do novo usuário.

2. **Atualizar `src/server.ts` para usar as rotas definidas:**

```typescript
import fastify from 'fastify';
import userRoutes from './routes/userRoutes';

const server = fastify({ logger: true });

// Registrar as rotas de usuário
server.register(userRoutes);

const start = async () => {
  try {
    await server.listen({ port: 3000 });
    console.log(`Server is running at http://localhost:3000`);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
```

## 1.11 Definindo Modelos de Dados com Zod

No exemplo `userRoutes.ts`, já definimos um esquema Zod simples para validação de dados de usuários. O Zod permite que você crie esquemas complexos e profundamente aninhados para garantir que os dados manipulados em suas aplicações estejam corretos.

## 1.12 Configurando Acesso ao Banco de Dados com Prisma

1. **Definir o modelo de dados no Prisma:**

Edite o arquivo `prisma/schema.prisma` para definir o modelo do seu usuário. Por exemplo:

```prisma
model User {
  id    Int     @id @default(autoincrement())
  name  String
  email String  @unique
}
```

2. **Gerar o cliente Prisma:**

Após definir seus modelos, execute o comando abaixo para gerar o cliente Prisma, que permite interagir com o banco de dados:

```sh
npx prisma generate
```

3. **Utilizar o Prisma no seu projeto:**

Primeiro, instale o cliente Prisma no seu projeto:

```sh
npm install @prisma/client
```

Depois, você pode modificar o arquivo `src/routes/userRoutes.ts` para utilizar o Prisma para interagir com o banco de dados:

```typescript
import { FastifyInstance } from 'fastify';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';

const prisma = new PrismaClient();

// O esquema e as rotas permanecem os mesmos

fastify.get('/users', async (request, reply) => {
  const users = await prisma.user.findMany();
  return { users };
});

fastify.post('/users', {
  schema: {
    body: userSchema,
  },
  handler: async (request, reply) => {
    const user = await prisma.user.create({
      data: request.body,
    });
    return { message: 'Usuário criado com sucesso', user };
  }
});
```


# 2 Algumas definições importantes

## 2.1 Métodos HTTP: GET, POST, PUT, DELETE, PATCH, OPTIONS, HEAD, TRACE, CONNECT, ...

- GET: Obter dados de um recurso (da URL).
- POST: Enviar dados ou informações para serem processados por um recurso.
- PUT: Atualizar dados de um recurso.
- DELETE: Remover um recurso.
- PATCH: Atualizar parcialmente um recurso.
- OPTIONS: Descreve as opções de comunicação com um recurso.
- HEAD: Retorna apenas os cabeçalhos de uma resposta.
- TRACE: Realiza um teste de loopback.
- CONNECT: Estabelece um túnel para o servidor.

# 3 Componentes Essenciais de uma Requisição HTTP

Quando trabalhamos com APIs e serviços web, especialmente no contexto de desenvolvimento de aplicações web e móveis, encontramos conceitos fundamentais como Request Body, Search Params, Route Params e Headers. Estes são componentes essenciais de uma requisição HTTP, e cada um tem um propósito específico na transmissão de informações entre o cliente (por exemplo, um navegador ou aplicativo móvel) e o servidor. Vamos detalhar cada um desses conceitos:

## 3.1 Request Body (Corpo da Requisição)

O Request Body é a parte da requisição HTTP que contém os dados enviados pelo cliente para o servidor. Estes dados podem ser de diversos tipos, incluindo texto, JSON, XML, ou até mesmo dados binários como arquivos. O corpo da requisição é comumente utilizado em métodos HTTP como POST e PUT, onde há a necessidade de enviar informações complexas ou volumosas que não seriam convenientes de se passar na URL.

- **Exemplo de uso**: Enviar informações de um formulário de cadastro ou atualização de um perfil de usuário.

## 3.2 Search Params (Parâmetros de Pesquisa)

Também conhecidos como Query Strings, os Search Params são parâmetros adicionados à URL da requisição. Eles começam após o símbolo `?` na URL e são separados por `&`. São utilizados para passar informações leves e não sensíveis, como critérios de filtragem ou paginação em uma consulta ao banco de dados.

- **Exemplo de URL com Search Params**: `http://exemplo.com/api/usuarios?pagina=2&limite=10`

## 3.3 Route Params (Parâmetros de Rota)

Route Params são parâmetros que fazem parte do caminho (path) da URL. Eles são usados para identificar um recurso específico ou um conjunto de recursos em uma API. Diferente dos Search Params, os Route Params são incorporados na estrutura da URL e são essenciais para o roteamento da requisição.

- **Exemplo de URL com Route Params**: `http://exemplo.com/api/usuarios/12345`
    - Neste exemplo, `12345` é um Route Param que pode ser usado para identificar um usuário específico.

## 3.4 Headers (Cabeçalhos)

Headers são componentes da requisição HTTP que contêm informações sobre a requisição ou sobre o cliente que está fazendo a requisição. Eles podem incluir tipos de conteúdo aceitos (`Accept`), tipo de conteúdo sendo enviado (`Content-Type`), informações de autenticação, entre outros. Os Headers são fundamentais para o controle e a negociação de dados entre cliente e servidor.

- **Exemplo de uso de Headers**:
    - `Content-Type: application/json` indica que o corpo da requisição está em formato JSON.
    - `Authorization: Bearer TOKEN_AQUI` é frequentemente usado para enviar tokens de autenticação.

## 3.5 Cookies

Os cookies são pequenos pedaços de dados armazenados no navegador do cliente. Eles são enviados junto com cada requisição HTTP para o mesmo domínio que os criou, permitindo que o servidor mantenha o estado da sessão do usuário.

- **Exemplo de uso**: Manter o usuário logado após o fechamento do navegador.

## 3.6 Form Data

O Form Data é usado para enviar dados de formulário HTML em uma requisição HTTP. É comumente utilizado em requisições do tipo `POST` e `PUT` quando o conteúdo do formulário precisa ser enviado para o servidor.

- **Exemplo de uso**: Enviar dados de formulário HTML (por exemplo, campos de texto, seleções, arquivos enviados).

## 3.7 Response Body (Corpo da Resposta)

O Response Body é a parte da resposta HTTP que contém os dados enviados pelo servidor para o cliente. Assim como o Request Body, ele pode ser de vários tipos, incluindo texto, JSON, XML ou binário.

- **Exemplo de uso**: Retornar dados solicitados pelo cliente, como uma lista de usuários ou detalhes de um único recurso.

## 3.8 Status Code (Código de Status)

O Status Code é um número de três dígitos enviado pelo servidor em resposta a uma requisição HTTP. Ele indica o resultado da requisição, como sucesso, redirecionamento ou erro.

- **Exemplo de uso**: Códigos comuns incluem 200 (OK), 404 (Not Found) e 500 (Internal Server Error).

## 3.9 Redirect URL (URL de Redirecionamento)

Em certos casos, o servidor pode responder com um cabeçalho de redirecionamento (`Location`) indicando ao cliente uma nova URL para a qual ele deve redirecionar.

- **Exemplo de uso**: Redirecionar o cliente para uma página de login após uma tentativa de acesso não autorizado.

## 3.10 Authentication Tokens

Tokens de autenticação, como JWT (JSON Web Tokens), são frequentemente usados para autenticar usuários em sistemas web. Eles são enviados pelo cliente no cabeçalho `Authorization` e validados pelo servidor.

- **Exemplo de uso**: Autenticar usuários em uma API RESTful.

Sim, além dos componentes mencionados anteriormente, existem outros elementos que também desempenham papéis importantes em uma requisição HTTP. Aqui estão mais alguns:

## 3.11 Method (Método)

O método HTTP indica a ação a ser realizada no recurso identificado pela URL. Alguns dos métodos mais comuns são `GET`, `POST`, `PUT`, `DELETE`, `PATCH`, entre outros.

- **Exemplo de uso**: O método `GET` é usado para solicitar dados de um recurso, enquanto o método `POST` é usado para enviar dados para serem processados pelo servidor.

## 3.12 Protocol Version (Versão do Protocolo)

A versão do protocolo HTTP utilizada na requisição é especificada no cabeçalho `HTTP/1.1`, por exemplo.

- **Exemplo de uso**: HTTP/1.1 é a versão mais comum atualmente, mas também existem versões mais recentes como HTTP/2 e HTTP/3.

## 3.13 Request URL (URL da Requisição)

A URL completa da requisição, incluindo o protocolo, domínio, porta, caminho e parâmetros de busca.

- **Exemplo de uso**: `https://www.exemplo.com:8080/api/recurso?parametro=valor`

## 3.14 User-Agent

O cabeçalho User-Agent identifica o software (navegador, aplicativo) que está fazendo a requisição. Pode ser usado para personalizar a resposta com base no cliente.

- **Exemplo de uso**: O servidor pode enviar diferentes versões de uma página dependendo do navegador do usuário.

## 3.15 Referer

O cabeçalho Referer indica a URL da página da qual a requisição veio. É útil para rastrear a origem do tráfego.

- **Exemplo de uso**: Um servidor de análise pode usar este cabeçalho para determinar de onde os visitantes estão vindo.

## 3.16 Host

O cabeçalho Host especifica o nome de domínio do recurso solicitado.

- **Exemplo de uso**: Pode ser usado pelo servidor para rotear a requisição para o site correto em um servidor que hospeda vários sites.

## 3.17 Content-Length

Este cabeçalho indica o tamanho do corpo da requisição em bytes. É útil para o servidor saber quando a requisição está completa.

- **Exemplo de uso**: Permite ao servidor ler o corpo da requisição corretamente, especialmente para requisições POST e PUT.

Claro, aqui estão todos os componentes restantes que podem estar presentes em uma requisição HTTP:

## 3.18 Accept

O cabeçalho `Accept` especifica os tipos de conteúdo que o cliente está disposto a aceitar do servidor. Isso permite a negociação de conteúdo entre o cliente e o servidor.

## 3.19 Accept-Encoding

O cabeçalho `Accept-Encoding` especifica os tipos de codificação de conteúdo que o cliente suporta. Isso permite que o servidor comprima a resposta se necessário.

## 3.20 Accept-Language

O cabeçalho `Accept-Language` especifica os idiomas que o cliente prefere para a resposta. Isso permite ao servidor retornar conteúdo no idioma preferido do usuário.

## 3.21 Cache-Control

O cabeçalho `Cache-Control` controla o armazenamento em cache da resposta em caches intermediários. Ele define diretivas para controle de cache, como `max-age`, `no-cache`, `no-store`, entre outras.

## 3.22 Connection

O cabeçalho `Connection` especifica opções de conexão específicas do protocolo de transporte. Por exemplo, `Connection: keep-alive` solicita que a conexão TCP seja mantida aberta para requisições futuras.

## 3.23 Content-Disposition

O cabeçalho `Content-Disposition` é usado para sugerir ao cliente como lidar com o conteúdo recebido no corpo da resposta, como se deve ser exibido ou baixado.

## 3.24 Content-Type

O cabeçalho `Content-Type` indica o tipo de mídia do conteúdo no corpo da requisição ou resposta. Por exemplo, `Content-Type: application/json` indica que o corpo contém dados JSON.

## 3.25 Date

O cabeçalho `Date` fornece a data e hora atuais de quando a requisição foi feita.

## 3.26 Expect

O cabeçalho `Expect` indica requisitos específicos que o cliente espera que o servidor atenda antes que a requisição seja continuada.

## 3.27 From

O cabeçalho `From` fornece um endereço de e-mail para o usuário que fez a requisição. Pode ser usado para fins de rastreamento ou contato.

## 3.28 If-Match

O cabeçalho `If-Match` é usado em solicitações condicionais para garantir que a operação seja realizada apenas se uma condição especificada for verdadeira.

## 3.29 If-None-Match

O cabeçalho `If-None-Match` é usado em solicitações condicionais para garantir que a operação seja realizada apenas se uma condição especificada for falsa.

## 3.30 If-Modified-Since

O cabeçalho `If-Modified-Since` é usado em solicitações condicionais para garantir que a operação seja realizada apenas se o recurso foi modificado desde uma determinada data.

## 3.31 If-Unmodified-Since

O cabeçalho `If-Unmodified-Since` é usado em solicitações condicionais para garantir que a operação seja realizada apenas se o recurso não tiver sido modificado desde uma determinada data.

## 3.32 Max-Forwards

O cabeçalho `Max-Forwards` especifica o número máximo de servidores de proxy que a requisição pode passar antes de ser recusada.

## 3.33 Proxy-Authorization

O cabeçalho `Proxy-Authorization` contém credenciais de autenticação para autenticar-se com um servidor proxy.

## 3.34 Range

O cabeçalho `Range` solicita apenas parte de um recurso, especificando o intervalo de bytes desejado.

## 3.35 TE

O cabeçalho `TE` especifica as codificações de transferência aceitas pelo cliente.

## 3.36 Upgrade

O cabeçalho `Upgrade` é usado em solicitações para pedir ao servidor para trocar o protocolo de comunicação após a conexão ser estabelecida.

## 3.37 Via

O cabeçalho `Via` especifica os servidores intermediários pelos quais a requisição passou e protocolos usados.


Cada um desses componentes adicionais desempenha um papel importante na comunicação cliente/servidor através do protocolo HTTP. Ao desenvolver aplicações web, é fundamental entender como eles funcionam e como podem ser utilizados para alcançar os objetivos da aplicação.



# 4 Tipos de dados

Quando se trata de enviar dados para um banco de dados, especialmente durante uma operação de cadastro, diversos tipos de parâmetros podem ser utilizados. A escolha desses tipos depende tanto do esquema do banco de dados quanto das necessidades específicas da aplicação. Abaixo estão os tipos mais comuns de parâmetros que podem ser enviados para um banco de dados:
## 4.1 String (Texto)
- **Descrição**: Sequências de caracteres usadas para representar texto.
- **Uso comum**: Nomes, endereços, descrições.
## 4.2 Integer (Inteiro)
- **Descrição**: Números inteiros, sem parte fracionária.
- **Uso comum**: Idade, quantidade de itens, ano
## 4.3 Float / Double (Ponto flutuante)
- **Descrição**: Números com parte fracionária, usados quando a precisão decimal é necessária.
- **Uso comum**: Preços, medidas, coordenadas geográficas
## 4.4 Boolean (Booleano)
- **Descrição**: Representa verdadeiro ou falso.
- **Uso comum**: Status (ativo/inativo), condições (verdadeiro/falso).
## 4.5 Date / Time (Data/Hora)
- **Descrição**: Representa datas, horas, ou ambos.
- **Uso comum**: Data de nascimento, data de criação, prazos.

## 4.6 Enum (Enumerado)
- **Descrição**: Um tipo de dado que consiste em um conjunto de valores nomeados predefinidos.
- **Uso comum**: Status de um pedido (pendente, enviado, entregue), tipos de contato (telefone, email).

## 4.7 Binary / Blob (Binário)
- **Descrição**: Dados binários, como arquivos ou imagens.
- **Uso comum**: Armazenamento de arquivos, imagens de perfil.

## 4.8 UUID (Identificador Único Universal)
- **Descrição**: Um identificador único utilizado para garantir a unicidade global dos dados.
- **Uso comum**: Chave primária para registros, identificação única de sessões ou transações.

## 4.9 JSON (JavaScript Object Notation)
- **Descrição**: Um formato leve de troca de dados, útil para armazenar e transportar dados estruturados.
- **Uso comum**: Configurações, armazenamento de objetos complexos, comunicação entre serviços.

## 4.10 Array / List (Arranjo / Lista)
- **Descrição**: Uma coleção de elementos, possivelmente de vários tipos.
- **Uso comum**: Lista de telefones, coleções de tags, histórico de ações.

# 5 Query Builders

As tecnologias Query Builder são ferramentas ou bibliotecas que permitem aos desenvolvedores criar consultas SQL de maneira programática. Elas fornecem uma interface fluente e fácil de usar para construir consultas, em vez de concatenar strings manualmente para criar uma consulta SQL.

Os Query Builders podem ajudar a prevenir erros de sintaxe SQL e proteger contra ataques de injeção SQL, pois eles geram automaticamente a sintaxe SQL correta e escapam os valores de entrada.

Os Query Builders são especialmente úteis em aplicações complexas, onde as consultas SQL podem variar dinamicamente com base nas ações do usuário ou em outras condições.

Um exemplo popular de Query Builder em JavaScript é o Knex.js. Ela é uma biblioteca de construção de consultas SQL que suporta PostgreSQL, MySQL, SQLite3 e MSSQL. Ela fornece uma interface fluente para construir consultas SQL de forma programática, permitindo que você construa consultas de forma segura e eficiente sem a necessidade de concatenar strings manualmente.

Aqui estão alguns recursos e benefícios do Knex.js:

1. **Interface fluente**: O Knex.js permite que você construa consultas SQL usando uma interface fluente e fácil de usar. Por exemplo, você pode construir uma consulta SELECT como esta:
```javascript
knex('users').where('name', '=', 'John').select('id');
```

Isso seria traduzido para o seguinte SQL:

```sql
SELECT id FROM users WHERE name = 'John';
```

2. **Prevenção de injeção SQL**: O Knex.js escapa automaticamente os valores de entrada, ajudando a prevenir ataques de injeção SQL.
3. **Suporte para transações**: O Knex.js fornece uma API para lidar com transações SQL, permitindo que você agrupe várias consultas em uma única transação.
4. **Migrações e seeds**: O Knex.js inclui um sistema de migração e seed, permitindo que você gerencie o esquema do seu banco de dados e preencha-o com dados iniciais de maneira programática.
5. **Suporte para várias bases de dados**: O Knex.js suporta vários sistemas de gerenciamento de banco de dados, incluindo PostgreSQL, MySQL, SQLite 3 e MSSQL.
6. **Promises e async/await**: O Knex.js retorna Promises para todas as consultas, permitindo que você use `{js}async`/`{js}await` para lidar com operações assíncronas.
7. **Construção de consultas avançadas**: O Knex.js permite que você construa consultas SQL avançadas, incluindo uniões, junções, sub-consultas, agregações e muito mais.

Em resumo, o Knex.js é uma ferramenta poderosa e flexível para construir e executar consultas SQL em Node.js. Ele pode ajudar a tornar o seu código mais seguro, mais legível e mais fácil de manter.

Para instalar o Knex.js usamos:

```bash
npm install knex --save
```

Além disso, você precisará instalar o driver do banco de dados que você está usando. Por exemplo, se você estiver usando o PostgreSQL, você pode instalar o driver pg usando o seguinte comando:

```bash
npm install pg --save
```

Substitua "pg" pelo driver apropriado para o seu banco de dados. Aqui estão os drivers suportados pelo Knex.js:

- PostgreSQL: `pg`
- MySQL: `mysql`
- MariaDB: `mariasql`
- SQLite3: `sqlite3`
- Oracle: `oracle`
- MSSQL: `mssql`

Depois de instalar o Knex.js e o driver do banco de dados, você pode começar a usar o Knex. js para construir e executar consultas SQL em seu aplicativo Node.js.

# 6 ORMs

ORM (Object-Relational Mapping) é uma técnica de programação que permite aos desenvolvedores interagir com seu banco de dados como se fossem objetos JavaScript. Isso significa que você não precisa escrever consultas SQL complexas; em vez disso, você usa métodos e propriedades de objetos para manipular seus dados.

As ORMs fornecem uma abstração de alto nível sobre o SQL, o que pode tornar seu código mais fácil de escrever, ler e manter. Elas também podem ajudar a proteger seu aplicativo contra ataques de injeção SQL, pois escapam automaticamente os valores de entrada.

Aqui estão algumas das principais ORMs em JavaScript:
1. **Sequelize**: É uma ORM baseada em promessas para Node.js e suporta os dialetos PostgreSQL, MySQL, SQLite e MSSQL. Sequelize fornece uma interface rica e completa para realizar tarefas CRUD (Create, Read, Update, Delete), executar consultas complexas e definir relações entre modelos. Exemplo de uso do Sequelize:
   ```javascript
   const User = sequelize.define('User', {
     // Model attributes are defined here
     firstName: {
       type: DataTypes.STRING,
       allowNull: false
     },
     lastName: {
       type: DataTypes.STRING
       // allowNull defaults to true
     }
   }, {
     // Other model options go here
   });
   ```
2. **Mongoose**: É uma ORM que fornece uma solução direta e baseada em esquemas para modelar os dados do seu aplicativo usando MongoDB. Ele inclui validação de tipo embutida, consultas, middleware e muito mais. Exemplo de uso do Mongoose:
   ```javascript
   const kittySchema = new mongoose.Schema({
     name: String
   });

   const Kitten = mongoose.model('Kitten', kittySchema);
   ```
3. **TypeORM**: É uma ORM que pode ser executada em Node.js e pode ser usada com TypeScript e JavaScript (ES5, ES6, ES7, ES8). Ele suporta os bancos de dados mais usados: MySQL, PostgreSQL, MariaDB, SQLite, MS SQL Server, Oracle, SAP Hana, e outros. Exemplo de uso do TypeORM:
   ```typescript
   @Entity()
   export class User {
     @PrimaryGeneratedColumn()
     id: number;

     @Column()
     firstName: string;

     @Column()
     lastName: string;

     @Column()
     isActive: boolean;
   }
   ```

Using an ORM (Object-Relational Mapping) in JavaScript provides several advantages:
1. **Abstraction**: ORMs provide a high-level abstraction over SQL which can make your code easier to write, read, and maintain. You interact with your database using JavaScript objects and methods, instead of writing SQL queries.
2. **Database Agnostic**: ORMs allow you to switch between different types of databases more easily. The same ORM code can be used with different SQL databases (like MySQL, PostgreSQL, SQLite, etc.), which can make migrating your application to a different database simpler.
3. **Security**: ORMs automatically escape input values, which can help protect your application against SQL injection attacks.
4. **DRY Code**: ORMs can help you write DRY (Don't Repeat Yourself) code. You define your data models in one place, and the ORM takes care of the rest (creating tables, inserting data, updating data, etc.).
5. **Advanced Features**: Many ORMs come with advanced features like caching, transactions, and lazy loading, which can help improve the performance and efficiency of your application.
6. **Relationships and Joins**: ORMs provide an easy way to set up and work with relationships between tables (like one-to-one, one-to-many, and many-to-many relationships). They also make it easier to perform complex joins and other operations.

Remember, while ORMs can provide these advantages, they also come with some trade-offs, like potential performance overhead and less control over the SQL queries. The decision to use an ORM should be based on the specific needs and constraints of your project.

# 7 Prisma

[Prisma](https://www.prisma.io/) é um ORM (Object-Relational Mapping) moderno para JavaScript e TypeScript que facilita o trabalho com bancos de dados. Ele fornece uma maneira fácil de definir modelos de dados e realizar operações de banco de dados, como consultas, mutações e transações.

Prisma suporta vários bancos de dados, incluindo PostgreSQL, MySQL, SQLite e SQL Server. Ele também fornece um cliente de banco de dados auto-gerado que é otimizado para o desenvolvedor, com autocompletar, segurança de tipo e muito mais.

Aqui está um exemplo de como você pode usar o Prisma:
1. Primeiro, instale o Prisma CLI globalmente em seu sistema:
```bash
npm install prisma -g
```
2. Em seguida, inicialize o Prisma em seu projeto:
```bash
prisma init
```
3. Isso criará um arquivo `prisma/schema.prisma`. Você pode definir seus modelos de dados neste arquivo. Por exemplo:
```prisma
model User {
  id    Int     @id @default(autoincrement())
  email String  @unique
  name  String?
  posts Post[]
}

model Post {
  id        Int      @id @default(autoincrement())
  title     String
  content   String?
  published Boolean  @default(false)
  author    User     @relation(fields: [authorId], references: [id])
  authorId  Int
}
```
4. Depois de definir seus modelos, você pode gerar o cliente Prisma usando o seguinte comando:
```bash
prisma generate
```
5. Agora você pode usar o cliente Prisma em seu código para realizar operações de banco de dados. Por exemplo:
```javascript
const prisma = new PrismaClient()

async function main() {
  const newUser = await prisma.user.create({
    data: {
      name: "Alice",
      email: "alice@prisma.io",
      posts: {
        create: { title: "Hello World" },
      },
    },
    include: {
      posts: true,
    },
  })

  console.log("Created new user: ", newUser)
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
```

Este exemplo cria um novo usuário e um novo post no banco de dados usando o Prisma.

# 8 Validação de Dados com o Zod

[Zod](https://zod.dev/) é uma biblioteca de validação de dados e parsing para JavaScript e TypeScript. Ela permite que você construa esquemas de validação de dados de forma declarativa e segura.

Aqui estão algumas características notáveis da biblioteca Zod:
1. **Segurança de tipo**: Zod foi projetada para trabalhar bem com TypeScript. Ela gera automaticamente tipos TypeScript a partir de seus esquemas, garantindo que seus dados estejam sempre em sincronia com seus tipos.
2. **Mensagens de erro personalizadas**: Zod permite que você defina suas próprias mensagens de erro personalizadas para cada regra de validação.
3. **Validação complexa**: Zod suporta validação de tipos complexos, incluindo arrays, objetos, tuplas, uniões, interseções e muito mais.
4. **Parsing**: Além de validar dados, Zod também pode analisar dados, convertendo-os de um tipo para outro. Isso é útil para tarefas como converter strings em números, datas, etc.

Aqui está um exemplo de como você pode usar Zod para validar um objeto:
```typescript
import { z } from 'zod';

const UserSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  age: z.number().min(18),
});

const user = {
  name: 'John Doe',
  email: 'john@example.com',
  age: 25,
};

const result = UserSchema.safeParse(user);

if (result.success) {
  console.log('User is valid!');
} else {
  console.log('User is invalid:', result.error);
}
```
- Neste exemplo, `{js}UserSchema` é um esquema Zod que valida um objeto de usuário. Ele verifica se o objeto tem propriedades `{js}name`, `{js}email` e `{js}age`, se `{js}name` e `{js}email` são strings, se `{js}email` é um endereço de email válido e se `{js}age` é um número maior ou igual a 18. Se o objeto de usuário passar em todas essas verificações, `{js}UserSchema.safeParse(user)` retornará um objeto com `{js}success: true`. Caso contrário, ele retornará um objeto com `{js}success: false` e detalhes sobre o erro de validação.


# 9 Code Errors

Os códigos de status de resposta HTTP são emitidos por um servidor em resposta a uma solicitação do cliente. Eles são parte do protocolo HTTP e indicam o que aconteceu com a solicitação. Esses códigos são agrupados em cinco classes, indicadas pelo primeiro dígito do código. Aqui está um resumo dessas classes, com exemplos e detalhes sobre os códigos de erro mais comuns dentro de cada uma:

## 9.1 Respostas Informativas (100-199)

- **100 Continue**: Indica que o início da requisição foi recebido e o cliente deve continuar com o corpo da requisição.

## 9.2 Respostas de Sucesso (200-299)

- **200 OK**: A requisição foi bem-sucedida. O significado do sucesso varia dependendo do método HTTP utilizado.
- **201 Created**: A requisição foi bem-sucedida e um novo recurso foi criado como resultado.

## 9.3 Redirecionamentos (300-399)

- **301 Moved Permanently**: O URL da requisição foi alterado permanentemente. O novo URL é dado pela resposta do cabeçalho Location.
- **302 Found**: Indica que o recurso solicitado foi temporariamente movido para o URL fornecido pelo cabeçalho Location.

## 9.4 Erros do Cliente (400-499)

Estes códigos indicam que houve um erro na solicitação, impedindo o servidor de processá-la. Por exemplo, quando o frontend faz uma requisição que não é permitida, como criar dois eventos com o mesmo `slug`. Os erros mais importantes são:

- **400 Bad Request**: O servidor não conseguiu entender a requisição devido a sintaxe inválida.
- **401 Unauthorized**: Indica que a requisição requer autenticação do usuário. Se a resposta incluir um cabeçalho WWW-Authenticate, isso significa que o cliente pode tentar uma nova requisição com as credenciais adequadas.
- **403 Forbidden**: O servidor entendeu a requisição, mas se recusa a autorizá-la. Diferentemente do 401, re-autenticar não fará diferença.
- **404 Not Found**: O servidor não encontrou nada que correspondesse ao URI da requisição. É o erro mais famoso e ocorre quando tenta-se acessar um recurso que não existe no servidor.
- **405 Method Not Allowed**: O método de solicitação é conhecido pelo servidor, mas foi desativado e não pode ser utilizado.
- **429 Too Many Requests**: O usuário enviou muitas solicitações em um dado período de tempo ("rate limiting").

## 9.5 Erros do Servidor (500-599)

Estes códigos indicam que o servidor falhou ao tentar processar uma solicitação válida.

- **500 Internal Server Error**: Um caso genérico de erro quando o servidor encontra uma situação que não sabe como lidar.
- **501 Not Implemented**: O método da requisição não é suportado pelo servidor e não pode ser manipulado.
- **502 Bad Gateway**: O servidor, enquanto atuava como gateway ou proxy, recebeu uma resposta inválida do servidor upstream.
- **503 Service Unavailable**: O servidor não está pronto para lidar com a requisição, geralmente devido a uma sobrecarga ou manutenção.


# 10 Plugin <span style="color: inherit; text-decoration: underline; text-underline-offset: 8px;">fastify-type-provider-zod</span>

O `fastify-type-provider-zod` é um plugin para o Fastify, um framework web rápido e de baixa sobrecarga para Node.js, que permite integrar a biblioteca de validação de esquemas Zod com o sistema de tipos do Fastify. Esse plugin é parte do ecossistema Fastify que visa proporcionar uma experiência de desenvolvimento mais segura e eficiente, tirando proveito dos recursos de tipagem estática do TypeScript juntamente com a validação de runtime proporcionada pelo Zod.
<span style="color: ; font-size: 1.2em;"><strong style="color: inherit;"><em style="color: inherit; text-decoration: underline; text-underline-offset: 4px;"></em></strong></span>

## 10.1 O que é Zod?

Zod é uma biblioteca de validação de esquemas para TypeScript e JavaScript. Ela permite definir esquemas de validação para verificar a estrutura e o formato dos dados em tempo de execução. Isso é particularmente útil para validar dados de entrada em APIs, garantindo que os dados que você opera estão no formato esperado e cumprindo com os critérios definidos.

## 10.2 Como Funciona o `fastify-type-provider-zod`?

O `fastify-type-provider-zod` atua como um provedor de tipos para o Fastify, permitindo que você utilize esquemas Zod para validar as entradas de requisições (como o corpo da requisição, parâmetros de query e parâmetros de rota) e, ao mesmo tempo, aproveitar a inferência de tipos do TypeScript para essas entradas validadas. Isso significa que você obtém tanto a validação de runtime dos dados de entrada, assegurando que eles estejam corretos antes de sua aplicação operar sobre eles, quanto o suporte de tipagem do TypeScript, melhorando a segurança e a qualidade do código.

## 10.3 Por Que Usar `fastify-type-provider-zod`?

1. **Validação e Tipagem**: Combina validação robusta de runtime fornecida pelo Zod com a segurança de tipagem do TypeScript, melhorando a confiabilidade e a manutenabilidade do código.
2. **Desenvolvimento Eficiente**: Reduz a necessidade de duplicação de esforços ao definir tipos e esquemas de validação, pois o Zod permite que ambos sejam feitos simultaneamente.
3. **Integração Suave com Fastify**: Projetado para integrar-se de forma transparente com o ecossistema Fastify, aproveitando sua arquitetura eficiente e seus recursos de tipagem.
4. **Melhorias na Experiência de Desenvolvimento**: Oferece feedback imediato sobre erros de validação e tipos durante o desenvolvimento, contribuindo para um ciclo de desenvolvimento mais rápido e menos propenso a erros.

## 10.4 Exemplo de Uso

Aqui está um exemplo básico de como você pode usar o `fastify-type-provider-zod` em uma aplicação Fastify:

```typescript
import Fastify from 'fastify';
import { z } from 'zod';
import fastifyTypeProviderZod from 'fastify-type-provider-zod';

const app = Fastify().withTypeProvider(fastifyTypeProviderZod());

const paramsSchema = z.object({
  id: z.string(),
});

app.get<{ Params: z.infer<typeof paramsSchema> }>(
  '/users/:id',
  {
    schema: {
      params: paramsSchema,
    },
  },
  async (request, reply) => {
    // Graças à inferência de tipos, o TypeScript sabe que `request.params.id` é uma string.
    console.log(request.params.id);
    return { userId: request.params.id };
  }
);

app.listen({ port: 3000 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
```
Neste exemplo, definimos um esquema Zod para os parâmetros de rota de uma requisição GET. Usando o `fastify-type-provider-zod`, o Fastify pode validar automaticamente esses parâmetros contra o esquema Zod e, ao mesmo tempo, o TypeScript pode inferir seus tipos, proporcionando uma experiência de desenvolvimento coesa e segura.


# 11 NANOID para Criação de IDs

O NanoID é uma biblioteca JavaScript para geração de identificadores únicos e aleatórios (IDs) de forma rápida e eficiente. Ele é projetado para ser pequeno, rápido e seguro, adequado para uso em ambientes de produção.

O NanoID gera IDs usando um algoritmo seguro e aleatório, garantindo que os IDs gerados sejam únicos e praticamente impossíveis de prever. Ele é útil em uma variedade de casos de uso, como geração de IDs de sessão, IDs de usuários, IDs de transações, entre outros.

Aqui estão alguns dos principais recursos do NanoID:

1. **Pequeno e Leve**: A biblioteca é compacta, tornando-a ideal para uso em ambientes onde o tamanho do código é uma preocupação.
2. **Rápido e Eficiente**: O NanoID é otimizado para desempenho, garantindo que a geração de IDs seja rápida e eficiente, mesmo em grandes volumes.
3. **Seguro**: Usa um gerador de números aleatórios seguro para garantir que os IDs gerados sejam únicos e não previsíveis.
4. **Configurável**: O NanoID oferece opções de configuração para personalizar o formato e o tamanho dos IDs gerados.

Para mais detalhes sobre como usar o NanoID, você pode conferir a documentação oficial disponível em: [Documentação do NanoID](https://github.com/ai/nanoid)

Para baixar a biblioteca, você pode instalá-la através do npm (Node Package Manager) usando o seguinte comando:

```bash
npm install nanoid
```

Isso instalará o NanoID e suas dependências no seu projeto Node.js, permitindo que você o utilize em seus scripts JavaScript ou TypeScript.

# 12 Fastify Swagger

Fastify-Swagger é um plugin para o framework Fastify que simplifica a geração automática de documentação para suas APIs. Ele integra o Swagger UI ao seu servidor Fastify, permitindo que você visualize e interaja com a documentação da API diretamente no navegador.

Com o Fastify-Swagger, você pode gerar automaticamente documentação detalhada para suas rotas, incluindo informações sobre os parâmetros de rota, parâmetros de consulta, corpo da requisição, tipos de resposta, entre outros. Isso torna mais fácil para desenvolvedores e usuários entenderem como usar sua API e quais dados esperar em cada endpoint.

Aqui estão os passos para instalar e usar o Fastify-Swagger em sua aplicação Fastify:

## 12.1 Instalação

Você pode instalar o Fastify-Swagger via npm usando o seguinte comando:

```bash
npm install fastify-swagger
```

## 12.2 Exemplo de Aplicação

Aqui está um exemplo básico de como usar o Fastify-Swagger em uma aplicação Fastify:

```javascript
const fastify = require('fastify')();
const fastifySwagger = require('fastify-swagger');

fastify.register(fastifySwagger, {
  routePrefix: '/documentation',
  swagger: {
    info: {
      title: 'Minha API',
      description: 'Documentação da Minha API',
      version: '1.0.0'
    },
    externalDocs: {
      url: 'https://swagger.io',
      description: 'Encontre mais informações aqui'
    },
    host: 'localhost:3000',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json']
  },
  exposeRoute: true
});

fastify.get('/hello', async (request, reply) => {
  return { hello: 'world' };
});

fastify.listen(3000, err => {
  if (err) throw err;
  console.log('Servidor escutando na porta 3000');
});
```

Neste exemplo, nós:

1. Importamos o módulo `fastify-swagger`.
2. Registramos o plugin Fastify-Swagger, especificando as opções de configuração, como informações sobre a API, o esquema de URL, tipos de conteúdo suportados, etc.
3. Criamos uma rota de exemplo `/hello` que retorna um objeto JSON.
4. Iniciamos o servidor Fastify na porta 3000.

Após iniciar o servidor e acessar `http://localhost:3000/documentation`, você verá a documentação Swagger gerada automaticamente para sua API, onde poderá explorar e interagir com as rotas disponíveis.

# 13 Fastify Cors

O `fastify-cors` é um plugin para o framework Fastify que simplifica a configuração e o gerenciamento de políticas de controle de acesso (CORS - Cross-Origin Resource Sharing) em suas aplicações web.

O CORS é um mecanismo de segurança utilizado pelos navegadores para restringir as solicitações feitas por scripts JavaScript em uma página da web para recursos de outros domínios. Isso é importante para proteger os usuários de ataques de segurança, como ataques de CSRF (Cross-Site Request Forgery).

O `fastify-cors` permite configurar facilmente as políticas de CORS em seu servidor Fastify, definindo quais origens, métodos HTTP e cabeçalhos são permitidos em solicitações CORS.

Aqui estão os passos para instalar e usar o `fastify-cors` em sua aplicação Fastify:

## 13.1 Instalação

Você pode instalar o `fastify-cors` via npm usando o seguinte comando:

```bash
npm install fastify-cors
```

## 13.2 Uso

Aqui está um exemplo básico de como usar o `fastify-cors` em uma aplicação Fastify:

```javascript
const fastify = require('fastify')();
const fastifyCors = require('fastify-cors');

// Registrando o plugin fastify-cors
fastify.register(fastifyCors, {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
});

// Definindo rotas
fastify.get('/', async (request, reply) => {
  return { message: 'Hello, World!' };
});

// Iniciando o servidor
fastify.listen(3000, err => {
  if (err) throw err;
  console.log('Servidor escutando na porta 3000');
});
```

Neste exemplo:
1. Importamos o módulo `fastify-cors`.
2. Registramos o plugin `fastify-cors` e configuramos suas opções, como `origin`, `methods` e `allowedHeaders`.
3. Definimos rotas para nossa aplicação.
4. Iniciamos o servidor Fastify na porta 3000.

O plugin `fastify-cors` adiciona automaticamente os cabeçalhos CORS necessários às respostas do servidor de acordo com as configurações fornecidas, permitindo que seu servidor Fastify aceite solicitações CORS de origens específicas.

# 14 TSUP Bundler

TSUP é uma ferramenta de empacotamento (bundler) JavaScript/TypeScript que visa ser uma alternativa simples e rápida ao Webpack, Rollup e outros bundlers mais complexos. Ele é otimizado para projetos pequenos a médios, oferecendo um processo de empacotamento rápido e eficiente.

Aqui está como você pode instalar e usar o TSUP em seu projeto:

## 14.1 Instalação

Você pode instalar o TSUP globalmente usando npm ou yarn:

```bash
npm install -D tsup
```

## 14.2 Uso

Depois de instalar o TSUP, você pode usá-lo para empacotar seus arquivos TypeScript. Por exemplo, suponha que você tenha um arquivo `index.ts` em seu projeto que deseja empacotar:

```bash
tsup index.ts
```

Isso irá empacotar o arquivo `index.ts` e suas dependências em um único arquivo JavaScript na pasta `dist`, pronto para ser usado em um navegador ou em um ambiente Node.js.

O TSUP é altamente configurável e suporta várias opções de linha de comando e opções de configuração em um arquivo `tsup.config.js`. Por exemplo, você pode definir opções como o formato de saída (CommonJS, ES module, UMD), minificação, arquivos de entrada e saída personalizados, entre outros.

Aqui está um exemplo de arquivo de configuração `tsup.config.js`:

```javascript
module.exports = {
  entryPoints: ['index.ts'],
  format: 'cjs',
  target: 'node14',
  minify: true,
  outDir: 'dist',
};
```

Você pode então usar o TSUP com sua configuração personalizada:

```bash
tsup -d
```

Isso empacotará seus arquivos TypeScript de acordo com as opções definidas no arquivo de configuração.

O TSUP é uma ferramenta simples e eficiente para empacotamento de projetos TypeScript, adequada para projetos menores que desejam uma solução de empacotamento rápida e fácil de usar.