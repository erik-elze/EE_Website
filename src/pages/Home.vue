<template>
  <q-page class="flex flex-center bg-primary">
    <video autoplay muted loop class="myVideo">
      <source src=http://techslides.com/demos/sample-videos/small.mp4 type=video/mp4>
    </video>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>

<style lang="scss">
.myVideo {
  position: fixed;
  min-width: 100%;
  min-height: 100%;
}
</style>