<template>
  <div class="partners__hero container">
    <div class="partners__text">
      <h2>
        We are a trusted technology partner for
        <span>recognized brands</span>
      </h2>
      <p class="partners__disc">
        We give you exact quote before starting your project, and we stick to
        it! We give you exact quote before starting your project, and we stick
        to it!
      </p>
    </div>

    <div class="partner__item__link">
      <PartnerItem
        class="partner__item"
        :partners="partners"
        v-for="partners in partners"
        :key="partners"
      />
    </div>
  </div>
</template>

<script>
import PartnerItem from "./PartnerItem.vue";

import Microsoft from "../../assets/img/Microsoft.png";
import Airbnb from "../../assets/img/Airbnb.png";
import Hubspot from "../../assets/img/Hubspot.png";
import Walmar from "../../assets/img/Walmar.png";
export default {
  name: "PartnerComponents",
  components: { PartnerItem },

  data() {
    return {
      partners: [
        {
          img: Microsoft,
        },
        {
          img: Airbnb,
        },
        {
          img: Hubspot,
        },
        {
          img: Walmar,
        },
        {
          img: Hubspot,
        },
        {
          img: Airbnb,
        },
        {
          img: Walmar,
        },
        {
          img: Hubspot,
        },
        {
          img: Microsoft,
        },
        {
          img: Microsoft,
        },
        {
          img: Microsoft,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.partners__text {
  margin-top: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 82px;

  h2 {
    font-family: "Rubik" sans-serif;
    font-weight: 600;
    font-size: 48px;
    line-height: 160%;
    color: #2d3331;
    max-width: 708px;

    span {
      color: #3db079;
    }
  }

  .partners__disc {
    font-family: "Rubik";
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 160%;
    color: #b4b4b4;
    max-width: 503px;
    margin-top: 34px;
  }
}

.partner__item__link {
  display: grid;
  flex-wrap: wrap;
  grid-template-columns: repeat(6, 1fr);
  justify-content: space-between;
}

.partner__item {
  margin-bottom: 40px;
}
</style>
