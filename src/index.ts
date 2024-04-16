import app from "./app/app";
const port = process.env.port || 8800;

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
