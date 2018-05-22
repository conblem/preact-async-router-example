import { render, h } from "preact";

import { App, Routes } from "./App";

render(
  <App>
    <Routes />
  </App>,
  document.body,
  document.querySelector("#app")
);
