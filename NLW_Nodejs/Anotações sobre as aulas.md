# 1 Algumas definições importantes

## 1.1 Métodos HTTP: GET, POST, PUT, DELETE, PATCH, OPTIONS, HEAD, TRACE, CONNECT, ...

- GET: Obter dados de um recurso (da URL).
- POST: Enviar dados ou informações para serem processados por um recurso.
- PUT: Atualizar dados de um recurso.
- DELETE: Remover um recurso.
- PATCH: Atualizar parcialmente um recurso.
- OPTIONS: Descreve as opções de comunicação com um recurso.
- HEAD: Retorna apenas os cabeçalhos de uma resposta.
- TRACE: Realiza um teste de loopback.
- CONNECT: Estabelece um túnel para o servidor.

## 1.2 Corpo de requisição: (Request Body) 

Dados enviados pelo cliente para o servidor. Exemplo: JSON, XML, etc.

## 1.3 Parâmetros de busca: (Search Params / Query Params)

Dados enviados pelo cliente para o servidor via URL. Exemplo: http://localhost:33333/users?nome=Fabio&idade=25

## 1.4 Parâmetros de rota: (Route Params)

Dados enviados pelo cliente para o servidor via URL. Exemplo: DELETE http://localhost:33333/users/1 (o usuário é especificado na URL via id normalmente, e não por um rótulo).

## 1.5 Cabeçalhos: (Headers)

Dados enviados pelo cliente para o servidor via cabeçalhos HTTP. Exemplo: Authorization, Content-Type, language, location, time zone, etc.

# 2 Framework para o Node.js - Fastify

O Fastify é um framework web para Node.js que é focado em desempenho e baixo consumo de recursos. Ele é um dos frameworks web mais rápidos para Node.js.

Para instalar o Fastify, basta rodar o comando `{cli}npm install fastify`. Para acessar a documentação do Fastify
podemos ir ao [Site Oficial](https://www.fastify.io/).

# 3 Query Builders

As tecnologias Query Builder são ferramentas ou bibliotecas que permitem aos desenvolvedores criar consultas SQL de maneira programática. Elas fornecem uma interface fluente e fácil de usar para construir consultas, em vez de concatenar strings manualmente para criar uma consulta SQL.

Os Query Builders podem ajudar a prevenir erros de sintaxe SQL e proteger contra ataques de injeção SQL, pois eles geram automaticamente a sintaxe SQL correta e escapam os valores de entrada.

Um exemplo popular de Query Builder em JavaScript é o Knex.js. Ela é uma biblioteca de construção de consultas SQL que suporta PostgreSQL, MySQL, SQLite3 e MSSQL. Ela fornece uma interface fluente para construir consultas SQL de forma programática, permitindo que você construa consultas de forma segura e eficiente sem a necessidade de concatenar strings manualmente.

Aqui estão alguns recursos e benefícios do Knex.js:

1. **Interface fluente**: O Knex.js permite que você construa consultas SQL usando uma interface fluente e fácil de usar. Por exemplo, você pode construir uma consulta SELECT como esta: `{js}knex('users').where('name', '=', 'Fabio').select('id')`.
2. **Prevenção de injeção SQL**: O Knex.js escapa automaticamente os valores de entrada, ajudando a prevenir ataques de injeção SQL.
3. **Suporte para transações**: O Knex.js fornece uma API para lidar com transações SQL, permitindo que você agrupe várias consultas em uma única transação.
4. **Migrações e seeds**: O Knex.js inclui um sistema de migração e seed, permitindo que você gerencie o esquema do seu banco de dados e preencha-o com dados iniciais de maneira programática.
5. **Suporte para várias bases de dados**: O Knex.js suporta vários sistemas de gerenciamento de banco de dados, incluindo PostgreSQL, MySQL, SQLite 3 e MSSQL.
6. **Promises e async/await**: O Knex.js retorna Promises para todas as consultas, permitindo que você use `{js}async`/`{js}await` para lidar com operações assíncronas.
7. **Construção de consultas avançadas**: O Knex.js permite que você construa consultas SQL avançadas, incluindo uniões, junções, sub-consultas, agregações e muito mais.

Em resumo, o Knex.js é uma ferramenta poderosa e flexível para construir e executar consultas SQL em Node.js. Ele pode ajudar a tornar o seu código mais seguro, mais legível e mais fácil de manter.

```javascript
knex('users').where('name', '=', 'John').select('id');
```

Isso seria traduzido para o seguinte SQL:

```sql
SELECT id FROM users WHERE name = 'John';
```

Os Query Builders são especialmente úteis em aplicações complexas, onde as consultas SQL podem variar dinamicamente com base nas ações do usuário ou em outras condições.