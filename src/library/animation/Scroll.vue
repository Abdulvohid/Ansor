<template>
  <div class="scroll">
    <span> scroll </span>
    <span class="tree-span">
      <span class="tree-span-inner"></span>
    </span>
  </div>
</template>

<script>
export default {
  name: "scrollHeader",
};
</script>

<style lang="scss" scoped>
.scroll {
  // position: absolute;
  // right: 11%;
  // bottom: 30%;
  transform: rotate(90deg);
  z-index: 1000;

  span {
    color: rgba(255, 255, 255, 1);
    margin-right: 5px;
    font-family: "Poppins", sans-serif;
  }

  .tree-span {
    position: absolute;
    overflow: hidden;
    // right: -143%;
    width: 53px;
    top: 11px;
    height: 1px;
    background: rgba(255, 255, 255, 0.5);

    .tree-span-inner {
      position: absolute;
      left: -20px;
      width: 53px;
      top: 0;
      height: 1px;
      background: white;
      animation: linee linear 5s infinite;

      @keyframes linee {
        0% {
          transform: translateX(0);
        }
        50% {
          transform: translateX(20px);
        }
        100% {
          transform: translateX(0);
        }
      }
    }
  }
}
</style>
