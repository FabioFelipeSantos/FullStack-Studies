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

# 4 ORMs

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

# 5 Prisma

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

# 6 Validação de Dados com o Zod

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