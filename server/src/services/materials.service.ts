import { BaseMaterial, Material } from "../interfaces/material.interface";

import { materials } from "../data/materials.data";

export const findAll = async (): Promise<Material[]> => Object.values(materials);

export const find = async (id: number): Promise<Material> => materials[id];

export const create = async (newItem: BaseMaterial): Promise<Material> => {
    const id = new Date().valueOf();

    materials[id] = {
        id,
        ...newItem,
    };

    return materials[id];
};

export const update = async (id: number, materialUpdate: BaseMaterial): Promise<Material | null> => {
    const material = await find(id);

    if (!material) {
        return null;
    }

    materials[id] = { id, ...materialUpdate };

    return materials[id];
};

export const remove = async (id: number): Promise<null | void> => {
    const material = await find(id);

    if (!material) {
        return null;
    }

    delete materials[id];
};
