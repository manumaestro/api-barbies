import express from "express";
import { getAllBarbies, getBarbiesById, create, remove } from "../controllers/barbieController.js";

const router = express.Router();

router.get("/", getAllBarbies);
router.get("/:id", getBarbiesById);
router.post("/", create);
router.delete("/:id", remove);

export default router;
