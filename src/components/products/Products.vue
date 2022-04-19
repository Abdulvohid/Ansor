<template>
  <div class="product__hero">
    <h1 class="product__title">We create digital products</h1>
    <p class="product__disc">
      We are a very experienced web & mobile app development team We are a very
      experienced web & mobile app development team
    </p>
    <div class="product__count">
      <ProductCount :productlist="productlist" />
    </div>
  </div>
</template>

<script>
import ProductCount from "../products/ProductCount.vue";
export default {
  components: { ProductCount },
  name: "ProductComponents",
  data() {
    return {
      productlist: [
        {
          id: "1",
          number: "12",
          span: "+",
          disc: "Years of custom software development",
        },
        {
          id: "2",
          number: "12",
          span: "+",
          disc: "Years of custom software development",
        },
        {
          id: "3",
          number: "97",
          span: "%",
          disc: "of our team is hard core developers",
        },
        {
          id: "4",
          number: "20",
          disc: "of our team is hard core developers",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@600&display=swap");

.product__hero {
  text-align: center;
  background: #163828;
  margin-top: 76px;
}

.product__title {
  font-family: "Rubik", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 160%;
  color: #ffffff;
  padding-top: 80px;
}

.product__disc {
  text-align: center;
  max-width: 775px;
  font-family: "Rubik", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 160%;
  text-align: center;
  color: #c0c2c1;
  margin: 0 auto;
  padding-bottom: 72px;
}

.product__count {
  display: flex;
}

.ProductCount {
  display: flex;
}
</style>
