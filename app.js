import express, { Router } from "express";
import mongoose from "mongoose";
import cors from "cors";
import router from "./Controllers.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"], // Include POST method
    credentials: true, // Include credentials (cookies) in the request
  })
);

// Enable CORS for all routes
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// Enable CORS for all routes
app.use(cors());

app.use(express.json());

app.use("/", router);

export default app;
