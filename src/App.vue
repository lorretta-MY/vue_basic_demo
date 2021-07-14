<template>
  <a-config-provider :locale="locale">
    <div id="app">
      <router-view />
      <loading v-if="$store.state.global.loading" />
    </div>
  </a-config-provider>
</template>

<script>
import Loading from "@/components/common/loading.vue";
import zhCN from "ant-design-vue/lib/locale-provider/zh_CN";
export default {
  components: {
    Loading,
  },
  data() {
    return {
      locale: zhCN, // 国际化语言配置，使用中文为主
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
