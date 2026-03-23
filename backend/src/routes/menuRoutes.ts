import express from "express";
import { createMenu, getMenus, getMenuById } from "../controllers/menuController";

const router = express.Router();

router.post("/", createMenu);
router.get("/", getMenus);
router.get("/:id", getMenuById);

export default router;