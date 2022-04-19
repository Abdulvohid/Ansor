<template>
  <div class="partner__item">
    <img :src="partners.img" alt="" />
  </div>
</template>
<script>
export default {
  props: {
    partners: {
      type: Object,
      required: true,
    },
  },
  data() {},
};
</script>

<style lang="scss" scoped>
.partner__img {
  display: flex;
}
</style>
