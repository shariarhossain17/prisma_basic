import { Request, Response } from "express";
import { postService } from "./post.service";

const createPost = async (req: Request, res: Response) => {
  try {
    const result = await postService.createPostService(req.body);

    res.send({
      status: true,
      message: "create success",
      data: result,
    });
  } catch (error) {
    res.send({
      status: false,
      message: "failed",
      err: error,
    });
  }
};
const getAllPost = async (req: Request, res: Response) => {
  try {
    const option = req.query;
    const result = await postService.getAllPostService(option);

    res.send({
      status: true,
      message: "get success",
      total: result.totalCount,
      data: result.data,
    });
  } catch (error) {
    res.send({
      status: false,
      message: "failed",
      err: error,
    });
  }
};

const getSinglePost = async (req: Request, res: Response) => {
  try {
    const result = await postService.getSinglePostService(req.params.id);

    res.send({
      status: true,
      message: "get success",
      data: result,
    });
  } catch (error) {
    res.send({
      status: false,
      message: "failed",
      err: error,
    });
  }
};

const updatePost = async (req: Request, res: Response) => {
  try {
    const result = await postService.updatePost(req.params.id, req.body);

    res.send({
      status: true,
      message: "get success",
      data: result,
    });
  } catch (error) {
    res.send({
      status: false,
      message: "failed",
      err: error,
    });
  }
};
const deletePost = async (req: Request, res: Response) => {
  try {
    const result = await postService.deletePost(req.params.id);

    res.send({
      status: true,
      message: "get success",
      data: result,
    });
  } catch (error) {
    res.send({
      status: false,
      message: "failed",
      err: error,
    });
  }
};
export const postController = {
  createPost,
  getAllPost,
  getSinglePost,
  updatePost,
  deletePost,
};
