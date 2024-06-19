export interface ILoadingState {
    isLoading: boolean;
}

export interface ILoadingActions {
    setLoading(isLoading: boolean): void;
}

export type TLoadingStore = ILoadingState & ILoadingActions;

export const initState: ILoadingState = {
    isLoading: false,
};
