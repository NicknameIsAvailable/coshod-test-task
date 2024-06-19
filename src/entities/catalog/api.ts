import api from '@/shared/lib/api';
import {ICar, ICatalog, IFilter} from '@/shared/types';

import {ICatalogApi} from './model';

export const catalogApi: ICatalogApi = {
    getCatalog: async ({brands, models, page, tarifs}) => {
        try {
            const params = {
                brands: brands?.map(brand => `&brand[]=${brand}`),
                models: models?.map(model => `&model[]=${model}`),
                tarifs: tarifs?.map(tarif => `&tarif[]=${tarif}`),
                page: page && `&page=${page}`,
            };

            const path = `/?w=catalog-cars${params.brands || ''}${params.models || ''}${params.tarifs || ''}${params.page || ''}`;
            const response = await api.get(path);
            const data: ICatalog = response.data;
            return data;
        } catch (error) {
            throw error;
        }
    },
    getCarById: async (id: number) => {
        try {
            const response = await api.get(`/?w=catalog-car&id=${id}`);
            const data: ICar = response.data;
            return data;
        } catch (error) {
            throw error;
        }
    },
    getFilters: async () => {
        try {
            const response = await api.get('?w=catalog-filter');
            const data: IFilter = response.data;
            return data;
        } catch (error) {
            throw error;
        }
    },
};
