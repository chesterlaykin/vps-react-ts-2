import { configureStore } from "@reduxjs/toolkit";

//Import all slices
import somefeatureReducer from "@/redux/features/somefeature/somefeature-slice";

//Import all api slices
import { apiSlice } from "@/redux/features/someotherfeature-api/someotherfeature-api-slice";

//types from toolkit interface
import { ConfigureStoreOptions } from "@reduxjs/toolkit/dist/configureStore";

export const getStore = (preloadedState: any = undefined) => {

    return configureStore({
        reducer: {
            somefeature: somefeatureReducer,
            [apiSlice.reducerPath]: apiSlice.reducer,
        },
        middleware: (getDefaultMiddleware) => {
            return getDefaultMiddleware().concat(apiSlice.middleware);
        },
        preloadedState
    })
};

// const store = getStore();
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

// export const store = getStore(preloadedState);
// export const store = configureStore({...storeConfiguration});
