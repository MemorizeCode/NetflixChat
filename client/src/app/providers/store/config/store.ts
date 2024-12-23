import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { createReducerManager } from "./reducerManager";
import { StateScema } from "./StateSchema";
import { userReducer } from "@/entities/User";



const rootReducer: ReducersMapObject<StateScema> = {
  user: userReducer,
};

export function createReduxStore() {
  const reducerManager = createReducerManager(rootReducer);

  const store = configureStore<StateScema>({
    // @ts-ignore
    reducer: reducerManager.reduce,
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}
