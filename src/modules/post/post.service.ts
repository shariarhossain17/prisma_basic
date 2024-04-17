import { Post, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const createPostService = async (data: Post): Promise<Post> => {
  const result = await prisma.post.create({
    data,
    include: {
      author: true,
      category: true,
    },
  });
  return result;
};

export const postService = {
  createPostService,
};
