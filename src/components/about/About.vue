<template>
  <div class="slider__hero container">
    <div class="slider__title">
      <h2 class="inner__text">About Our team</h2>
      <p class="slide__disc">
        We are a very experienced web & mobile app development team We are a
        very experienced web & mobile app development team
      </p>
    </div>
    <div class="slider">
      <Carousel :settings="settings" :breakpoints="breakpoints">
        <Slide v-for="slide in 10" :key="slide">
          <div class="slider__item"><about-component /></div>
        </Slide>

        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>
    <div class="modal__btn">
      <ModalBtn />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";
import AboutComponent from "../about/AboutComponent.vue";
import ModalBtn from "../../library/buttons/ModalBtn.vue";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "BreakPoints",
  components: {
    Carousel,
    Slide,
    Navigation,
    AboutComponent,
    ModalBtn,
  },
  data: () => ({
    // carousel settings
    settings: {
      itemsToShow: 5,
      snapAlign: "center",
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 3.5,
        snapAlign: "center",
      },
      // 1024 and up
      1024: {
        itemsToShow: 5,
        snapAlign: "start",
      },
    },
  }),
});
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@300&display=swap");

.slider {
  .carousel__prev {
    display: none !important;
  }

  .carousel__next {
    display: none !important;
  }

  .carousel * {
    gap: 24px !important;
  }
}

.slider__hero {
  margin-top: 120px;
  text-align: center;
}

.slide__disc {
  text-align: center;
  max-width: 775px;
  font-family: "Rubik", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 160%;
  color: #969998;
  margin: 0 auto;
  margin-bottom: 48px;
}

.modal__btn {
  margin-top: 48px;
}
</style>
