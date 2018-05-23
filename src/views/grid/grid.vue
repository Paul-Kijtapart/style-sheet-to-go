<template>
  <porlet class="grid">

    <!-- header -->
    <div slot="header">
      Grid view
    </div>

    <!-- body -->
    <div class="grid-parent">
      <div v-for="item in items"
           :key="item.id"
           :class="['grid-child--'+item.id]">
        {{ item.label }}
      </div>
    </div>

    <!-- test 2 -->
    <div class="wrapper">
      <div class="one">One</div>
      <div class="two">Two</div>
      <div class="three">Three</div>
      <div class="four">Four</div>
      <div class="five">Five</div>
      <div class="six">Six</div>
    </div>

    <!-- Footer -->
    <div slot="footer">
    </div>

  </porlet>
</template>

<script>

  // layout
  import Porlet from "@/layouts/porlet";

  export default {
    name: "grid",
    components: {
      Porlet
    },
    data: function () {
      return {
        items: [
          {
            label: "A",
            id: "a"
          },
          {
            label: "B",
            id: "b"
          },
          {
            label: "C",
            id: "c"
          },
          {
            label: "D",
            id: "d"
          },
          {
            label: "E",
            id: "e"
          },
          {
            label: "F",
            id: "f"
          },
        ]
      };
    }
  }
</script>

<style lang="scss">

  .grid-parent {
    // grid
    display: grid;
    grid-template-columns: repeat(3, 1fr); // 3 columns with 1 new row
    grid-gap: 10px;
    grid-auto-rows: minmax(100px, auto); // row's height

    // color
    border: 1px solid black;
    background: lightgrey;

  }

  .grid-child {

  }

  .grid-child--a {
    grid-column: 1 / 3;
    grid-row: 1;
  }

  .grid-child--b {
    grid-column: 2 / 4;
    grid-row: 1 / 3;
  }

  .grid-child--c {
    grid-column: 1;
    grid-row: 2 / 5;
  }

  .grid-child--d {
    grid-column: 3;
    grid-row: 3;
  }

  .grid-child--e {
    grid-column: 2;
    grid-row: 4;
  }

  .grid-child--f {
    grid-column: 3;
    grid-row: 4;
  }

  // Test 2
  .wrapper {
    max-width: 940px;
    margin: 0 auto;
  }

  .wrapper > div {
    border: 2px solid rgb(233, 171, 88);
    border-radius: 5px;
    background-color: rgba(233, 171, 88, .5);
    padding: 1em;
    color: #d9480f;
  }

  .wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    grid-auto-rows: minmax(100px, auto);
  }

  .one {
    grid-column: 1 / 3;
    grid-row: 1;
  }

  .two {
    grid-column: 2 / 4;
    grid-row: 1 / 3;
  }

  .three {
    grid-column: 1;
    grid-row: 2 / 5;
  }

  .four {
    grid-column: 3;
    grid-row: 3;
  }

  .five {
    grid-column: 2;
    grid-row: 4;
  }

  .six {
    grid-column: 3;
    grid-row: 4;
  }

</style>
