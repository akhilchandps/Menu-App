"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getItemsByMenu = exports.createMenuItem = void 0;
const MenuItem_1 = __importDefault(require("../models/MenuItem"));
// Create a new menu item
const createMenuItem = async (req, res) => {
    try {
        const { name, price, menuId } = req.body;
        if (!name || !price || !menuId) {
            return res.status(400).json({ message: "Name, price and menuId are required" });
        }
        // Create the item
        const newItem = await MenuItem_1.default.create({ name, price, menuId });
        res.status(201).json(newItem);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.createMenuItem = createMenuItem;
// Get all items for a specific menu
const getItemsByMenu = async (req, res) => {
    try {
        const { menuId } = req.params;
        if (!menuId) {
            return res.status(400).json({ message: "menuId is required" });
        }
        const items = await MenuItem_1.default.find({ menuId });
        res.json(items);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.getItemsByMenu = getItemsByMenu;
//# sourceMappingURL=itemController.js.map