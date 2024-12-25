import { configureStore } from "@reduxjs/toolkit";
import { createReducerManager } from "./reducerManager";
import { userReducer } from "@/entities/User";
var rootReducer = {
    user: userReducer,
};
export function createReduxStore() {
    var reducerManager = createReducerManager(rootReducer);
    var store = configureStore({
        // @ts-ignore
        reducer: reducerManager.reduce,
    });
    // @ts-ignore
    store.reducerManager = reducerManager;
    return store;
}
