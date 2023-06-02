import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import UserStore from "./store/UserStore";
import ProductStore from "./store/ProductStore";
import MaterialStore from "./store/MaterialStrore";
import TypeStore from "./store/TypeStore";

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Context.Provider
        value={{
            user: new UserStore(),
            product: new ProductStore(),
            material: new MaterialStore(),
            type: new TypeStore(),
        }}
    >
        <App />
    </Context.Provider>
);
