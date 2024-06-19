'use client';

import {createContext, FC, ReactNode} from 'react';

import {useCatalogStore} from './lib';
import {TLoadingStore} from './model';

const CategoryContext = createContext<TLoadingStore | undefined>(undefined);

export const CatalogProvider: FC<{ children: ReactNode }> = ({
                                                                  children,
                                                              }) => {
    const categoryStore = useCatalogStore();

    return (
        <CategoryContext.Provider value={categoryStore}>
            {children}
        </CategoryContext.Provider>
    );
};
