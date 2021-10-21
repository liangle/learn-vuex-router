import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    shoppingCart: []
  },
  getters: {
    shoppingCartCount: state => state.shoppingCart.length,
    payMoney: state => {
      return state.shoppingCart.length > 0 ? state.shoppingCart.map(item => item.price).reduce((prev, curr) => prev + curr) : 0
    },
  },
  mutations: {
    addProductToShoppingCart(state, product) {
      state.shoppingCart.push(product);
    },
    delProductFromShoppingCart(state, index) {
      state.shoppingCart.splice(index, 1);
    },
    removeAll(state) {
      state.shoppingCart = [];
    }
  },
  actions: {  // action可以异步，mutation只能同步
    submitOrder({commit}) {
      setTimeout(() => {
        commit('removeAll');  //必须通过commit修改，不能直接state.shoppingCart = []
      }, 300);
    }
  }
}) 

export default store;