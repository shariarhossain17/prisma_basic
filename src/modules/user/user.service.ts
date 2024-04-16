import { PrismaClient, Profile, User } from "@prisma/client";

const prisma = new PrismaClient();

const createUserService = async (userData: User): Promise<User> => {
  const result = await prisma.user.create({
    data: userData,
  });

  return result;
};
const updateUserService = async (data: Profile): Promise<Profile> => {
  const isExist = await prisma.profile.findUnique({
    where: {
      userId: data.userId,
    },
  });

  if (isExist) {
    const result = await prisma.profile.update({
      where: {
        userId: data.userId,
      },
      data: {
        bio: data.bio,
      },
    });

    return result;
  }
  const result = await prisma.profile.create({
    data,
  });

  return result;
};
const getAllUserService = async () => {
  const result = await prisma.user.findMany({
    select: {
      name: true,
      profile: true,
    },
  });

  return result;
};
export const userService = {
  createUserService,
  updateUserService,
  getAllUserService,
};
