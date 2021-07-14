/*
 * @Author: your name
 * @Date: 2021-06-11 15:14:14
 * @LastEditTime: 2021-06-28 14:17:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue_basic_demo\src\store\index.js
 */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  // 存放全局数据 相当于data, 调用：rhis.$store.state.num
  state: {
    num: 0,
  },
  // 全局的computed, 调用：this.$store.getters.getNum
  getters: {
    getNum(state) {
      return state.num;
    },
  },
  // 更改state状态的唯一方法，相当于组件中的methods，不能使用异步方法（axios,定时器），
  mutations: {
    // 外部如何调用：this.$store.commit('increase', 2)  [payload = 2]
    increase(state, payload) {
      state.num += payload ? payload : 1;
    },
    decrease(state) {
      state.num--;
    },
  },
  // 执行异步方法，实际也是执行上下文里的mutation
  actions: {
    // 外部如何调用：this.$store.dispatch('deceaseAsync')
    deceaseAsync(context) {
      setTimeout(() => {
        context.commit("decrease");
      });
    },
  },
  modules: {},
});
