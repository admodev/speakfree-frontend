<script setup>
import { RouterView } from 'vue-router';
import NavbarLayout from './components/NavbarLayout.vue';
</script>

<template>
  <NavbarLayout />
  <div>
    <RouterView />
  </div>
</template>

<style>
main {
  width: 100%;
}
</style>
