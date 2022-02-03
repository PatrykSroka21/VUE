<script>
  export default {
    components: {}
  }
</script>

<template>
  <header>My personal page</header>
  <nav>
    <RouterLink to="/">Home</RouterLink>

    <RouterLink to="/about">About</RouterLink>

    <RouterLink to="/api">API</RouterLink>
  </nav>

  <main>
    <RouterView />
  </main>
</template>

<style>
  body {
    text-align: center;
  }
  header {
    borer-radius: 10%;
    width: 100%;
    padding: 25px;
    margin: -8px;
    background-color: rgb(201, 201, 201);
    text-align: center;
    font-weight: bold;
    font-size: 25px;
  }
  nav {
    padding: 30px;
    text-align: center;
  }
  nav a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    padding: 15px;
    border-radius: 4px;
    margin-left: 25px;
  }
  .router-link-exact-active {
    color: white;
    background: crimson;
  }
</style>
