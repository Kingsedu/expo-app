// import { fileURLToPath } from "url";
import { ENV } from "./config/env";
import express from "express";
import path from "path";

const app = express();

const adminDistPathFromPath = path.join(__dirname, "../../admin");
console.log("from adminDistPath", adminDistPathFromPath);

app.get("/api/health", (req, res) => {
  res.status(200).json({ message: "successful" });
});
console.log("coming from the fileName");

app.listen(ENV.PORT, () => {
  console.log(`serving this file from http://localhost:${ENV.PORT}`);
});
