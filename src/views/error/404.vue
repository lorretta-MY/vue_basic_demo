<!--
 * @Author: your name
 * @Date: 2021-06-18 17:30:35
 * @LastEditTime: 2021-06-18 17:32:04
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \base_pc_project\src\views\error\404.vue
-->
<template>
  <a-result
    status="404"
    title="404"
    sub-title="Sorry, the page you visited does not exist."
  >
    <template #extra>
      <a-button type="primary"> Back Home </a-button>
    </template>
  </a-result>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
