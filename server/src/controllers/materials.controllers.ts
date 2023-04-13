import { Request, Response } from "express";
import * as MaterialService from "../services/materials.service";
import { BaseMaterial, Material } from "../interfaces/material.interface";

export const findAll = async (req: Request, res: Response): Promise<void> => {
    try {
        const materials: Material[] = await MaterialService.findAll();

        res.status(200).send(materials);
    } catch (e:any) {
        res.status(500).send(e.message);
    }
};

export const find = async (req: Request, res: Response): Promise<any> => {
    const id: number = parseInt(req.params.id, 10);

    try {
        const material: Material = await MaterialService.find(id);

        if (material) {
            return res.status(200).send(material);
        } else {
            res.status(404).send("material not found");
        }
    } catch (e:any) {
        res.status(500).send(e.message);
    }
};

export const create = async (req: Request, res: Response): Promise<void> => {
    try {
        const material: BaseMaterial = req.body;

        const newMaterial = await MaterialService.create(material);

        res.status(201).json(newMaterial);
    } catch (e:any) {
        res.status(500).send(e.message);
    }
};

export const update = async (req: Request, res: Response): Promise<any> => {
    const id: number = parseInt(req.params.id, 10);

    try {
        const materialUpdate: Material = req.body;

        const existingMaterial: Material = await MaterialService.find(id);

        if (existingMaterial) {
            const updatedMaterial = await MaterialService.update(id, materialUpdate);
            return res.status(200).json(updatedMaterial);
        }

        const newMaterial = await MaterialService.create(materialUpdate);

        res.status(201).json(newMaterial);
    } catch (e:any) {
        res.status(500).send(e.message);
    }
};

export const remove = async (req: Request, res: Response): Promise<void> => {
    try {
        const id: number = parseInt(req.params.id, 10);
        await MaterialService.remove(id);

        res.sendStatus(204);
    } catch (e:any) {
        res.status(500).send(e.message);
    }
};
