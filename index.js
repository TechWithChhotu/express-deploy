import express from "express";

const app = express();

app.use("/", (req, res) => {
  res.json({ message: "Hello from express" });
});

const PORT = 9000;

app.listen(PORT, () => {
  console.log("app is running on");
});
