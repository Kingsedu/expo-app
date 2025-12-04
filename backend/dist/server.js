"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { fileURLToPath } from "url";
const env_1 = require("./config/env");
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const adminDistPathFromPath = path_1.default.join(__dirname, "../../admin/dist");
const adminDistPathFromPathFile = path_1.default.join(__dirname, "../../admin", "dist", "index.html");
console.log("Does dist exist?", fs_1.default.existsSync(adminDistPathFromPath));
console.log("Does index.html exist?", fs_1.default.existsSync(adminDistPathFromPathFile));
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
