<template>
  <div class="portfolio__item__hero container">
    <div class="portfolio__item item_1">
      <div>
        <img :src="portImg" alt="" />
        <p>We give you exact quote before startin</p>
      </div>
    </div>

    <div class="portfolio__item item_2">
      <img :src="portImg" alt="" />
      <p>We give you exact quote before startin</p>
    </div>

    <div class="portfolio__item item_3">
      <div>
        <img :src="portImg" alt="" />
        <p>We give you exact quote before startin</p>
      </div>
    </div>

    <div class="portfolio__item item_4">
      <img :src="portImg" alt="" />
      <p>We give you exact quote before startin</p>
    </div>

    <div class="portfolio__item item_5">
      <img :src="portImg" alt="" />
      <p>We give you exact quote before startin</p>
    </div>
  </div>
</template>

<script>
import AirBnb from "../../assets/img/Airbnb-Logo.png";
export default {
  data() {
    return {
      portImg: AirBnb,
    };
  },
};
</script>

<style lang="scss" scoped>
.portfolio__item__hero {
  gap: 40px;
  grid-template-areas:
    "a c  d"
    "b c e";
  display: grid;
  margin-bottom: 128px;
  text-align: center;
  align-items: center;

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
}

.item_1 {
  grid-area: a;
  background: #f7575c;
  border-radius: 16px;
  max-width: 464px;
  height: 351px;
}

.item_2 {
  grid-area: b;
  background: #f7ae2e;
  border-radius: 16px;
  max-width: 464px;
  height: 351px;
}

.item_3 {
  grid-area: c;
  background: #ee721c;
  border-radius: 16px;
  max-width: 464px;
  height: 100%;
}
.item_4 {
  grid-area: d;
  background: #00a3ee;
  border-radius: 16px;
  max-width: 464px;
  height: 351px;
}

.item_5 {
  grid-area: e;
  background: #3db079;
  border-radius: 16px;
  max-width: 464px;
  height: 351px;
}
</style>
