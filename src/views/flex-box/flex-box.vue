<template>
  <div class="flex-box-view">

    <!-- Flow: Row -->

    <div class="section">

      <!-- row-wrap layout-->
      <porlet class="flex-box-porlet">
        <div slot="header">
          Flow: Row Wrap
        </div>

        <div class="row-wrap-parent">
          <div v-for="item in items"
               :key="item.id"
               class="flex-child">
            {{ item.label }}
          </div>
        </div>
      </porlet>

    </div>

    <div class="section">

      <!-- row-nowrap layout-->
      <porlet class="flex-box-porlet">
        <div slot="header">
          Flow: Row NoWrap
        </div>

        <div class="row-nowrap-parent">
          <div v-for="item in items"
               :key="item.id"
               class="flex-child">
            {{ item.label }}
          </div>
        </div>
      </porlet>

      <!-- row-nowrap layout-->
      <porlet class="flex-box-porlet">
        <div slot="header">
          Flow: Row NoWrap -- align items : Center
        </div>

        <div class="row-nowrap-parent row-nowrap-parent--align-items">
          <div v-for="item in items"
               :key="item.id"
               class="flex-child">
            {{ item.label }}
          </div>
        </div>
      </porlet>

      <!-- row-nowrap--diff-child-flex layout-->
      <porlet class="flex-box-porlet">
        <div slot="header">
          Flow: Row NoWrap : Different child flex
        </div>

        <div class="row-nowrap-parent row-nowrap-parent--dif-child-flex">
          <div v-for="item in items"
               :key="item.id"
               class="flex-child">
            {{ item.label }}
          </div>
        </div>

      </porlet>

    </div>

    <!-- Flow: Column -->
    <div class="section">

      <!-- column-wrap layout-->
      <porlet class="flex-box-porlet">
        <div slot="header">
          Flow: Column Wrap
        </div>

        <div class="column-wrap-parent">
          <div v-for="item in items"
               :key="item.id"
               class="flex-child">
            {{ item.label }}
          </div>
        </div>
      </porlet>

    </div>

    <div class="section">

      <!-- row-nowrap layout-->
      <porlet class="flex-box-porlet">
        <div slot="header">
          Flow: Row NoWrap
        </div>

        <div class="column-nowrap-parent">
          <div v-for="item in items"
               :key="item.id"
               class="flex-child">
            {{ item.label }}
          </div>
        </div>
      </porlet>

      <!-- row-nowrap layout-->
      <porlet class="flex-box-porlet">
        <div slot="header">
          Flow: Column NoWrap -- align items : Center
        </div>

        <div class="column-nowrap-parent column-nowrap-parent--align-items">
          <div v-for="item in items"
               :key="item.id"
               class="flex-child">
            {{ item.label }}
          </div>
        </div>
      </porlet>

      <!-- row-nowrap--diff-child-flex layout-->
      <porlet class="flex-box-porlet">
        <div slot="header">
          Flow: Column NoWrap : Different child flex
        </div>

        <div class="column-nowrap-parent column-nowrap-parent--dif-child-flex">
          <div v-for="item in items"
               :key="item.id"
               class="flex-child">
            {{ item.label }}
          </div>
        </div>

      </porlet>

    </div>

  </div>
</template>

<script>
  import Porlet from "../../layouts/porlet/porlet";

  export default {
    name: "flex-box-view",
    components: {Porlet},
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

  .section {
    // spaces
    margin-top: 20px;
    border: 1px solid black;
    padding: 20px;

    // display
    display: flex;
    flex-flow: row wrap;

  }

  .flex-box-porlet:not(:first-child) {
  }

  .flex-box-porlet {
    margin-top: 20px;
    border: 1px solid black;
  }

  .row-wrap-parent {
    // size
    width: 500px;
    height: 500px;

    // display
    display: flex;
    flex-flow: row wrap;
  }

  .row-nowrap-parent {
    // size
    width: 500px;
    height: 500px;

    // display
    display: flex;
    flex-flow: row nowrap;
  }

  .row-nowrap-parent--align-items {
    align-items: center;
  }

  // Assign color palette to the flex childs
  $colors: #c23531, #2f4554, #61a0a8, #d48265, #91c7ae, #749f83, #ca8622, #bda29a, #6e7074, #546570, #c4ccd3;
  @for $i from 1 through length($colors) {
    .flex-child:nth-child(#{$i}) {
      background: lighten(nth($colors, $i), 20%);
    }
  }

  .flex-child {
    width: 100px;
    height: 100px;
  }

  .row-nowrap-parent--dif-child-flex {

    .flex-child:nth-child(2) {
      align-self: center;
    }

    .flex-child:nth-child(4) {
      align-self: flex-end;
    }

  }

  .column-wrap-parent {
    // size
    width: 500px;
    height: 500px;

    // display
    display: flex;
    flex-flow: column wrap;
  }

  .column-nowrap-parent {
    // size
    width: 500px;
    height: 500px;

    // display
    display: flex;
    flex-flow: column nowrap;
  }

  .column-nowrap-parent--dif-child-flex {

    .flex-child:nth-child(2) {
      align-self: center;
    }

    .flex-child:nth-child(4) {
      align-self: flex-end;
    }

  }

  .column-nowrap-parent--align-items {
    align-items: center;
  }

</style>
