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
const getAllPostService = async (option: any): Promise<any> => {
  return prisma.$transaction(async (tx) => {
    const { sortBy, sortOrder, filterBy, searchTerm, field, limit, page } =
      option;

    const skip = parseInt(limit) * parseInt(page) - parseInt(limit);

    const take = parseInt(limit);
    const result = await tx.post.findMany({
      skip,
      take,

      include: {
        author: true,
      },
      // orderBy:
      //   sortBy && sortOrder
      //     ? {
      //         [sortBy]: sortOrder,
      //       }
      //     : {
      //         createAt: "desc",
      //       },
      // where: {
      //   OR: [
      //     {
      //       [filterBy]: parseInt(field),
      //     },
      //   ],
      // },
    });

    const totalCount = await tx.post.count();

    return { data: result, totalCount };
  });
};
const getSinglePostService = async (postId: string): Promise<Post | null> => {
  const result = await prisma.post.findUnique({
    where: {
      id: parseInt(postId),
    },
  });
  return result;
};
const updatePost = async (postId: string, data: any): Promise<Post | null> => {
  const result = await prisma.post.update({
    where: {
      id: parseInt(postId),
    },
    data: {
      title: data.title,
    },
  });
  return result;
};
const deletePost = async (postId: string): Promise<Post | null> => {
  const result = await prisma.post.delete({
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
  updatePost,
  deletePost,
};
