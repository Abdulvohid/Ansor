<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,400;0,500;0,600;1,300;1,400;1,500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Rubik:ital,wght@0,400;0,500;0,600;1,300;1,400;1,500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap");

:root {
  --title-color: #3db079;
  --text-color: #969998;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

h1,
h2,
h3,
h4 {
  margin: 0;
  padding: 0;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 75px;
  box-sizing: border-box;
}

.inner__text {
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 48px;
  line-height: 160%;
  color: #2d3331;
}
</style>
