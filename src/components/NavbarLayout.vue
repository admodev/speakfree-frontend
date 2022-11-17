<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <header>
      <RouterLink class="nav-link" to="/">Home</RouterLink>
      <RouterLink class="nav-link" to="/about">About</RouterLink>
      <RouterLink class="nav-link" to="/login">Login</RouterLink>
      <button class="account-button" type="submit">Ingresar/Salir</button>
  </header>
</template>

<style scoped>
/* Fixed top sticky navbar */
/* Style the navbar */
header {
  overflow: hidden;
  background-color: #333;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}

/* Navbar links */
.nav-link {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px;
  text-decoration: none;
}

.nav-link:active {
  color: #e5e5e5;
  -webkit-box-shadow: inset 0px 0px 5px #c1c1c1;
  -moz-box-shadow: inset 0px 0px 5px #c1c1c1;
  box-shadow: inset 0px 0px 5px #c1c1c1;
  outline: none;
}

/* Page content */
.content {
  padding: 16px;
}

/* Add some top padding to the page content to prevent sudden quick movement (as the navigation bar gets a new position at the top of the page (position:fixed and top:0) */
.sticky + .content {
  padding-top: 60px;
}

/* Move account button to the right corner */
.account-button {
  background: #fafafa;
  border: 1px solid #272727;
  float: right;
  margin: 0.5rem;
  padding: 10px;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
}

.account-button:active {
  background: #c1c1c1;
  -webkit-box-shadow: inset 0px 0px 5px #141313;
  -moz-box-shadow: inset 0px 0px 5px #141313;
  box-shadow: inset 0px 0px 5px #141313;
  outline: none;
}
</style>
