import { createStore } from 'vuex';

import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

const store = createStore({
  state() {
    cryptos: [];
    scene: null;
  },
  actions,
  getters,
  mutations,
});

export default store;
