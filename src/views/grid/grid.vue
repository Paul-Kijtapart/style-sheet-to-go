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

      <!-- Display Responsive 0 -->
      <div class="grid-parent grid-parent--responsive-0">
        <div v-for="item in items"
             :key="item.id"
             :class="['grid-child', 'grid-child--'+item.id]">
          {{ item.label }}
        </div>
      </div>

      <!-- Display 2 -->
      <div class="grid-parent grid-parent--2">
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

    padding: 10px;
    background: black;
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
    background: white;

    // grid
    display: grid;
    grid-gap: 10px;

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
    grid-template-areas: "header" "section" "aside-1" "aside-2" "footer";

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

  // grid-parent responsive 0
  .grid-parent--responsive-0 {

    display: grid;

    // fr is like flex-grow
    //(determine how available spaces get distributed among children)
    grid-template-columns: 1fr 4fr 1fr;

    .grid-child--a {
      grid-row: 1/2;
      grid-column: 1/-1;
    }

    .grid-child--b {
      grid-row: 2/3;
    }

    .grid-child--c {
      grid-row: 2/3;
      grid-column: 2/3;
    }

    .grid-child--d {
      grid-row: 2/3;
      grid-column: 3/4;
    }

    .grid-child--e {
      grid-row: 3/4;
      grid-column: 1/3;
    }

    .grid-child--f {
      grid-row: 3/4;
      grid-column: 3/4;
    }
  }

  // grid-parent responsive 1
  .grid-parent--2 {

    // 3 named-columns (Best practice)
    // IMPORTANT: it's possible to assign multiple names for each column [ name1, name2 ] 1fr (size of col)
    grid-template-columns: [left-sidebar-start] 1fr [left-sidebar-end main-content-start] 4fr [main-content-end right-sidebar-start] 1fr [right-sidebar-end]; // this corrsponds to the GridLine

    // 2 named-row (Best practice)
    grid-template-rows: [body-start] 9fr [footer-start] 1fr;

    .grid-child--aside-1 {
      grid-row: body-start / span 1;
      grid-column: left-sidebar-start / span 1;
    }

    .grid-child--aside-2 {
      grid-row: body-start / span 1;
      grid-column: right-sidebar-start / -1; // again - 1 = go to the end
    }

    .grid-child--section {
      grid-row: body-start / span 1;

      // We could
      // grid-column: main-content-start / span 1;
      grid-column: main-content-start / main-content-end; // VERBOSE!
    }

    .grid-child--footer {

      // We could
      // grid-column: left-sidebar-start / span 3; // span need to be followed # of columns this will take

      // but this is better
      grid-column: left-sidebar-start / right-sidebar-end;
    }
  }

</style>
