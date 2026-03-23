"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMenuById = exports.getMenus = exports.createMenu = void 0;
const Menu_1 = __importDefault(require("../models/Menu"));
const MenuItem_1 = __importDefault(require("../models/MenuItem"));
// Create menu
const createMenu = async (req, res) => {
    try {
        const { name, description, parentId } = req.body;
        const menu = await Menu_1.default.create({ name, description, parentId: parentId || null });
        res.status(201).json(menu);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.createMenu = createMenu;
// Get all menus
const getMenus = async (req, res) => {
    try {
        const parentId = req.query.parentId || null;
        const menus = await Menu_1.default.find({ parentId });
        res.json(menus);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.getMenus = getMenus;
// Get menu by id with items
const getMenuById = async (req, res) => {
    try {
        const menu = await Menu_1.default.findById(req.params.id);
        if (!menu)
            return res.status(404).json({ message: "Menu not found" });
        const items = await MenuItem_1.default.find({ menuId: menu._id });
        const subMenus = await Menu_1.default.find({ parentId: menu._id });
        res.json({ menu, subMenus, items });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.getMenuById = getMenuById;
//# sourceMappingURL=menuController.js.map