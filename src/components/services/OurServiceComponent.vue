<template>
  <div class="servic__card">
    <div class="servic__icon">
      <img :src="service.icon" alt="" />
    </div>
    <h2 class="servic__text">{{ service.text }}</h2>
    <p class="servic__disc">
      {{ service.disc }}
    </p>
  </div>
</template>

<script>
export default {
  props: ["service"],
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap");

.servic__card {
  margin-top: 48px;
  border: 1px solid #e8e8e8;
  border-radius: 16px;
  // width: 464px;
  height: 232px;
  padding: 28px 0 0 32px;
}

.servic__icon {
  margin-bottom: 12px;
}

.servic__text {
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #3db079;
  font-family: "Rubik", sans-serif;
  margin-bottom: 8px;
}

.servic__disc {
  font-family: "Montserrat", sans-serif;
  color: #969998;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
}
</style>
