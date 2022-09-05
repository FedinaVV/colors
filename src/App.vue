<template>
  <div id="app">
    <div class="wrapper">
      <colors-header/>
      <main class="main">
        <colors-slider/>
        <color-main-wrapper/>
      </main>
      <colors-footer/>
    </div>
  </div>
</template>

<script>

import ColorMainWrapper from './components/colors-main-wrapper';
import ColorsHeader from "@/components/colors-header";
import ColorsFooter from "@/components/colors-footer";
import ColorsSlider from "@/components/colors-slider";

export default {
  name: 'App',
  components: {
    ColorsSlider,
    ColorsFooter,
    ColorsHeader,
    ColorMainWrapper
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

.wrapper {
  min-height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.main {
  flex: 1 1 auto;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  border: 0;
}

ul, ol, li {
  list-style: none;
}

ol{
  padding: 0;
  margin: 0;
}

a {
  text-decoration: none;
}

h1, h1, h3, h4, h5, h6 {
  font-weight: inherit;
  font-size: inherit;
}

body {
  height: 100%;
  line-height: 1.2;
  font-size: 16px;
  color: #195557;
  font-family: 'Inter', sans-serif;
  background-color: #ffffff;
}

[class*="__container"] {
  max-width: 1792px;
  margin: 0 auto;
  box-sizing: content-box;
  padding: 0 15px;
}


/*-------------------------------Styles for slider--------------------------*/

.hooper{
  height: 100%!important;
}

.hooper-next .icon-arrowRight, .hooper-prev .icon-arrowLeft{
  display: none!important;
}

.hooper-next:before{
  content: url("./assets/images/arrow-next.svg");
}

.hooper-prev:before{
  content: url("./assets/images/arrow-prev.svg");
}

.hooper-pagination{
  bottom: 52px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 16px;
  padding: 6.5px 16px;
}

.hooper-indicator{
  width: 6px;
  height: 6px;
  opacity: 0.2;
  margin: 0 4px;
  vertical-align: middle
}

.hooper-indicator.is-active{
  background-color: #FFFFFF;
  opacity: 1;
}

</style>
