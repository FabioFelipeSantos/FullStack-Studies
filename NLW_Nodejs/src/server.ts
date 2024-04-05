import fastify from "fastify";
import { serializerCompiler, validatorCompiler } from "fastify-type-provider-zod";
import { createEvent } from "./routes/create-event";
import { registerForEvent } from "./routes/register-for-events";
import { getEvent } from "./routes/get-event";
import { getAttendeeBadge } from "./routes/get-attendee-badge";
import { checkIn } from "./routes/check-in";
import { getEventAttendees } from "./routes/get-event-attendees";

// Cria o servidor com o Fastify
export const app = fastify();

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(createEvent);
app.register(registerForEvent);
app.register(getEvent);
app.register(getAttendeeBadge);
app.register(checkIn);
app.register(getEventAttendees);

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
