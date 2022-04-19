<template>
  <div class="inner__title container">
    <div id="title">We want to work with you</div>
    <div id="subtitle">
      <span class="subtitle__disc"
        >We are a very experienced web & mobile app development team
      </span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Rubik&display=swap");
.subtitle__disc {
  font-family: "Rubik", sans-serif;
  max-width: 782px;
}

.inner__title {
  position: relative;
  padding-bottom: 30px;
}
#title {
  top: 34%;
  left: 0;
  right: 0;
  margin-top: -80px;
  text-align: center;
  font-style: normal;
  font-weight: bold;
  font-family: "Comfortaa", cursive;
  font-size: 96px;
  line-height: 160%;
  padding-left: 20px;
  background: -webkit-linear-gradient(white, #dbdde0, #38495a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation-duration: 6s;
  animation-iteration-count: infinite;
  animation-timing-function: ease;
  animation-name: animGravity;
  color: #193b2b;
  // max-width: 1237px;
}

#subtitle {
  position: relative;
  margin: 0 auto;
  width: 48%;
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 160%;
  text-align: center;
  color: #c0ddcf;
  top: 45%;
  left: 0;
  right: 0;
  text-align: center;
  max-width: 782px;
}

#subtitle span {
  color: #d8d8d8;
  animation-duration: 6s;
  animation-iteration-count: infinite;
  animation-timing-function: ease;
  font-weight: 400;
  font-size: 32px;
  max-width: 782px !important;
}

#subtitle span:nth-child(1) {
  animation-name: animDont;
}

#subtitle span:nth-child(2) {
  animation-name: animLet;
}

#subtitle span:nth-child(3) {
  animation-name: animGo;
}

@keyframes animGravity {
  0% {
    transform: translateY(-26px);
    opacity: 0;
  }
  30%,
  80% {
    padding-left: 40px;
    transform: translateY(0px);
    opacity: 1;
  }
  92%,
  100% {
    padding-left: 35px;
    transform: translateY(-4px);
    opacity: 0;
  }
}

@keyframes animGravity {
  0% {
    transform: translateY(-26px);
    opacity: 0;
  }
  30%,
  80% {
    padding-left: 40px;
    transform: translateY(0px);
    opacity: 1;
  }
  92%,
  100% {
    padding-left: 35px;
    transform: translateY(-4px);
    opacity: 0;
  }
}
@keyframes animDont {
  0%,
  15% {
    transform: translateY(-26px);
    opacity: 0;
  }
  35%,
  80% {
    transform: translateY(0px);
    opacity: 1;
  }
  92%,
  100% {
    transform: translateY(-4px);
    opacity: 0;
  }
}
@keyframes animLet {
  0%,
  25% {
    transform: translateY(-26px);
    opacity: 0;
  }
  45%,
  80% {
    transform: translateY(0px);
    opacity: 1;
  }
  92%,
  100% {
    transform: translateY(-4px);
    opacity: 0;
  }
}
@keyframes animGo {
  0%,
  35% {
    transform: translateY(-26px);
    opacity: 0;
  }
  55%,
  80% {
    transform: translateY(0px);
    opacity: 1;
  }
  92%,
  100% {
    transform: translateY(-4px);
    opacity: 0;
  }
}

@media screen and (max-width: 1220px) {
  #title {
    font-size: 70px;
  }
}
</style>
