import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Creo los usuarios
const user2 = await prisma.user.create({
  data: { email: "alejandro@gmail.com", name: "Alejandro" },
});
const user1 = await prisma.user.create({
  data: { email: "Berta@gmail.com", name: "Berta" },
});

// Creo el colegio que es owner de una de las charlas
const Colegio = await prisma.user.create({
  data: { email: "BonSalvador@gmail.com", name: "Colegio Bon Salvador" },
});

// Creo una de las charlas
const talk1 = await prisma.talk.create({
  data: { name: "Charla de educación sexual", ownerId: Colegio.id },
});

// Creamos comentarios de las charlas

const Comments = await prisma.comment.createMany({
  data: [
    {
      text: "Esta charla esta muy bien, muy interesante",
      userId: user1.id,
      talkId: talk1.id,
    },
    {
      text: "Esta charla lo peor, aburridisima",
      userId: user2.id,
      talkId: talk1.id,
    },
    {
      text: `Hola ${user2.name}, sentimos mucho que no te gustase, no queremos a gente como tu aqui`,
      userId: Colegio.id,
      talkId: talk1.id,
    },
  ],
});
