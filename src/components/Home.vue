<template>
  <div class="home-body">
    <Header />
    <OurService />
    <About />
    <Products />
    <Partner />
    <Portfolio />
    <FaqAccordion />
    <Form />
  </div>
</template>

<script>
import Header from "./header/Header.vue";
import OurService from "./services/OurService.vue";
import About from "../components/about/About.vue";
import Products from "../components/products/Products.vue";
import Partner from "../components/partner/Partner.vue";
import Portfolio from "../components/portfolio/Portfolio.vue";
import FaqAccordion from "./faq/FaqAccordion.vue";
import Form from "../components/form/Form.vue";

export default {
  name: "HomeComponent",
  components: {
    Header,
    OurService,
    About,
    Products,
    Partner,
    Portfolio,
    FaqAccordion,
    Form,
  },
};
</script>

<style scoped>
.home-body {
  overflow: hidden;
}
</style>
