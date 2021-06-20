/**
 * 全局混入数据
 */
export default {
  created() {},
  methods: {
    // localStorage 存储
    setLocal(key, value) {
      if (key) {
        try {
          localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
          new Error(error);
        }
        return false;
      }
      new Error("请传入key值");
    },
    // localStorage 获取
    getLocal(key) {
      if (key) {
        try {
          JSON.parse(localStorage.getItem(key));
        } catch (error) {
          new Error(error);
        }
        return false;
      }
      new Error("请传入key值");
    },
    // sessionStorage 存储
    setSession(key, value) {
      if (key) {
        try {
          sessionStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
          new Error(error);
        }
        return false;
      }
      new Error("请传入key值");
    },
    // sessionStorage 获取
    getSession(key) {
      if (key) {
        try {
          JSON.parse(sessionStorage.getItem(key));
        } catch (error) {
          new Error(error);
        }
        return false;
      }
      new Error("请传入key值");
    },
  },
  computed: {
    userId() {
      return sessionStorage.getItem("userId");
    },
  },
};
