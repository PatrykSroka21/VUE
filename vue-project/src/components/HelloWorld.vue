<script>
  export default {
    props: {
      msg: {
        type: String,
        default: ''
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
