<template>
  <div class="about__team">
    <img class="about__img" :src="AboutImg" alt="" />
    <h2 class="about__text">Muhammad Xalil</h2>
    <p class="about__disc">CEO</p>
  </div>
</template>

<script>
import AboutImg from "../../assets/img/about.png";
export default {
  data() {
    return {
      AboutImg: AboutImg,
    };
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@300&display=swap");

.about__img {
  margin-bottom: 16px;
  // width: 80%;
}

.about__text {
  font-family: "Rubik", sans-serif;
  font-style: normal;
  color: #3db079;
  font-weight: 600;
  font-size: 24px;
  line-height: 120%;
  text-align: left;
}

.about__disc {
  font-family: "Rubik";
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 120%;
  color: #b4b4b4;
  text-align: left;
}
</style>
