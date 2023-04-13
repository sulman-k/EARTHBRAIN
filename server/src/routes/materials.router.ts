import express from "express";
import * as MaterialsController from "../controllers/materials.controllers";

export const materialsRouter = express.Router();

materialsRouter.get("/", MaterialsController.findAll);

materialsRouter.get("/:id", MaterialsController.find);

materialsRouter.post("/", MaterialsController.create);

materialsRouter.put("/:id", MaterialsController.update);

materialsRouter.delete("/:id", MaterialsController.remove);
