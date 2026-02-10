<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router';


</script>

<template>
  <RouterLink to="/">本地</RouterLink>
  <RouterLink to="/out">外地</RouterLink>
  <RouterView />

</template>

<style scoped></style>
