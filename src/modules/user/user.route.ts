import express from "express";
import { userController } from "./user.controller";

const userRoute = express.Router();

userRoute.post("/create-user", userController.createUser);
userRoute.put("/update-user", userController.updateUser);

export default userRoute;
