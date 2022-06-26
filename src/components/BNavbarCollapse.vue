<template>
  <div class="navbar-collapse collapse">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {ref} from 'vue'

export default {
  name: 'BNavbarCollapse',
  setup() {
    const navCollapseClass = ref({
      'navbar-collapse': true,
      'collapse': true,
      'show': false,
    })
    return {
      navCollapseClass,
    }
  },
}
</script>

<style scoped></style>
