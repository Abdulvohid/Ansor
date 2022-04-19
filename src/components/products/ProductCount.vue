<template>
  <div
    class="count__hero container"
    v-for="productlist in productlist"
    :key="productlist.id"
  >
    <div class="count__inner">
      <VueJsCounter
        class="count__body"
        start="0"
        end="12"
        duration="1000"
        thousand="."
        decimal=","
      >
      </VueJsCounter>
      <span class="count__span">{{ productlist.span }}</span>
    </div>

    <div class="count__disc">
      <p>{{ productlist.disc }}</p>
    </div>
  </div>
</template>

<script>
import VueJsCounter from "vue-js-counter";
export default {
  components: {
    VueJsCounter,
  },
  props: {
    productlist: {
      type: Object,
      reuqired: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Rubik&display=swap");

.count__hero {
  background: linear-gradient(338.57deg, #28a472 1.17%, #65c785 91.77%);
  border-radius: 16px;
  width: 302px;
  height: 217px;
  margin: 0 auto;
  margin-bottom: 111px;
}

.count__body {
  color: #fff;
  font-size: 80px;
  font-family: "Space Grotesk", sans-serif;
}

.count__span {
  color: #fff;
  font-size: 80px;
  font-family: "Space Grotesk", sans-serif;
}

.count__inner {
  display: flex;
  justify-content: center;
}

.count__disc {
  font-family: "Rubik", sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #c5e7d7;
  max-width: 237px;
  margin: 0 auto;
}
</style>
