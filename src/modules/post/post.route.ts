import express from "express";
import { postController } from "./post.controller";

const postRoute = express.Router();

postRoute.post("/create-post", postController.createPost);
postRoute.get("/get-post", postController.getAllPost);
postRoute.get("/get-post/:id", postController.getSinglePost);

export default postRoute;
