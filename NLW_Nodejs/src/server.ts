import fastify from "fastify";
import { serializerCompiler, validatorCompiler } from "fastify-type-provider-zod";
import { createEvent } from "./routes/create-event";

// Cria o servidor com o Fastify
export const app = fastify();

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(createEvent);

// Quando o usuário visitar a homepage da aplicação (rota "/"), o servidor irá retornar a função que for passada como segundo argumento do método .get() do Fastify.
// app.get("/", () => {
//   return "Fábio é Demais";
// });

// app.get("/teste", () => {
//   return "Teste de outra rota";
// });

// Inicializa o servidor via a porta 3333 por meio da promise listen().
// O then() é chamado quando o servidor é inicializado com sucesso.
app.listen({ port: 3333 }).then(() => {
  console.log("HTTP server running!");
});
