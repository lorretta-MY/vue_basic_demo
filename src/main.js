import Vue from "vue";
import App from "./App.vue";
import router from "./router";

// 引入store，将store变成一个全局仓库
import store from "./store";

// 全局reset样式
import "./assets/css/reset.css";

// 引入antDesignVue
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
Vue.use(Antd);

// 全局引入Echarts
// import * as echarts from "echarts";
// Vue.prototype.$echarts = echarts;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
