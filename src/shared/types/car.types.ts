export interface IImage {
    id: string;
    image: string;
}

export interface ICarItem {
    brand: string;
    model: string;
    id: number;
    price: number;
    tarif: string[];
    images: IImage[]
}

export interface ICar {
    result: number;
    item: ICarItem;
    tarif: string[];
}
