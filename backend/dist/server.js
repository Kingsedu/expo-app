"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { fileURLToPath } from "url";
const env_1 = require("./config/env");
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const adminDistPathFromPath = path_1.default.join(__dirname, "../../admin/dist");
const adminDistPathFromPathFile = path_1.default.join(__dirname, "../../admin", "dist", "index.html");
console.log("from adminDistPath", adminDistPathFromPath);
console.log("from adminDistPathFile", adminDistPathFromPathFile);
app.get("/api/health", (req, res) => {
    res.status(200).json({ message: "successful" });
});
console.log("coming from the fileName");
if (env_1.ENV.NODE_ENV === "production") {
    app.use(express_1.default.static(adminDistPathFromPath));
    app.get("/{*any}", (req, res) => {
        res.sendFile(adminDistPathFromPathFile);
    });
}
app.listen(env_1.ENV.PORT, () => {
    console.log(`serving this file from http://localhost:${env_1.ENV.PORT}`);
});
