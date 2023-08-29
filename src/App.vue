<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <NavBar />
  <RouterView />
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');

* {
  font-family: "Roboto", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  @media screen and (max-width: 1100px) {
	padding: 15px;
  }
}
</style>