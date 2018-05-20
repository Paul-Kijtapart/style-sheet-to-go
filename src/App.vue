<template>
  <porlet class="app">

    <!-- header-->
    <div slot="header"
         class="app-header">
      <router-link to="/flexbox"> Flexbox showcases</router-link>
    </div>

    <div class="app-body">

      <!-- content that will be inserted by vue-router-->
      <router-view/>

    </div>


    <!-- footer-->
    <div slot="footer"
         class="app-footer">
      Footer
    </div>
  </porlet>
</template>

<script>

  // styles
  import 'normalize.css';

  // components
  import Porlet from "./layouts/porlet/porlet";

  export default {
    name: 'App',
    components: {Porlet}
  }
</script>

<style lang="scss">

  // clean some styles
  * {
    margin: 0;
    padding: 0;

    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .app {
    // size
    min-height: 100vh;
    width: 100%;
  }

  .app-body {

  }

  .app-header {
    font-weight: bold;
    background: lightblue;
  }

  .app-footer {
    background: lightgreen;
  }

</style>


