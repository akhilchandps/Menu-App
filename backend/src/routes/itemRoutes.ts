import express from "express";
import { createMenuItem, getItemsByMenu } from "../controllers/itemController";

const router = express.Router();

// Routes
router.post("/", createMenuItem);
router.get("/:menuId", getItemsByMenu);

export default router;