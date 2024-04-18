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
const getAllPostService = async (): Promise<Post[]> => {
  const result = await prisma.post.findMany({
    include: {
      author: true,
    },
  });

  return result;
};
const getSinglePostService = async (postId: string): Promise<Post | null> => {
  const result = await prisma.post.findUnique({
    where: {
      id: parseInt(postId),
    },
  });
  return result;
};
export const postService = {
  createPostService,
  getAllPostService,
  getSinglePostService,
};
