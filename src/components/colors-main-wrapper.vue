<template>
  <div class="colors-main-wrapper">
    <div class="colors-main-wrapper__container">
      <keep-alive>
        <router-view/>
      </keep-alive>
    </div>
  </div>
</template>

<script>

export default {
  name: "colors-main-wrapper",
  data() {
    return {}
  },
  computed: {}
}
</script>

<style scoped>
</style>