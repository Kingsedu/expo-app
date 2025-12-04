// import { fileURLToPath } from "url";
import { ENV } from "./config/env";
import express from "express";
import path from "path";

const app = express();
app.use(express.json());
const adminDistPathFromPath = path.join(__dirname, "../../admin/dist");
const adminDistPathFromPathFile = path.join(
  __dirname,
  "../../admin",
  "dist",
  "index.html",
);

console.log("from adminDistPath", adminDistPathFromPath);
console.log("from adminDistPathFile", adminDistPathFromPathFile);

app.get("/api/health", (req, res) => {
  res.status(200).json({ message: "successful" });
});
console.log("coming from the fileName");
if (ENV.NODE_ENV === "production") {
  app.use(express.static(adminDistPathFromPath));

  app.get("/{*any}", (req, res) => {
    res.sendFile(adminDistPathFromPathFile);
  });
}
app.listen(ENV.PORT, () => {
  console.log(`serving this file from http://localhost:${ENV.PORT}`);
});
