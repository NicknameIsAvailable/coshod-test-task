'use client';

import {createContext, FC, ReactNode} from 'react';

import {useLoadingStore} from './lib';
import {TLoadingStore} from './model';

const LoadingContext = createContext<TLoadingStore | undefined>(undefined);

export const LoadingProvider: FC<{ children: ReactNode }> = ({
                                                                  children,
                                                              }) => {
    const loadingStore = useLoadingStore();

    return (
        <LoadingContext.Provider value={loadingStore}>
            {children}
        </LoadingContext.Provider>
    );
};
