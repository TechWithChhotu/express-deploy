import express from "express";
import cors from "cors";
import app from "./app.js";

// app.use("/", (req, res) => {
//   res.json({ message: "Hello from express" });
// });

const PORT = 9000;

app.listen(PORT, () => {
  console.log("app is running on");
});
