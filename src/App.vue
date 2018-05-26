<template>
  <div class="app">

    <v-app id="inspire">

      <v-navigation-drawer
        fixed
        clipped
        class="grey lighten-4"
        app
        v-model="drawer">

        <v-list
          dense
          class="grey lighten-4">
          <template v-for="(item, i) in items">

            <v-layout v-if="item.heading"
                      row
                      align-center
                      :key="i">

              <v-flex xs6>
                <v-subheader v-if="item.heading">
                  {{ item.heading }}
                </v-subheader>
              </v-flex>
              <v-flex xs6 class="text-xs-right">
                <v-btn small flat>edit</v-btn>
              </v-flex>
            </v-layout>

            <v-divider v-else-if="item.divider"
                       dark
                       class="my-3"
                       :key="i"></v-divider>

            <v-list-tile v-else
                         :key="i"
                         @click="$router.push(item.url)">
              <v-list-tile-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title class="grey--text">
                  {{ item.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>

          </template>

        </v-list>
      </v-navigation-drawer>

      <!-- Top navbar -->
      <v-toolbar color="amber" app absolute clipped-left>
        <v-toolbar-side-icon @click.native="drawer = !drawer"></v-toolbar-side-icon>

        <!-- main title -->
        <span class="title ml-3 mr-5"
              @click="$router.push('/')"
              style="cursor:pointer;">
          You're Home
        </span>

        <v-text-field
          solo-inverted
          flat
          label="Search"
          prepend-icon="search">
        </v-text-field>

        <v-spacer></v-spacer>
      </v-toolbar>

      <!-- content -->
      <v-content>

        <!-- todo: read vuetify on how below work -->
        <!--<v-container fluid fill-height class="grey lighten-4">-->
        <!--<v-layout justify-center align-center>-->
        <!--<v-flex shrink>-->
        <!--</v-flex>-->
        <!--</v-layout>-->
        <!--</v-container>-->

        <!-- content that will be inserted by vue-router-->
        <router-view/>

      </v-content>

    </v-app>

  </div>
</template>

<script>

  // styles
  import 'normalize.css';

  // components
  import Porlet from "./layouts/porlet/porlet";

  export default {
    name: 'App',
    components: {Porlet},
    data: function () {
      return {
        drawer: null,
        items: [
          {icon: 'view_column', text: 'Flexbox', url: '/flexbox'},
          {icon: 'view_quilt', text: 'Grid', url: '/grid'},

          // {heading: 'Labels'},
          // {icon: 'touch_app', text: 'Reminders'},
          // {divider: true},
          // {heading: 'Labels'},
          // {icon: 'add', text: 'Create new label'},
          // {divider: true},
          // {icon: 'archive', text: 'Archive'},
          // {icon: 'delete', text: 'Trash'},
          // {divider: true},
          // {icon: 'settings', text: 'Settings'},
          // {icon: 'chat_bubble', text: 'Trash'},
          // {icon: 'help', text: 'Help'},
          // {icon: 'phonelink', text: 'App downloads'},
          // {icon: 'keyboard', text: 'Keyboard shortcuts'}
        ]
      }
    }
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

  .application--wrap {

    nav.toolbar {
      position: fixed;
    }

  }

</style>


