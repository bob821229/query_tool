<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue';


</script>

<template>
  <Header />
  <div class="content">
    <RouterView />
  </div>
</template>

<style scoped >
.content {
  padding: 20px;
}
</style>
