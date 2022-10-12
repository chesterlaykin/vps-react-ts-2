import { combineReducers, configureStore } from "@reduxjs/toolkit";

//Import all slices
import somefeatureReducer from "@/redux/features/somefeature/somefeature-slice";

//Import all api slices
import { apiSlice } from "@/redux/features/someotherfeature-api/someotherfeature-api-slice";

//types from toolkit interface
import type { PreloadedState } from '@reduxjs/toolkit'
// import { ConfigureStoreOptions } from "@reduxjs/toolkit/dist/configureStore";

// export const store = configureStore({
//     reducer: {
//         somefeature: somefeatureReducer,
//         [apiSlice.reducerPath]: apiSlice.reducer,
//     },
//     middleware: (getDefaultMiddleware) => {
//         return getDefaultMiddleware().concat(apiSlice.middleware);
//     }
// })

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

// const store = getStore();

// type ConfiguredStore = ReturnType<typeof setupStore>;
// type StoreGetState = ConfiguredStore["getState"];
export type AppStore = ReturnType<typeof setupStore>;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = AppStore["dispatch"];


// export const store = getStore(preloadedState);
// export const store = configureStore({...storeConfiguration});
