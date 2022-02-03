<script>
  export default {
    created() {
      fetch('https://jsonplaceholder.typicode.com/todos/')
        .then((response) => response.json())
        .then((users) => {
          this.users = users
        })
    },
    data() {
      return {
        users: null
      }
    }
  }
</script>

<template>
  <div id="center_api">
    <ol>
      <li :key="user.id" v-for="user in users.slice(0, 10)">
        {{ user.title }}
      </li>
    </ol>
  </div>
</template>

<style>
  li {
    text-align: left;
    line-height: 1.5;
  }
  #center_api {
    display: flex;
    justify-content: center;
  }
</style>
