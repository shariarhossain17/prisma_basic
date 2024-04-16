import { Request, Response } from "express";
import { userService } from "./user.service";

const createUser = async (req: Request, res: Response) => {
  try {
    const result = await userService.createUserService(req.body);

    res.send({
      status: true,
      message: "data insert success",
      data: result,
    });
  } catch (error) {
    res.send({
      status: false,
      message: "data can't insert",
      err: error,
    });
  }
};
const updateUser = async (req: Request, res: Response) => {
  try {
    const result = await userService.updateUserService(req.body);

    res.send({
      status: true,
      message: "data insert success",
      data: result,
    });
  } catch (error) {
    res.send({
      status: false,
      message: "data can't insert",
      err: error,
    });
  }
};

export const userController = {
  createUser,
  updateUser,
};
