import cors from "cors";
import express, { Application } from "express";
import categoryRouter from "../modules/category/category.route";
import postRoute from "../modules/post/post.route";
import userRoute from "../modules/user/user.route";
const app: Application = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

//user route

app.use("/api/v1", userRoute);
app.use("/api/v1", categoryRouter);
app.use("/api/v1", postRoute);

export default app;
