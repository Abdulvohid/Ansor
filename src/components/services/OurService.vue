<template>
  <div class="servic__title container">
    <h1 class="inner__text">Our services</h1>
  </div>

  <div class="servic__hero container">
    <div v-for="service in cardservice" :key="service.id" class="card__item">
      <OurServiceComponent :service="service" />
    </div>
  </div>
</template>

<script>
import OurServiceComponent from "./OurServiceComponent.vue";
import DedicatedIcon from "../../assets/icon/dedicated.png";

export default {
  components: { OurServiceComponent },
  data() {
    return {
      icon: DedicatedIcon,
      cardservice: [
        {
          id: 1,
          icon: DedicatedIcon,
          text: "Dedicated team",
          disc: "We can make aweasome websites and Apps.We can make aweasome websites ....",
        },
        {
          id: 1,
          icon: DedicatedIcon,
          text: "Dedicated team",
          disc: "We can make aweasome websites and Apps.We can make aweasome websites ....",
        },
        {
          id: 1,
          icon: DedicatedIcon,
          text: "Dedicated team",
          disc: "We can make aweasome websites and Apps.We can make aweasome websites ....",
        },
        {
          id: 1,
          icon: DedicatedIcon,
          text: "Dedicated team",
          disc: "We can make aweasome websites and Apps.We can make aweasome websites ....",
        },
        {
          id: 1,
          icon: DedicatedIcon,
          text: "Dedicated team",
          disc: "We can make aweasome websites and Apps.We can make aweasome websites ....",
        },
        {
          id: 1,
          icon: DedicatedIcon,
          text: "Dedicated team",
          disc: "We can make aweasome websites and Apps.We can make aweasome websites ....",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.servic__hero {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  gap: 25px;
}

.servic__title {
  width: 100%;
  margin-top: 120px;
}
</style>
