<template>
  <porlet class="grid">

    <!-- header -->
    <div slot="header">
      Grid view
    </div>

    <!-- body -->

    <div class="grid-showcases">

      <div class="grid-parent grid-parent--0">
        <div v-for="item in items"
             :key="item.id"
             :class="['grid-child', 'grid-child--'+item.id]">
          {{ item.label }}
        </div>
      </div>

      <!-- Display One -->
      <div class="grid-parent grid-parent--1">
        <header class="grid-child grid-child--header"> Header</header>
        <aside class="grid-child grid-child--aside-1"> Aside 1</aside>
        <aside class="grid-child grid-child--aside-2">Aside 2</aside>
        <section class="grid-child grid-child--section"> Section</section>
        <footer class="grid-child grid-child--footer"> Footer</footer>
      </div>

      <!-- Display Two -->
      <div class="grid-parent--2">
        <header class="grid-child grid-child--header"> Header</header>
        <aside class="grid-child grid-child--aside-1"> Aside 1</aside>
        <aside class="grid-child grid-child--aside-2">Aside 2</aside>
        <section class="grid-child grid-child--section"> Section</section>
        <footer class="grid-child grid-child--footer"> Footer</footer>
      </div>

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

  // wrapping around show case
  .grid-showcases {

    display: grid;

    // Note: grid-gap is short-hand for Row and Column gap
    grid-gap: 20px; // right and bottom margins = 10px

    // sm
    grid-template-columns: 1fr;

    // md
    @media (min-width: 700px) {
      grid-template-columns: 1fr 1fr;
    }
  }

  .grid-parent {
    overflow: hidden;

    //size
    height: 500px;

    // color
    border: 1px solid black;
  }

  .grid-child {
    border: black;

    // display
    display: flex;
    justify-content: center;
    align-items: center;

    // Assign color palette to the flex childs
    $colors: #c23531, #2f4554, #61a0a8, #d48265, #91c7ae, #749f83, #ca8622, #bda29a, #6e7074, #546570, #c4ccd3;
    @for $i from 1 through length($colors) {
      &:nth-child(#{$i}) {
        background: lighten(nth($colors, $i), 20%);
      }
    }

    // font
    color: black;
    font-weight: bold;
  }

  // grid-parent-0
  .grid-parent--0 {

    display: grid;
    grid-gap: 10px;
    grid-template-columns: 100px 200px auto auto; // 4 columns

    .grid-child--a {
      grid-row: 1/3;
    }

    .grid-child--b {
    }

    .grid-child--c {
    }

    .grid-child--d {
    }

    .grid-child--e {
      grid-column: 2/3;
    }

    .grid-child--f {

      // Note: startColIndex starts left-end (GridLine)
      // In this case, highest possible endColIndex = numColumn + 1 = 4 + 1 = 5
      // -1 = span till end
      grid-column: 3 / -1; // startColIndex / endColIndex

    }
  }

  // grid-parent 1
  .grid-parent--1 {
    // default layout to mobile screen
    display: grid;
    grid-template-areas: "header" "section" "aside-1" "aside-2" "footer";
    grid-gap: 10px;

    @media (min-width: 700px) {
      grid-template-areas: "header header header" "aside-1 section aside-2" "footer footer footer";
    }

    .grid-child--header {
      grid-area: header;
    }

    .grid-child--aside-1 {
      grid-area: aside-1;

    }

    .grid-child--aside-2 {
      grid-area: aside-2;
    }

    .grid-child--section {
      grid-area: section;
    }

    .grid-child--footer {
      grid-area: footer;
    }

  }

  // grid-parent 2
  .grid-parent--2 {

  }

</style>
