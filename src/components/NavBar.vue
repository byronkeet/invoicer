<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <header>
    <nav class="container">
      <div class="branding">
		<RouterLink :to="{ name: 'invoices' }">
			<img src="@/assets/invoicer.png" alt="" />
			<h1>Invoicer</h1>
		</RouterLink>
      </div>
      <ul class="nav-routes">
        <RouterLink :to="{ name: 'invoices' }">Home</RouterLink>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  background-color: #f1f1f1;
  nav {
    display: flex;
    align-items: center;
    padding: 25px 16px;

    .branding a {
      display: flex;
      align-items: center;
      gap: 8px;
	  text-decoration: none;
	  color: black;
      img {
        max-width: 50px;
      }

      h1 {
        font-size: 24px;
      }
    }

    .nav-routes {
      display: flex;
      flex: 1;
      justify-content: flex-end;
      gap: 12px;
      list-style: none;

      a {
        text-decoration: none;
        color: inherit;
      }
    }
  }
}
</style>
