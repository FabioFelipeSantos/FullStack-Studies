import { prisma } from "../src/lib/prisma";

async function seed() {
  await prisma.event.create({
    data: {
      id: "5f5a96a1-3900-4f66-a7dd-353c994785eb",
      title: "Evento de Teste",
      slug: "evento-de-teste",
      details: "Evento de teste para a NLW Node.js",
      maximumAttendees: 120,
    },
  });
}

seed().then(() => {
  console.log("Database seeded!");
  prisma.$disconnect();
});
