import createStore, { put, get } from "saga.li";

import Routes from "./Routes";

const state = {
  count: 0
};

const sagas = {
  increment: function*() {
    const { count } = yield get();
    yield put({ count: count + 1 });
  }
};

const { StoreProvider, actions, connect } = createStore(state, sagas);

export { StoreProvider, actions, connect };
