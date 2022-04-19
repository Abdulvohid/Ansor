<template>
  <div class="talk">
    <button>
      LET’S TALK
      <span></span>
      <span></span>
      <span></span>
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.talk {
  position: absolute;
  z-index: 100;
  left: 46%;
  bottom: 85px;
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
</style>
