import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { prisma } from "@repo/db";
const app = express();
app.use(cors());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3001, () => {
  console.log("Port Started at 3001!");
});
