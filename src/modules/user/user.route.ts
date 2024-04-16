import express from "express";
import { userController } from "./user.controller";

const userRoute = express.Router();

userRoute.post("/create-user", userController.createUser);

export default userRoute;
