import { Request, Response } from "express";
import { categoryService } from "./category.service";

const createCategory = async (req: Request, res: Response) => {
  try {
    const result = await categoryService.createCategoryService(req.body);

    res.send({
      status: true,
      message: "create success",
      data: result,
    });
  } catch (error) {
    res.send({
      status: false,
      message: "failed",
    });
  }
};

export const categoryController = {
  createCategory,
};
