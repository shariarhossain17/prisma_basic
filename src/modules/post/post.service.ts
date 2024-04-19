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
const getAllPostService = async (option: any): Promise<Post[]> => {
  const { sortBy, sortOrder, filterBy, searchTerm, field, limit, page } =
    option;

  const skip = parseInt(limit) * parseInt(page) - parseInt(limit);

  const take = parseInt(limit);

  console.log(skip);
  const result = await prisma.post.findMany({
    skip,
    take,

    include: {
      author: true,
    },
    orderBy:
      sortBy && sortOrder
        ? {
            [sortBy]: sortOrder,
          }
        : {
            createAt: "desc",
          },
    where: {
      OR: [
        {
          [filterBy]: parseInt(field),
        },
      ],
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
