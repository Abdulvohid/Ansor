<template>
  <div class="modal__hero container">
    <b-button v-b-modal.modal-center>
      <img :src="PlayBtn" alt="" />
    </b-button>

    <b-modal id="modal-center" centered>
      <iframe
        width="100%"
        height="634"
        src="https://www.youtube.com/embed/DRofaw4MmyI"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe
    ></b-modal>
    <div class="modal__hero__icon">
      <img :src="PlayBtnIcon" alt="" />
    </div>
  </div>
</template>

<script>
import PlayBtn from "../../assets/icon/play-button.png";
import PlayBtnIcon from "../../assets/icon/play-icon.png";

export default {
  data() {
    return {
      PlayBtn: PlayBtn,
      PlayBtnIcon: PlayBtnIcon,
    };
  },
};
</script>

<style lang="scss">
.modal__hero {
  display: flex;
  justify-content: center;
}
.btn-secondary {
  background: transparent !important;
  border: none !important;
  box-shadow: none;

  &:hover {
    background: transparent;
    box-shadow: none;
  }

  &:active {
    background: transparent;
    border: none !important;
    box-shadow: none;
  }

  &:focus {
    background: transparent;
    border: none !important;
    box-shadow: none !important;
  }

  &:focus-visible {
    border: none !important;
    background: transparent;
    box-shadow: none;
  }

  .modal-header {
    border-bottom: none !important;
  }
}
.modal-dialog {
  max-width: 100% !important;
}

// #modal-center {
//   max-width: 100%;
// }

.modal-content {
  max-width: 1800px !important;
  margin: 0 auto !important;
}
</style>
