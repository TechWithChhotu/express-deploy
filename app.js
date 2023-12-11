import express, { Router } from "express";
import mongoose from "mongoose";
import cors from "cors";
import router from "./Controllers.js";

const app = express();

// Set CORS headers
res.setHeader("Access-Control-Allow-Origin", "*");
res.setHeader(
  "Access-Control-Allow-Methods",
  "GET, POST, PUT, DELETE, OPTIONS"
);
res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

app.use(express.json());

app.use("/", router);

export default app;
