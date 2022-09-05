<template>
  <hooper :settings="hooperSettings" class="colors-slider">
    <slide class="colors-slider__slide">
      <img src="@/assets/images/img_for_slider.png" alt="Image-for-slider">
      <div class="colors-slider__text">
        <h1 class="colors-slider__text-heading">Краски</h1>
        <div class="colors-slider__text-subheading">
          Идеально подходят для стен и других поверхностей. <br> Найди свой идеальный цвет!
        </div>
      </div>
    </slide>
    <slide class="colors-slider__slide">
      <img src="@/assets/images/img_for_slider.png" alt="Image-for-slider">
      <div class="colors-slider__text">
        <h1 class="colors-slider__text-heading">Краски</h1>
        <div class="colors-slider__text-subheading">
          Идеально подходят для стен и других поверхностей. <br> Найди свой идеальный цвет!
        </div>
      </div>
    </slide>
    <slide class="colors-slider__slide">
      <img src="@/assets/images/img_for_slider.png" alt="Image-for-slider">
      <div class="colors-slider__text">
        <h1 class="colors-slider__text-heading">Краски</h1>
        <div class="colors-slider__text-subheading">
          Идеально подходят для стен и других поверхностей. <br> Найди свой идеальный цвет!
        </div>
      </div>
    </slide>
    <slide class="colors-slider__slide">
      <img src="@/assets/images/img_for_slider.png" alt="Image-for-slider">
      <div class="colors-slider__text">
        <h1 class="colors-slider__text-heading">Краски</h1>
        <div class="colors-slider__text-subheading">
          Идеально подходят для стен и других поверхностей. <br> Найди свой идеальный цвет!
        </div>
      </div>
    </slide>
    <slide class="colors-slider__slide">
      <img src="@/assets/images/img_for_slider.png" alt="Image-for-slider">
      <div class="colors-slider__text">
        <h1 class="colors-slider__text-heading">Краски</h1>
        <div class="colors-slider__text-subheading">
          Идеально подходят для стен и других поверхностей. <br> Найди свой идеальный цвет!
        </div>
      </div>
    </slide>
    <slide class="colors-slider__slide">
      <img src="@/assets/images/img_for_slider.png" alt="Image-for-slider">
      <div class="colors-slider__text">
        <h1 class="colors-slider__text-heading">Краски</h1>
        <div class="colors-slider__text-subheading">
          Идеально подходят для стен и других поверхностей. <br> Найди свой идеальный цвет!
        </div>
      </div>
    </slide>

    <hooper-navigation slot="hooper-addons"></hooper-navigation>
    <hooper-pagination slot="hooper-addons"></hooper-pagination>

  </hooper>


</template>

<script>
import {
  Hooper,
  Slide,
  Pagination as HooperPagination,
  Navigation as HooperNavigation
} from 'hooper';
import 'hooper/dist/hooper.css';

export default {
  name: "colors-slider",
  components: {
    Hooper,
    Slide,
    HooperPagination,
    HooperNavigation
  },
  data() {
    return {
      hooperSettings: {
        wheelControl: false,
      }
    };
  }
}
</script>

<style scoped lang="scss">

.colors-slider {
  margin: 104px 0 0 0;

  &__slide {
    position: relative;
  }

  &__text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }

  &__text-heading {
    font-size: 72px;
    font-weight: 400;
    color: #FFFFFF;
    line-height: 0.88;
    letter-spacing: -0.02em;
    margin-bottom: 24px;
  }

  &__text-subheading {
    font-size: 16px;
    font-weight: 500;
    color: #FFFFFF;
    line-height: 1.3;
    letter-spacing: 0.02em;
  }
}

@media screen and (max-width: 768px) {
  .colors-slider {
    display: none;
  }
}

</style>