<template>
  <div class="porlet">

    <!-- header -->
    <div class="porlet-header">
      <slot name="header">
      </slot>
    </div>

    <!-- body -->
    <div class="porlet-body">
      <!-- default slot -->
      <slot>
      </slot>
    </div>

    <!-- footer -->
    <div class="porlet-footer">
      <slot name="footer">
      </slot>
    </div>

  </div>
</template>

<script>
  export default {
    name: "porlet"
  }
</script>

<style lang="scss">

  .porlet {
    width: auto;
    height: auto;

    // display
    display: flex;
    flex-flow: column nowrap;
  }

  .porlet-header {
  }

  .porlet-body {
    flex: 1 1 auto; // body takes up any remaining spaces
  }
</style>
