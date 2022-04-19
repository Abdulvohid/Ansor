<template>
  <button class="nav__btn">Contact</button>
</template>

<script>
export default {};
</script>

<style lang="scss">
.nav__btn {
  width: 180px;
  height: 56px;
  background: #3db079;
  border-radius: 8px;
  border: none;
  // padding: 22px 40px;
  cursor: pointer;
  color: #fff;
  font-family: "montserrat";
  transition: 0;

  &:hover {
    -webkit-box-shadow: 3px 26px 14px 17px rgba(61, 176, 121, 0.75);
    -moz-box-shadow: 3px 26px 14px 17px rgba(61, 176, 121, 0.75);
    box-shadow: 0px 1px 38px 3px rgb(61 176 121 / 75%);
    // transition: 0.5s ease;
  }
}

@media screen and (max-width: 1220px) {
  .nav__btn {
    width: 100px;
    align-items: center;
    display: flex;
  }
}
</style>
