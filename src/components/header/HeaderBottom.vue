<template>
  <div class="animation__body">
    <div class="bg__img">
      <div class="talk">
        <button>
          LET’S TALK
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <scroll class="scroll" />
    </div>
  </div>
</template>

<script>
import Scroll from "../../library/animation/Scroll.vue";
export default {
  components: { Scroll },
};
</script>

<style lang="scss" scoped>
.animation__body {
  position: relative;
}
.bg__img {
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  // top: 53%;
  // z-index: 100001;
  background-image: url("../../assets/img/test.png");
  background-position: bottom;
  background-size: 100%;
  background-repeat: no-repeat;
  min-width: 100%;
  height: 450px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  // gap: 50px;
  // -webkit-box-shadow: 4px -63px 56px 0px rgba(255, 255, 255, 0.2);
  // -moz-box-shadow: 4px -63px 56px 0px rgba(255, 255, 255, 0.2);
  // box-shadow: 4px -63px 56px 0px rgba(255, 255, 255, 0.2);
}

.talk {
  // position: absolute;
  z-index: 100;
  // left: 46%;
  // bottom: 85px;
  margin: 0 auto;
  margin-bottom: 30px;
  padding-top: 208px;
  button {
    width: 130px;
    height: 130px;
    border-radius: 50%;
    background-color: #fff;
    border: none;
    outline: none;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 160%;
    text-align: center;
    color: #133224;
    position: relative;
    cursor: pointer;
    span {
      position: absolute;
      opacity: 0.5;
      border: 1px solid #ffffff;
      box-sizing: border-box;
      border-radius: 50%;

      &:nth-child(1) {
        width: 150px;
        height: 150px;
        left: -10px;
        top: -10px;
        animation: line1 linear 2s infinite;
        @keyframes line1 {
          0% {
            transform: scale(0.6);
          }
          75% {
            opacity: 0.1;
          }
          100% {
            transform: scale(0.8);
            opacity: 0;
          }
        }
      }
      &:nth-child(2) {
        width: 180px;
        height: 180px;
        left: -21%;
        top: -21%;
        animation: line1 linear 2s infinite;
        @keyframes line1 {
          0% {
            transform: scale(0.6);
          }
          75% {
            opacity: 0.1;
          }
          100% {
            transform: scale(1);
            opacity: 0;
          }
        }
      }

      &:nth-child(3) {
        width: 250px;
        height: 250px;
        left: -47%;
        top: -47%;
        animation: line1 linear 2s infinite;
        @keyframes line1 {
          0% {
            transform: scale(0.8);
          }
          75% {
            opacity: 0.1;
          }
          100% {
            transform: scale(1.2);
            opacity: 0;
          }
        }
      }
    }
  }
}

.scroll {
  position: absolute;
  right: 100px;
  bottom: 124px;
}
</style>
