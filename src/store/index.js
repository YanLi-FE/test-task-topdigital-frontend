import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    paintings: [],
    cart: [],
  },
  mutations: {
    SET_PAINTINGS(state, paintings) {
      state.paintings = paintings;
    },
    SET_CART(state, cart) {
      state.cart = cart;
    },
    ADD_TO_CART(state, paintingId) {
      state.cart.push(paintingId);
      localStorage.cart = JSON.stringify(state.cart);
    },
  },
  actions: {
    async GET_PAINTINGS({ commit }) {
      const paintings = require('@/assets/data.json');

      // imitate loading data
      await axios.get(`https://jsonplaceholder.typicode.com/todos/1?r=${Math.random()}`);
      commit('SET_PAINTINGS', paintings);
    },
    async BUY_PAINTING({ commit }, paintingId) {
      // imitate loading data
      await axios.get(`https://jsonplaceholder.typicode.com/posts/1?r=${Math.random()}`);
      commit('ADD_TO_CART', paintingId);
    },
    INIT({ commit }) {
      commit('SET_CART', localStorage.cart ? JSON.parse(localStorage.cart) : []);
    },
  },
  modules: {},
});
