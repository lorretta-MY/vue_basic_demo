import Vue from "vue";
import store from "../store/demo";
import router from "../router";
import axios from "axios";
import { message } from "ant-design-vue";

const vm = new Vue({ store, router });
let baseURL = "";

const service = axios.create({
  baseURL: baseURL,
  timeout: 120000,
});

// 请求拦截
service.interceptors.request.use(
  (config) => {
    config.headers["Content-type"] = "application/json; charset=utf-8;";
    vm.$store.dispatch("global/setLoading", true);
    return config;
  },
  (error) => {
    console.log("error", error);
    return Promise.reject(error);
  }
);

// 响应拦截
service.interceptors.response.use(
  (response) => {
    const status = response.status;
    const code = response.data.status || response.data.code;
    const res = response.data;
    vm.$store.dispatch("global/setLoading", false);
    if (status === 200) {
      // 处理登录失败
      const toLoginCode = ["00211", "00212"];
      if (toLoginCode.indexOf(code) !== -1) {
        sessionStorage.removeItem("token");
        router.push({ path: "/to-login" });
        return res;
      }
      // 处理成功
      const successCode = ["I0000", "I0001"];
      if (successCode.indexOf(code) !== -1) {
        return res;
      }
      // 处理失败
      const errCode = ["Err001", "Err002", "Err003"];
      if (errCode.indexOf(code) !== -1) {
        message.error(res.msg || "服务器异常，请稍后重试！");
      }
      return Promise.reject(res);
    } else {
      return Promise.reject(new Error(res.msg || "Error"));
    }
  },
  (error) => {
    vm.$store.dispatch("global/setLoading", false);
    let status;
    try {
      status.error.response.status;
    } catch (error) {
      status = 500;
    }
    message.error(`服务器异常，请稍后重试。当前状态码：${status}`);
    return Promise.reject(error);
  }
);
