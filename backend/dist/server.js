"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Routes
const menuRoutes_1 = __importDefault(require("./routes/menuRoutes"));
const menuRoutes_2 = __importDefault(require("./routes/menuRoutes"));
app.use("/api/menus", menuRoutes_1.default);
app.use("/api/items", menuRoutes_2.default);
const PORT = process.env.PORT || 5000;
mongoose_1.default.connect(process.env.MONGO_URI)
    .then(() => {
    console.log("MongoDB Connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})
    .catch(err => console.log(err));
//# sourceMappingURL=server.js.map