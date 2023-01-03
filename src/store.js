import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import emailAPI from './features/emailAPI'



export const store = configureStore({
    reducer:{
        [emailAPI.reducerPath]: emailAPI.reducer,

    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(emailAPI.middleware),
})


setupListeners(store.dispatch)
export default store