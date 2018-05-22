import "regenerator-runtime/runtime";
import { h } from "preact";

import { StoreProvider, actions } from "./store";
import Routes from "./Routes";

const App = ({ children }) => (
  <StoreProvider>
    <div id="app">{children}</div>
  </StoreProvider>
);

export { App, actions, Routes };
