<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="headerBorder bg-secondary">
      <q-toolbar>
        <q-toolbar-title class="text-h6 text-weight-light">
          Erik Elze Events
        </q-toolbar-title>
        <q-list padding dense class="displayFlex text-weight-thin text-h6">
            <q-item
              v-ripple
              active-class="my-menu-link"
              clickable
              exact
              to='/'>
              <q-item-section>
                Home
              </q-item-section>
            </q-item>
            <q-item
              v-ripple
              active-class="my-menu-link"
              clickable
              exact
              to='/licht'>
              <q-item-section>
                Licht
              </q-item-section>
            </q-item>
            <q-item
              v-ripple
              active-class="my-menu-link"
              clickable
              exact
              to='/ton'>
              <q-item-section>
                Ton
              </q-item-section>
            </q-item>
            <q-item
              v-ripple
              active-class="my-menu-link"
              clickable
              exact
              to='/video'>
              <q-item-section>
                Video
              </q-item-section>
            </q-item>
            <q-item
              v-ripple
              active-class="my-menu-link"
              clickable
              exact
              to='/kontakt'>
              <q-item-section>
                Kontakt
              </q-item-section>
            </q-item>
      </q-list>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
.displayFlex {
  display: flex;
}

.headerBorder {
  border-bottom: 4px solid $accent;
}
</style>