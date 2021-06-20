<!--
 * @Author: your name
 * @Date: 2021-06-18 17:30:36
 * @LastEditTime: 2021-06-18 17:32:43
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \base_pc_project\src\views\error\401.vue
-->
<template>
  <a-result
    status="403"
    title="401"
    sub-title="Sorry, you are not authorized to access this page."
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
