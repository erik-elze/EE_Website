<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>
        <q-list padding>
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

var linkData = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
]

export default {
  name: 'MainLayout',
  data () {
    return {
    }
  }
}
</script>
