import {FC} from 'react';

import {CatalogProvider} from '@/entities/catalog';
import {LoadingProvider} from '@/entities/loading';

import {IProvidersProps} from './model';

export const Providers: FC<IProvidersProps> = ({children}) => {
    return (
        <LoadingProvider>
            <CatalogProvider>
                {children}
            </CatalogProvider>
        </LoadingProvider>
    );
};
