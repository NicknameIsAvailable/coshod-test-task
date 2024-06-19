export interface ICatalogCar {
    id: number;
    brand: string;
    model: string;
    image: string;
    tarif: string[];
}

export interface ICatalog {
    result: number;
    page: number;
    pages: number;
    per_page: number;
    list: ICatalogCar[];
}
