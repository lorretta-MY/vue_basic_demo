import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./assets/css/reset.css"; // 样式

// 引入antDesignVue
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
Vue.use(Antd);

// 全局引入Echarts
// import * as echarts from "echarts";
// Vue.prototype.$echarts = echarts;

// 按需引入Echarts

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
