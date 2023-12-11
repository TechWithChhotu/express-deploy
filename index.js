import express from "express";
import cors from "cors";
const app = express();

app.use("/", (req, res) => {
  res.json({ message: "Hello from express" });
});

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"], // Include POST method
    credentials: true,
  })
);

const PORT = 9000;

app.listen(PORT, () => {
  console.log("app is running on");
});
