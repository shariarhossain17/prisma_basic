import express from "express";
import { userController } from "./user.controller";

const userRoute = express.Router();

userRoute.post("/create-user", userController.createUser);
userRoute.put("/update-user", userController.updateUser);
userRoute.get("/get-user", userController.getAllUser);

export default userRoute;
