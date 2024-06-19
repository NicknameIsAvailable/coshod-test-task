import {create} from 'zustand';

import {TLoadingStore, initState} from '@/entities/catalog/model';
import {catalogApi} from '@/entities/catalog/api';
import {useLoadingStore} from '@/entities/loading';
import {IFilterInputs} from '@/widgets/home/filter-catalog/model';

export const useCatalogStore = create<TLoadingStore>((set, get) => ({
    ...initState,
    getCatalog: async ({brands, models, tarifs, page}) => {
        useLoadingStore.getState().setLoading(true);
        const data = await catalogApi.getCatalog({brands, models, tarifs, page});
        set({ catalog: data });
        useLoadingStore.getState().setLoading(false);
        return data;
    },
    getCarById: async (id) => {
        useLoadingStore.getState().setLoading(true);
        const data = await catalogApi.getCarById(id);
        set({ currentCar: data });
        useLoadingStore.getState().setLoading(false);
        return data;
    },
    getFilters: async () => {
        useLoadingStore.getState().setLoading(true);
        const data = await catalogApi.getFilters();
        set({ filters: data });
        useLoadingStore.getState().setLoading(false);
        return data;
    },
    setCurrentFilters: async (currentFilters: IFilterInputs) => {
        set({ currentFilters });
        await get().getCatalog(currentFilters);
    },
}));
