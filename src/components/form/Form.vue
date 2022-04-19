<template>
  <div class="form__hero container">
    <div class="form__title">
      <div class="form__img">
        <img :src="formImg" alt="" />
        <img src="" alt="">
      </div>
      <h2 class="inner__text">Contact Us</h2>
      <p class="form__disc">
        We give you exact quote before starting your project, and we stick to
        it!
      </p>
    </div>
  </div>
</template>

<script>
import Form from "../../assets/img/form.png";

export default {
  name: "FormComponent",

  data() {
    return {
      formImg: Form,
    };
  },
};
</script>

<style lang="scss" scoped>
.form__disc {
  font-family: "Rubik" sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  color: #b4b4b4;
  line-height: 160%;
  max-width: 465px;
}
</style>
