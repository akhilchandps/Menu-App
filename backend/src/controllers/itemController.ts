import { Request, Response } from "express";
import MenuItem, { IMenuItem } from "../models/MenuItem";

export const createMenuItem = async (req: Request, res: Response) => {
  try {
    const { name, price, menuId } = req.body;

    if (!name || !price || !menuId) {
      return res.status(400).json({ message: "Name, price and menuId are required" });
    }

    // Create the item
    const newItem: IMenuItem = await MenuItem.create({ name, price, menuId });
    res.status(201).json(newItem);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getItemsByMenu = async (req: Request, res: Response) => {
  try {
    const { menuId } = req.params;

    if (!menuId) {
      return res.status(400).json({ message: "menuId is required" });
    }

    const items: IMenuItem[] = await MenuItem.find({ menuId });
    res.json(items);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};