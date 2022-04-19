<template>
  <div class="portfolio__hero container">
    <div class="portfolio__title">
      <h2 class="inner__text">Our portfolio</h2>
      <p class="portfolio__disc">
        We give you exact quote before starting your project, and we stick to
        it!
      </p>
    </div>
  </div>
  <PortfolioItem />
</template>
<script>
import PortfolioItem from "./PortfolioItem.vue";
export default {
  name: "PortfolioComponent",
  components: { PortfolioItem },
};
</script>

<style lang="scss" scoped>
.portfolio__hero {
  margin-top: 120px !important;
  display: flex;
  margin: 0 auto;
  align-items: center;
  text-align: center;
  justify-content: center;
}

.portfolio__disc {
  font-family: "Rubik" sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 160%;
  text-align: center;
  color: #b4b4b4;
  max-width: 500px;
}
</style>
