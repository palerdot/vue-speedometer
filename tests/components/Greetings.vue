<template>
  <section>
    <h1 data-testid="title">👋 Hello {{ name }}!</h1>
    <p>This is your first component tested using browser-based component testing with Cypress + Vue ✌️🌲</p>
  </section>
</template>

<script>
  export default {
    props: {
      name: { type: String, default: 'world' }
    }
  }
</script>

<style scoped>
  section {
    font-family: "Helvetica Neue", sans-serif;
  }
</style>
