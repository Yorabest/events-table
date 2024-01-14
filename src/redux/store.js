import { phoneReducer } from "./slices";
import { filterReducer } from "./slices";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        phone: phoneReducer,
        filter: filterReducer
    }

})