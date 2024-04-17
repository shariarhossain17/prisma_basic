import express from "express";
import { categoryController } from "./category.controller";

const categoryRouter = express.Router();

categoryRouter.get("/create-category", categoryController.createCategory);

export default categoryRouter;
