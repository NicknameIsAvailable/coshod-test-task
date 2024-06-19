import {ICar, ICatalog, IFilter} from '@/shared/types';
import {IFilterInputs} from '@/widgets/home/filter-catalog/model';

export interface ICatalogState {
    catalog: ICatalog | null;
    filters: IFilter | null;
    currentCar: ICar | null;
    currentFilters: IFilterInputs;
}

export interface ICatalogActions {
    getCatalog: ({brands, models, tarifs, page}: { brands?: string[]; models?: string[]; tarifs?: string[]; page?: number }) => Promise<ICatalog>;
    getCarById: (id: number) => Promise<ICar>;
    getFilters: () => Promise<IFilter>;
    setCurrentFilters: (currentFilters: IFilterInputs) => void;
}

export type TLoadingStore = ICatalogState & ICatalogActions;

export interface ICatalogApi {
    getCatalog: ({brands, models, tarifs, page}: { brands?: string[]; models?: string[]; tarifs?: string[]; page?: number }) => Promise<ICatalog>;
    getCarById: (id: number) => Promise<ICar>;
    getFilters: () => Promise<IFilter>;
}

export const initState: ICatalogState = {
    catalog: null,
    filters: null,
    currentCar: null,
    currentFilters: {
        brands: [],
        models: [],
        tarifs: [],
    },
};
