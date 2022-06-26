<template>
  <button :class="buttonClass" type="button" @click="onButtonClicked"></button>
</template>

<script lang="ts">
import {ref} from 'vue'

export default {
  name: 'BNavbarToggle',
  props: {
    target: String,
  },
  setup(props: any) {
    const buttonClass = ref({
      'navbar-toggler': true,
      'collapsed': true,
    })
    function onButtonClicked() {
      buttonClass.value.collapsed = !buttonClass.value.collapsed
      if (props.target.length) {
        const el = document.getElementById(props.target)
        el.classList.toggle('show')
      }
    }
    return {
      buttonClass,
      onButtonClicked,
    }
  },
}
</script>

<style scoped></style>
