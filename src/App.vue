<!--
 * @Author: your name
 * @Date: 2021-06-11 15:14:14
 * @LastEditTime: 2021-06-18 17:19:37
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \base_pc_project\src\App.vue
-->
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
