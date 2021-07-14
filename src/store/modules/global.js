/*
 * @Author: your name
 * @Date: 2021-07-14 19:36:11
 * @LastEditTime: 2021-07-14 20:20:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue_basic_demo\src\store\modules\global.js
 */
const state = {
  loading: "",
  userInfo: {},
};
const mutations = {
  SET_LOADING: (state, value) => {
    state.loading = value;
  },
  SET_USER_INFO: (state, value) => {
    state.userInfo = value;
  },
};
const actions = {
  setLoading: ({ commit }, value) => {
    commit("SET_LOADING", value);
  },
  setUserInfo: ({ commit }, value) => {
    commit("SET_USER_INFO", value);
  },
};
const getters = {
  loading: (state) => state.loading,
  userInfo: (state) => state.userInfo,
};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
