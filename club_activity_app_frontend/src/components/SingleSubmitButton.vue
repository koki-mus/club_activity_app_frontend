<template>
  <button :disabled="disabled || processing" @click.prevent="handleClick">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'SingleSubmitButton',
    props: {
      // A function which returns Promise.
      onclick: {
        type: Function,
        required: true,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        processing: false,
      };
    },
    methods: {
      handleClick() {
        if (this.processing) return;
        this.processing = true;
        this.onclick()
          .then(() => {
            this.processing = false;
          });
      },
    },
  };
</script>