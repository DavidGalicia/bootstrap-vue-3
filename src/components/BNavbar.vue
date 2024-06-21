<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <slot></slot>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
export default {
  name: 'BNavbar',
  setup() {
    return {}
  },
}
</script>

<style scoped></style>
