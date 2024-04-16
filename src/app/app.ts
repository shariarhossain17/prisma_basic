import cors from "cors";
import express, { Application } from "express";
import userRoute from "../modules/user/user.route";
const app: Application = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

//user route

app.use("/api/v1", userRoute);

export default app;
