import { combineReducers, configureStore } from "@reduxjs/toolkit";

//All slices
import somefeatureReducer from "@/redux/features/somefeature/somefeature-slice";

//All api slices
import { apiSlice } from "@/redux/features/someotherfeature-api/someotherfeature-api-slice";

//types from toolkit interface
import type { PreloadedState } from '@reduxjs/toolkit'

export const rootReducer = combineReducers({
    somefeature: somefeatureReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => 
    configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => {
            return getDefaultMiddleware().concat(apiSlice.middleware);
        },
        preloadedState
});

export type AppStore = ReturnType<typeof setupStore>;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = AppStore["dispatch"];
