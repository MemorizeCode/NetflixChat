import { ReactNode } from "react";
import { Provider } from "react-redux";
import { createReduxStore } from "../config/store";




interface ReduxStoreProps {
    children: ReactNode;
    // initialState:any
}

export const StoreProvider = ({children}:ReduxStoreProps) => {

    const store = createReduxStore()

    console.log("STORE")

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
}
 
