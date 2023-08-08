<script setup>
import { RouterView } from 'vue-router'
import PageHeader from './components/PageHeader.vue';
</script>

<template>
  <header>
    <PageHeader />
  </header>
  <br />
  <RouterView />
</template>

<style></style>
