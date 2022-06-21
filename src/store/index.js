import Vue from "vue";
import Vuex from "vuex";

import watchProduct from './modules/watchProducts.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    watchProduct
  }
});
