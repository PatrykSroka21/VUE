<script>
  import UsersList from '../components/UsersList.vue'
  export default {
    components: {
      UsersList
    },
    data() {},
    methods: {}
  }
</script>

<template>
  <h1>Simple API</h1>
  <div id="center_text">
    <p>
      This is a simple fetch from a test API, it has almost 100 items but I
      decided to only show 10 of them for the page to look much more clean but
      still showing the results. This is just a API made for testing and is free
      to use for anybody.
    </p>
  </div>
  <UsersList />
</template>

<style lang="scss">
  $api-font-size: 25px;

  p {
    text-align: left;
    width: 500px;
    font-size: 28px;
  }
  #center_text {
    display: flex;
    justify-content: center;
  }
  li {
    font-size: $api-font-size;
  }
</style>
