import { App, routes } from "./App";
import { render } from "preact";

render(
  <App>
    <Routes />
  </App>,
  document.body,
  document.querySelector("#app")
);
