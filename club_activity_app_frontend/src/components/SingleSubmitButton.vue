<template>
  <button :disabled="disabled || processing" @click="handleClick">
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
        console.log("proces")
        this.onclick()
          .then(() => {
              console.log("processing")
            this.processing = false;
          });
      },
    },
  };
</script>