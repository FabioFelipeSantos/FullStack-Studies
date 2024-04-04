import fastify from "fastify";
import { z } from "zod";
import { PrismaClient } from "@prisma/client";

// Cria o servidor com o Fastify
const app = fastify();

const prisma = new PrismaClient({
  log: ["query"],
});

// Quando o usuário visitar a homepage da aplicação (rota "/"), o servidor irá retornar a função que for passada como segundo argumento do método .get() do Fastify.
// app.get("/", () => {
//   return "Fábio é Demais";
// });

// app.get("/teste", () => {
//   return "Teste de outra rota";
// });

// Cria rota para um evento
app.post("/events", async (request, reply) => {
  const createEventsSchema = z.object({
    title: z.string().min(4),
    details: z.string().nullable(),
    maximumAttendees: z.number().int().positive().nullable(),
  });

  const data = createEventsSchema.parse(request.body);

  const event = await prisma.event.create({
    data: {
      title: data.title,
      details: data.details,
      maximumAttendees: data.maximumAttendees,
      slug: new Date().toISOString(),
    },
  });
  // return { eventId: event.id };
  return reply.status(201).send({ eventID: event.id });
});

// Inicializa o servidor via a porta 3333 por meio da promise listen().
// O then() é chamado quando o servidor é inicializado com sucesso.
app.listen({ port: 3333 }).then(() => {
  console.log("HTTP server running!");
});
