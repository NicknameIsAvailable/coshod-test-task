export interface ITarif {
    name: string;
    type: string;
    values: Record<string, string>;
}

export interface IModelBrand {
    brand: string;
    models: string[]
}

export interface IModels {
    name: string;
    type: string;
    values: IModelBrand[];
}

export interface IBrands {
    name: string;
    code: string;
    values: string[];
}

export interface IFilter {
    result: number;
    brands: IBrands;
    models: IModels;
    tarif: ITarif;
}
