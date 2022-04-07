<script>
  import HelloWorld from '.components/HelloWorld.vue'

  export default {
    components: {
      HelloWorld
    },
    data() {
      return {
        n: true,
        name: ''
      }
    },
    methods: {
      greeting() {
        return this.name
      }
    }
  }
</script>

<template>
  <HelloWorld />

  <input type="text" placeholder="name" v-model="name" />

  <div id="center_text">
    <p :class="{ n }">
      This website is only a test to see my personal skill at the framework Vue
      JS 3. A way of showing what I am able to do. I am a student of IT Högskola
      and I hope you enjoy my best attempt on making something out of it. First
      thing, try to write your name in the text box above. After that you can
      try and see what other pages are up to. I hope you enjoy your visit and
      that you might come back later. I'm still learning so this might not be
      perfect, I am trying my best.
    </p>
  </div>
</template>

<style>
  .n {
    text-align: left;
    width: 500px;
    font-size: 28px;
  }
  #center_text {
    display: flex;
    justify-content: center;
  }
</style>
