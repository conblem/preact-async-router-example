import Router from "preact-async-router";

const Counter = import("./Counter");
const AsyncDiv = Promise.resolve("div");

const Routes = ({ history }) => (
  <Router history={history}>
    <Counter path="/" />
    <AsyncDiv path="/hi">Hi</AsyncDiv>
  </Router>
);

export default Routes;
