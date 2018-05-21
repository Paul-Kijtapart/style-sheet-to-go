<template>
  <porlet>

    <!-- header -->
    <template slot="header">
      Home header
    </template>

    Home body cool.

    <!-- footer -->
    <template slot="footer">
      home footer
    </template>

  </porlet>
</template>

<script>
  import Porlet from "../../layouts/porlet/porlet";

  export default {
    name: "home",
    components: {Porlet}
  }
</script>

<style scoped>

</style>
