<script setup>
import { RouterView } from 'vue-router'
import PageHeader from './components/PageHeader.vue';
</script>

<template>
  <header class="bar">
    <PageHeader />
  </header>

  <body class="page">
    <RouterView />
  </body>
</template>

<style lang="less">
.page {
  //margin-top: 100px;
}

.bar {
  //position: fixed;
  width: 600px;
  height: 10%;
}
</style>
