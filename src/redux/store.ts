import { configureStore } from '@reduxjs/toolkit';

//Import all slices
import somefeatureReducer from '@/redux/features/somefeature/somefeature-slice';

//Import all api slices
import { apiSlice } from '@/redux/features/someotherfeature/someotherfeature-api-slice';

//types from toolkit interface
import {ConfigureStoreOptions} from '@reduxjs/toolkit/dist/configureStore';

// function getStore(PRELOADED_STATE) {
//   const store = createStore(counterReducer, PRELOADED_STATE)
//   return store
// }

export const storeConfiguration: ConfigureStoreOptions = {
    reducer: {
      //add slices and api slices
      somefeature: somefeatureReducer,
      [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(apiSlice.middleware);
    },
  }
export const store = configureStore(storeConfiguration);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
