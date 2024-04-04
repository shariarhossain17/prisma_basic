import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const getUser = await prisma.user.findMany();

  const post = await prisma.user.create({
    data: {
      name: "sh",
      email: "sh1@gmail.com",
      age: 10,
    },
  });

  console.log(getUser);
}

main();
