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

      <!-- Display 3 -->
      <div class="grid-parent grid-parent--3">
        <div v-for="item in items"
             :key="item.id"
             :class="['grid-child', 'grid-child--'+item.id]">
          {{ item.label }}
        </div>
      </div>

      <!-- Display 4 -->
      <div class="grid-parent grid-parent--4">
        <header class="grid-child grid-child--header"> Header</header>
        <aside class="grid-child grid-child--aside-1"> Aside 1</aside>
        <section class="grid-child grid-child--section"> Section</section>
        <footer class="grid-child grid-child--footer"> Footer</footer>
      </div>

      <!-- Display 5 -->
      <div class="grid-parent grid-parent--5">
        <div v-for="item in items"
             :key="item.id"
             :class="['grid-child', 'grid-child--'+item.id]">
          {{ item.label }}
        </div>
      </div>

      <!-- Display 6 -->
      <div class="grid-parent grid-parent--6">
        <div v-for="item in items"
             :key="item.id"
             :class="['grid-child', 'grid-child--'+item.id]">
          {{ item.label }}
        </div>
      </div>

      <!-- Display 7 -->
      <div class="grid-parent grid-parent--7">
        <div v-for="item in items"
             :key="item.id"
             :class="['grid-child', 'grid-child--'+item.id]">
          {{ item.label }}
        </div>
      </div>

      <!-- Display 8 -->
      <div class="grid-parent grid-parent--8">
        <div v-for="item in items"
             :key="item.id"
             :class="['grid-child', 'grid-child--'+item.id]">
          {{ item.label }}
        </div>
      </div>

      <!-- Display 9 -->
      <div class="grid-parent grid-parent--9">
        <div v-for="item in items"
             :key="item.id"
             :class="['grid-child', 'grid-child--'+item.id]">
          {{ item.label }}
        </div>
      </div>

      <!-- Display 10 (Re-order) -->
      <div class="grid-parent grid-parent--10">
        <div v-for="item in items"
             :key="item.id"
             :class="['grid-child', 'grid-child--'+item.id]">
          {{ item.label }}
        </div>
      </div>

      <!-- Display 11 (all-together) -->
      <div class="grid-parent grid-parent--11">
        <aside class="grid-child grid-child--aside-1"> Aside 1</aside>
        <aside class="grid-child grid-child--aside-2">Aside 2</aside>
        <aside class="grid-child grid-child--aside-3">Aside 3</aside>
        <section class="grid-child grid-child--section"> Section</section>
      </div>

      <!-- Display 12 (all-together) -->
      <div class="grid-parent grid-parent--12">
        <div v-for="item in items2"
             :key="item.id"
             :class="['grid-child', 'grid-child--'+item.id]">
          {{ item.label }}
        </div>
      </div>

    </div>
    <!-- Footer -->
    <div slot="footer">
      Footer
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
    },
    computed: {
      items2: function () {
        let res = this.items.concat();

        res.push(
          {
            label: "G",
            id: "g"
          },
          {
            label: "H",
            id: "h"
          },
          {
            label: "I",
            id: "i"
          },
          {
            label: "J",
            id: "j"
          },
        );

        return res;

      }
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

  // grid-parent 3
  .grid-parent--3 {

    // fixed 5 rows with responsive height
    /*grid-template-rows: 1fr 3fr 3fr 3fr 1fr; // all responsive*/

    // with this, 4th & 5th columns will take the remaining spaces
    grid-template-rows: 20px 30px 40px 2fr 1fr; // all responsive

    .grid-child--a {
    }

    .grid-child--b {
    }

    .grid-child--c {
    }

    .grid-child--d {
    }

    .grid-child--e {
    }

    .grid-child--f {
    }
  }

  // grid-parent 4
  .grid-parent--4 {

    // mobile
    grid-template-areas: "header" "aside-1" "section" "footer";
    grid-template-rows: 1fr 1fr 10fr 1fr;

    // md
    @media (min-width: 700px) {

      // layout
      // TIPS: if you want EMPTY space => use '....' or just '.' to indicate Empty Space
      grid-template-areas: "header header" "aside-1 section" "footer footer";

      // customize size
      grid-template-columns: 1fr 9fr;
      grid-template-rows: 1fr 10fr 1fr;
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

  // grid-parent 5
  .grid-parent--5 {

    /*grid-template-columns: 100px 100px; // fixed 2 columns*/

    // minmax => want it to take up 100px at the very least.
    // take up all available spaces at the most
    /*grid-template-columns: minmax(100px, auto) minmax(100px, auto); // fixed 2 columns*/

    /*grid-template-columns: minmax(min-content, 1fr) minmax(max-content, 4fr); // fixed 2 columns*/

    grid-template-columns: minmax(100px, 1fr) minmax(100px, 4fr); // fixed 2 columns

    .grid-child--header {
    }

    .grid-child--aside-1 {
    }

    .grid-child--aside-2 {
    }

    .grid-child--section {
    }

    .grid-child--footer {
    }
  }

  // grid-parent 6
  .grid-parent--6 {

    // make 6 columns - each with 15px
    /*grid-template-columns: repeat(6, 15px);*/

    // make 6 columns - each with different width size
    grid-template-columns: repeat(2, min-content 50px 150px);

    grid-template-columns: repeat(2, minmax(20px, auto) minmax(20px, auto) minmax(20px, auto));
  }

  // grid parent 7
  .grid-parent--7 {

    // auto-fill enables filling columns for the whole spaces (responsive)
    /*grid-template-columns: repeat(auto-fill, 100px);*/

    // TIP: this will ensures all spaces are filled beautifully
    // Again: minmax(100px, auto) => least width = 100px. and try to take up all remaining space
    /*grid-template-columns: repeat(auto-fill, minmax(100px, auto));*/

    grid-template-columns: repeat(auto-fill, minmax(100px, auto) minmax(10px, auto));

    .grid-child--a {
    }

    .grid-child--b {
    }

    .grid-child--c {
    }

    .grid-child--d {
    }

    .grid-child--e {
    }

    .grid-child--f {
    }
  }

  // grid parent 8 (Customized flow)
  .grid-parent--8 {

    // dense = auto fill empty space
    // column = swap the axis (e.g. horizontal bar => vertical bar)

    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);

    // update layout of the grid
    grid-auto-flow: column; // use dense to fill any remaining space

    .grid-child--a {
    }

    .grid-child--b {
      grid-column: span 3;
    }

    .grid-child--c {
      grid-column: span 3;
    }

    .grid-child--d {
    }

    .grid-child--e {
    }

    .grid-child--f {
      grid-column: span 3;
    }
  }

  // grid parent 9
  .grid-parent--9 {

    /*grid-template-rows: ;*/
    grid-template-rows: 4fr 6fr; // target 1st and 2nd rows

    // change default size for unset specified rows
    grid-auto-rows: 1fr 12fr; // 1fr-and-12fr repeated version

    grid-template-columns: repeat(auto-fill, minmax(300px, auto));

    .grid-child--a {
    }

    .grid-child--b {
    }

    .grid-child--c {
    }

    .grid-child--d {
    }

    .grid-child--e {
    }

    .grid-child--f {
    }
  }

  // grid parent 10 (Order to change item order)
  .grid-parent--10 {

    // each child has order 0 (default)
    .grid-child--a {
    }

    .grid-child--b {
    }

    .grid-child--c {
      order: 1;
    }

    .grid-child--d {
    }

    .grid-child--e {
    }

    .grid-child--f {
    }
  }

  // grid parent 11 (all together)
  .grid-parent--11 {

    // all together
    /*grid-template-areas: "aside-1 aside-2 aside-3" "section section aside-3";*/
    /*grid-template-rows: [header-top] 1fr [header-bottom main-top] 5fr [main-bottom];*/
    /*grid-template-columns: 2fr auto 1fr;*/

    // which is equivalent to below
    grid-template: [header-top] "aside-1 aside-2 aside-3" 1fr [header-bottom] "section section aside-3" 5fr [main-bottom] / 2fr auto 1fr;

    .grid-child--aside-1 {
      grid-area: aside-1;
    }

    .grid-child--aside-2 {
      grid-area: aside-2;
    }

    .grid-child--aside-3 {
      grid-area: aside-3;
    }

    .grid-child--section {
      grid-area: section;
    }
  }

  .grid-parent--12 {

    //grid: 3fr 14fr / 4fr 2fr; // however this will only his first 2 rows and apply 2 columns

    // if we want to repeat the 3fr 14fr pattern
    grid: auto-flow 3fr 14fr / 4fr 2fr; // however this will only his first 2 rows and apply 2 columns

    .grid-child--a {
    }

    .grid-child--b {
    }

    .grid-child--c {
    }

    .grid-child--d {
    }

    .grid-child--e {
    }

    .grid-child--f {
    }
  }

</style>
