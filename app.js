import express, { Router } from "express";
import mongoose from "mongoose";
import cors from "cors";
import router from "./Controllers.js";

const app = express();

const corsOptions = {
  origin: "http://localhost:5173", // replace with your React app's URL
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

// app.use(cors(corsOptions));
res.setHeader("Access-Control-Allow-Origin", "*");

app.use(express.json());

app.use("/", router);

export default app;
