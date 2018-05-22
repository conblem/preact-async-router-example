import { h } from "preact";

import { connect } from "./store";

const Counter = ({ count, increment }) => (
  <div>
    <button onClick={increment}>+</button>
    {count}
  </div>
);

const mapStateToProps = ({ count }) => ({ count });
const mapActionsToProps = ({ increment }) => ({ increment });

export default connect(mapStateToProps, mapActionsToProps)(Counter);
