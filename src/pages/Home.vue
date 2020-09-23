<template>
  <q-page class="flex flex-center bg-primary">
    <div class="q-pa-md"
          style="width: 100%"
    >
    <q-parallax>
      <template v-slot:media>
        <img class='bgImage' src="http://erikelze-events.de/images/banner.jpg">
      </template>

      <template v-slot:content="scope">
        <div
          class="absolute column items-center"
          :style="{
            opacity: 0.45 + (1 - scope.percentScrolled) * 0.55,
            top: (scope.percentScrolled * 60) + '%',
            left: 0,
            right: 0
          }"
        >
          <img src="https://erikelze-events.de/images/V3_Horizontal_white.png" style="width: 100%; height: auto">
        </div>
      </template>
    </q-parallax>
  </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>

<style lang="scss">
.bgImage:after {
  background-image: -moz-linear-gradient(top, rgba(23, 24, 32, 0.90), rgba(23, 24, 32, 0.90)), url(https://erikelze-events.de/images/overlay.png);
  background-image: -webkit-linear-gradient(top, rgba(23, 24, 32, 0.90), rgba(23, 24, 32, 0.90)), url(https://erikelze-events.de/images/overlay.png);
  background-image: -ms-linear-gradient(top, rgba(23, 24, 32, 0.90), rgba(23, 24, 32, 0.90)), url(https://erikelze-events.de/images/overlay.png);
  background-image: linear-gradient(top, rgba(23, 24, 32, 0.90), rgba(23, 24, 32, 0.90)), url(https://erikelze-events.de/images/overlay.png);
}
</style>