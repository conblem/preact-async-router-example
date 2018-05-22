import { h } from "preact";
import Router from "preact-async-router";

const Counter = import("./Counter").then(module => module.default);
const AsyncDiv = Promise.resolve("div");

const Routes = ({ history }) => (
  <Router history={history}>
    <Counter path="/" />
    <AsyncDiv path="/hi">Hi</AsyncDiv>
  </Router>
);

export default Routes;
