import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const getUser = await prisma.user.findMany();

  console.log(getUser);
  const post = await prisma.user.create({
    data: {
      name: "sh",
      email: "sh@gmail.com",
    },
  });
}

main();
