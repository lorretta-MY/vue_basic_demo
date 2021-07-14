/*
 * @Author: your name
 * @Date: 2021-07-14 19:34:52
 * @LastEditTime: 2021-07-14 19:37:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue_basic_demo\src\store\index.js
 */
import Vue from "vue";
import Vuex from "vuex";
import global from "./modules/global";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    global,
  },
});
