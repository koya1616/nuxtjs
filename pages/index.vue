<template>
  <div>
    <v-app>
      <v-app-bar>
        <v-app-bar-title>Improve stretch</v-app-bar-title>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer">
          <VIcon :icon="mdiPost" />
        </v-app-bar-nav-icon>
      </v-app-bar>
      <v-navigation-drawer
        v-model="drawer"
        location="bottom"
        temporary
      >
        <v-list
          :items="items"
        ></v-list>
      </v-navigation-drawer>
      <div class="img-wrapper">
        <img src="~/assets/room1.jpg" />
      </div>
      <div class="img-wrapper">
        <img src="~/assets/room1.jpg" />
      </div>
      <div class="img-wrapper">
        <img src="~/assets/room1.jpg" />
      </div>
      <div class="img-wrapper">
        <img src="~/assets/room1.jpg" />
      </div>
      <div class="img-wrapper">
        <img src="~/assets/room1.jpg" />
      </div>
      <div class="img-wrapper">
        <img src="~/assets/room1.jpg" />
      </div>
      <div class="img-wrapper">
        <img src="~/assets/room1.jpg" />
      </div>
      <div class="img-wrapper">
        <img src="~/assets/room1.jpg" />
      </div>
      <div class="img-wrapper">
        <img src="~/assets/room1.jpg" />
      </div>
    </v-app>
  </div>
</template>

<script>
import { mdiPost } from '@mdi/js'

export default {
  data: () => ({
    drawer: false,
    group: null,
    items: [
      {
        title: 'Foo',
        value: 'foo',
      },
      {
        title: 'Bar',
        value: 'bar',
      },
      {
        title: 'Fizz',
        value: 'fizz',
      },
      {
        title: 'Buzz',
        value: 'yahoo.co.jp',
      },
    ],
  }),

  watch: {
    group () {
      this.drawer = false
    },
  },
}
</script>

<style lang="scss">
.img-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;

  img {
    width: 80%;
    aspect-ratio: 16/9;
  }
}
</style>