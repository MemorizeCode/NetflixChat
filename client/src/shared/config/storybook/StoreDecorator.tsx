import { userReducer, UserSchema } from "@/entities/User";
import { combineReducers, createStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

interface RootState {
    user: UserSchema;
}

interface MockStoreProps {
    mockState?: Partial<RootState>
}

export const StoreDecorator = ({ children, mockState }: MockStoreProps & { children: JSX.Element }) => {
    const rootReducer = combineReducers({
        user: userReducer,
    });

    const initialState = mockState ? mockState : {
        user: {},
    }

    const store = createStore(rootReducer, initialState as any)

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
};