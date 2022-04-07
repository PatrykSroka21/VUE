<script>
  export default {
    props: {
      msg: {
        type: String,
        default: 'Hi and Welcome to my home page!'
      }
    }
  }
</script>

<style>
  p {
    font-weight: bold;
  }
</style>

<template>
  <p>{{ msg }}</p>
</template>
