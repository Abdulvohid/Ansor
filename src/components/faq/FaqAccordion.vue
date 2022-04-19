<template>
  <div class="accordion__hero container">
    <div class="accordion__title">
      <h1 class="inner__text">FAQ?</h1>
    </div>
    <div class="accordion" role="tablist">
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button
            class="accordion__text"
            block
            v-b-toggle.accordion-1
            variant="info"
            >We give you exact quote before starting your project, and we stick
            to it!
            <span>+</span>
          </b-button>
        </b-card-header>
        <b-collapse
          id="accordion-1"
          visible
          accordion="my-accordion"
          role="tabpanel"
        >
          <b-card-body>
            <b-card-text class="accordion__disc">{{ text }}</b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button
            class="accordion__text"
            block
            v-b-toggle.accordion-2
            variant="info"
            >We give you exact quote before starting your project, and we stick
            to it!
            <span>+</span>
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text class="accordion__disc">{{ text }}</b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button
            class="accordion__text"
            block
            v-b-toggle.accordion-3
            variant="info"
            >We give you exact quote before starting your project, and we stick
            to it! <span>+</span></b-button
          >
        </b-card-header>
        <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text class="accordion__disc">{{ text }}</b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: `
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
          richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
          brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
          tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
          assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
          wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
          vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
          synth nesciunt you probably haven't heard of them accusamus labore VHS.
        `,
    };
  },
};
</script>

<style lang="scss" scoped>
.accordion__text {
  font-family: "Rubik" sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 160%;
  color: #2d3331;

  &.collapsed {
    span {
      transform: rotate(0);
      translate: 1s ease;
    }
  }

  span {
    translate: 1s ease;
    transform: rotate(405deg);
  }
}
.accordion__hero {
  margin: 0 auto;
  text-align: center;

  .accordion {
    max-width: 952px;
    margin: 0 auto;
    background: #ffffff;
    box-shadow: 12px 15px 48px rgba(0, 0, 0, 0.08);
    border-radius: 8px;
    margin-bottom: 16px;
    text-align: left;
  }
  .btn-info {
    width: 100%;
    border: none;
    background: #fff;
    text-align: left;
    display: flex;
    justify-content: space-between;

    &:focus {
      box-shadow: none;
    }

    &:focus-visible {
      border: none;
      box-shadow: none;
    }
  }
  .card-header {
    border: none;
    background: transparent;
  }
}

.accordion__disc {
  font-family: "Rubik";
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 160%;
  color: #969998;
}
</style>
