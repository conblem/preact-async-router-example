import { StoreProvider, actions } from "./store";
import Routes from "./Routes";

const App = ({ children }) => <StoreProvider>{children}</StoreProvider>;

export { App, actions, Routes };
