<template>
  <div class="particle__body">
    <vue-particles
      color="#dedede"
      :particleOpacity="0.4"
      :particlesNumber="100"
      shapeType="circle"
      :particleSize="2"
      linesColor="#dedede"
      :linesWidth="1"
      :lineLinked="false"
      :lineOpacity="0.2"
      :linesDistance="150"
      :moveSpeed="2"
      :hoverEffect="false"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    >
    </vue-particles>
  </div>
</template>

<script>
export default {
  name: "ParticleComponents",
};
</script>

<style lang="scss" scoped>
vue-particles {
  width: 100px;
  height: 100px;
}
</style>
