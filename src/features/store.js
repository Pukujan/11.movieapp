import { configureStore } from '@reduxjs/toolkit';
import { movieApi } from './movieApi';


export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [movieApi.reducerPath]: movieApi.reducer,

  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      movieApi.middleware,

    ])
})

//add reducer in empty space for each api slice
//add middleware in array for each api slice