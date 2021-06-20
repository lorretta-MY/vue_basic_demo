/** 全局过滤器 */
import Vue from "vue";

const filters = {
  /**
   * @description: 时间截取
   * @param {*} time
   */
  filtersYYMMDD(time) {
    if (time) {
      return `${time.substr(0, 4)}-${time.substr(4, 2)}-${time.substr(6)}`;
    }
    return "--";
  },
};

Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
});
