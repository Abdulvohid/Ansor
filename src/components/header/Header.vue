<template>
  <div class="header__inner">
    <header class="header__hero">
      <nav class="header__content container">
        <div class="nav__logo">
          <router-link to="/">
            <img :src="Logo" alt="" />
          </router-link>
        </div>

        <nav class="nav__links">
          <ul>
            <li>
              <router-link to="/">About</router-link>
            </li>
            <li>
              <router-link to="/">Portfolio</router-link>
            </li>
            <li>
              <router-link to="/">Our Services</router-link>
            </li>
            <li><router-link to="/">Contact</router-link></li>
          </ul>
          <!-- <router-view></router-view> -->
        </nav>
        <NavBtn />
      </nav>
    </header>

    <main class="animation">
      <div class="header__tile">
        <header-title />
      </div>
      <div class="test">
        <particles class="particle__bg" />
      </div>
      <header-bottom />
    </main>
  </div>
</template>

<script>
import Logo from "../../assets/img/logo.png";
import NavBtn from "../../library/buttons/NavBtn.vue";
import HeaderTitle from "../../library/animation/HeaderTitle.vue";
import HeaderBottom from "./HeaderBottom.vue";
import Particles from "../../library/animation/Particles.vue";

export default {
  name: "HeaderComponent",
  components: {
    Particles,
    NavBtn,
    HeaderTitle,
    HeaderBottom,
  },
  data() {
    return {
      Logo: Logo,
    };
  },
};
</script>

<style lang="scss" scoped>
.test {
  transform: translateY(-350px);
  width: 20%s;
}
.animation {
  // padding-top: 208px;
  position: relative;
}

.header__tile {
  transform: translateY(208px);
}
.header__hero {
  background: #163828;
  padding-top: 16px;
  width: 100%;
}

.header__inner {
  background: #163828;
  position: relative;
}

.header__content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 100;
}

.nav__links {
  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 25px;
  }

  li {
    gap: 40px;
    list-style: none;
  }

  a {
    text-decoration: none;
    font-family: Poppins;
    color: #fff;
    position: relative;
    cursor: pointer;
    &:hover {
      border-bottom: 2px solid #fff;
    }
  }
}

@media screen and (max-width: 1220px) {
  .header__links {
    font-size: 12px;
  }
}

.nav__btn {
  width: 140px;
}
</style>
