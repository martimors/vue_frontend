import Vue from "vue";
import Vuex from "vuex";
import { auth } from "@/firebase";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    user: {
      loggedIn: false,
      data: null,
      claims: null
    }
  },
  getters: {
    user(state) {
      return state.user;
    }
  },
  mutations: {
    SET_LOGGED_IN(state, value) {
      state.user.loggedIn = value;
    },
    SET_USER(state, data) {
      state.user.data = data;
    },
    SET_CLAIMS(state, claims) {
      state.user.claims = claims;
    }
  },
  actions: {
    fetchUser({ commit }, user) {
      commit("SET_LOGGED_IN", user !== null);
      if (user) {
        commit("SET_USER", {
          displayName: user.displayName,
          email: user.email,
          arne: user.isAdmin
        });
        auth.currentUser.getIdTokenResult().then(idTokenResult => {
          commit("SET_CLAIMS", {
            isAdmin: idTokenResult.claims.isAdmin
          });
        });
      } else {
        commit("SET_USER", null);
      }
    }
  }
});
