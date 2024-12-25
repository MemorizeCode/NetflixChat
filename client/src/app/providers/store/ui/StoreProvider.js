import { jsx as _jsx } from "react/jsx-runtime";
import { Provider } from "react-redux";
import { createReduxStore } from "../config/store";
export var StoreProvider = function (_a) {
    var children = _a.children;
    var store = createReduxStore();
    return (_jsx(Provider, { store: store, children: children }));
};
