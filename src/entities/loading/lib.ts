import {create} from 'zustand';

import {type TLoadingStore, initState} from './model';

export const useLoadingStore = create<TLoadingStore>((set) => ({
    ...initState,
    setLoading: (isLoading: boolean) => set({ isLoading }),
}));
