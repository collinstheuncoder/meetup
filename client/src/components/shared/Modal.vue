<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div
        class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header class="row row--header" id="modalTitle">
          <slot name="header">
            <span class="close" aria-label="Close modal" @click="close">
              Close
            </span>
          </slot>
        </header>
        <section class="row row--body" id="modalDescription">
          <slot name="body"></slot>
        </section>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "modal",
  methods: {
    close() {
      this.$emit("close");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../scss/style";

.modal {
  display: flex;
  flex-direction: column;
  max-width: 30rem;
  background-color: $white-color;
  box-shadow: 0 0 0.125rem 0 $shadow-color, 0 0.125rem 0.25rem 0 $shadow-color;
  overflow-x: auto;

  &-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &-fade {
    &-enter,
    &-leave-active {
      opacity: 0;
    }

    &-enter-active,
    &-leave-active {
      transition: opacity 0.5s ease;
    }
  }
}

.row {
  padding: 1rem;
}
</style>
