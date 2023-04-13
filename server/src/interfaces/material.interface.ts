export interface BaseMaterial {
    name: string;
    color: string;
    volume:number;
    cost: number;
    delivery_date: string;
}

export interface Material extends BaseMaterial {
    id: number;
}