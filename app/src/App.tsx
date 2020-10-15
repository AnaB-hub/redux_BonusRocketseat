import React from "react";
import { Provider } from "react-redux";

import store from "./store";
import Catalog from "./componentes/Catalog";
import Cart from "./componentes/Cart";

function App() {
  return (
    <Provider store={store}>
      <Catalog />
      <Cart />
    </Provider>
  );
}

export default App;
