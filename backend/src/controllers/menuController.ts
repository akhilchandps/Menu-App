import { Request, Response } from "express";
import Menu from "../models/Menu";
import MenuItem from "../models/MenuItem";

export const createMenu = async (req: Request, res: Response) => {
  try {
    const { name, description, parentId } = req.body;
    const menu = await Menu.create({ name, description, parentId: parentId || null });
    res.status(201).json(menu);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getMenus = async (req: Request, res: Response) => {
  try {
    const parentId = req.query.parentId || null;
    const menus = await Menu.find({ parentId });
    res.json(menus);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getMenuById = async (req: Request, res: Response) => {
  try {
    const menu = await Menu.findById(req.params.id);
    if (!menu) return res.status(404).json({ message: "Menu not found" });

    const items = await MenuItem.find({ menuId: menu._id });
    const subMenus = await Menu.find({ parentId: menu._id });

    res.json({ menu, subMenus, items });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};